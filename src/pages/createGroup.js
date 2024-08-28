import styled from "styled-components";
import { useState } from "react";
import CreateGroupModal from "../components/modals/createGroupModal";
import Toggle from "../components/toggle";
import ImgInput from "../components/imgInput";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";

const CenterOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const PageName=styled.h2`
    margin-top:40px;
    font-size:24px;
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-weight: 700;
    line-height: 30.05px;
    letter-spacing: -0.03em;
    text-align: center;

`
const InputOutter=styled.form`
    margin-top:40px;
    width:400px;
    gap:40px;
`
const Headname=styled.h3`
    margin-bottom:10px;
    font-size:16px;
`
const GroupNameOutter=styled.div`
    width:400px;
    height:75px
`
const GroupNameInput=styled.input`
    width: 380px;
    height: 45px;
    gap: 0px;
    border-radius: 6px;
    border: 1px solid #DDDDDD;
    padding-left:20px;

`

const RepresentImgOutter=styled.div`
    margin-top:40px;
    width:400px;
    height:75px
`


const GruopIntroOutter=styled.div`
    margin-top:40px;
    width:400px;
    height:150px

`
const GroupIntroInput=styled.textarea`
    width: 380px;
    height: 110px;
    gap: 0px;
    border-radius: 6px;
    border: 1px;
    border:1px solid #DDDDDD;
    resize:none;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: left;
    padding-top:20px;
    padding-left:20px;


`


const GroupReleaseOutter=styled.div`
    margin-top:40px;
    width:104px;
    height:64px;
    font-weight: 500;
    line-height: 20.03px;
    text-align: left;

`

const GroupPWOutter=styled.div`
    margin-top:40px;
    width:400px;
    height:75px
`
const GroupPW =styled.input`
    width: 380px;
    height: 45px;
    gap: 0px;
    border-radius: 6px;
    border: 1px solid #DDDDDD;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: left;
    padding-left:20px;

`
const Submit =styled.input`
    width: 400px;
    height: 50px;
    margin-top:60px;
    margin-bottom:21px;
    gap: 0px;
    border-radius: 6px;
    background-color: #282828;

    
    
    color:#FAFAFA;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.03px;
    letter-spacing: -0.03em;
    text-align: center;



`


function CreateGroup(){
    //그룹 만들기 버튼 on/off
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(false);


    const [modal,setModal]=useState();
    const [datas,setDatas]=useState();
    const [isPublic,setIsPublic]=useState(false);
    const [isComplete,setIsComplete]=useState();
    const [values,setValues] =useState({});
    const [img,setImg]=useState();
    const groupNameHandler= (e)=>{
        setValues(
            {...values ,
                "name": e.target.value,
            }
        ); 
    }
    const groupIntroHandler= (e)=>{
        
    setValues(
        {...values ,
            "introduction": e.target.value,
        }
    );
    }

    const groupReleaseHandler = ()=>{
        setValues(
            {...values ,
                "isPublic": !values.isPublic,
            }
            );
            console.log(values.isPublic);
}

    const groupPWHandler= (e)=>{
        
    setValues(
        {...values ,
            "password": e.target.value,
        }
    );
    }

    
    
    const checkSignUp = (e) => {

        e.preventDefault();
        const formImage = new FormData();
        formImage.append("image", img);
        console.log("보내기전");
        console.log(formImage);
        
      
        fetch("https://backend-b4qi.onrender.com/api/image", {
          method: "POST",
          body: formImage,
          
        }).then((response) => {
            if (response.ok === true) {
            return response.json();
            
            }
            setIsComplete(false);
            setModal(true);
            throw new Error("에러 발생!");
        })
        .catch((error) => {
            alert(error);
        }).then( (data) => {
            console.log("이미지주소")
            console.log(data.imageUrl)
            const groupData={
                "name": values.name,
                "introduction": values.introduction,
                "isPublic": values.isPublic,
                "password": values.password,
                "imageUrl": data.imageUrl,
            }
            console.log(JSON.stringify(groupData))
            
            fetch( "https://backend-b4qi.onrender.com/api/groups", {
                method: "POST",
                body: JSON.stringify(groupData),
                headers: {
                    "Content-Type": `application/json`, // application/json 타입 선언
                  },
                
            }).then((response) => {
                if (response.ok === true) {
                return response.json();
                
                }
                console.log(response.ok);
                setIsComplete(response.ok);
                setModal(true);
                return;
                
            })
            .catch((error) => {
                alert(error);
            })
            .then((data) => {
                if(data){
                    console.log("결과");
                    console.log(data);
                    setIsComplete(true);
                    setModal(true);
                    setDatas(data)
                    

                }
            });
                
            }
        )

        
      };
      

    return(
        <CenterOutter>
            <PageName>그룹 만들기</PageName>
            <InputOutter>
                <GroupNameOutter>
                    <Headname>그룹명</Headname>
                    <GroupNameInput type="text" value={values.name} onChange={groupNameHandler} placeholder="그룹명을 입력해 주세요"/>
                </GroupNameOutter>
                <RepresentImgOutter>
                    <Headname>대표 이미지</Headname>
                    <ImgInput image={img} onChange={setImg}></ImgInput>
                </RepresentImgOutter>
                <GruopIntroOutter>
                    <Headname>그룹 소개</Headname>
                    <GroupIntroInput onChange={groupIntroHandler} value={values.introduction} placeholder="그룹을 소개해주세요"></GroupIntroInput>
                </GruopIntroOutter>
                <GroupReleaseOutter>
                    <Headname>그룹 공개 선택</Headname>
                    <Toggle onChange={groupReleaseHandler} value={values.isPublic}></Toggle>
                </GroupReleaseOutter>
                <GroupPWOutter>
                    <Headname>비밀번호</Headname>
                    <GroupPW type="Password" onChange={groupPWHandler} value={values.password} placeholder="비밀번호를 입력해 주세요"></GroupPW>
                </GroupPWOutter>
                <Submit onClick={checkSignUp} type="submit" value="만들기"></Submit>
            </InputOutter>
            <CreateGroupModal modalOpen={modal} setModalOpen={setModal} isComplete={isComplete} data={datas}></CreateGroupModal>
        </CenterOutter>
        
    )
}

export default CreateGroup;