import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import exitIcon from "../../images/exitIcon.png"
import Toggle from "../toggle";
import ImgInput from "../imgInput";
import { useNavigate } from "react-router-dom";

const CreateModal=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    width: 400px;
    gap: 0px;
    border-radius: 6px;
    background:white;
    padding:40px;
`
const ModalOffButton=styled.img`
      display:position;
      position:absolute;
      width:30px;
      height:30px;
      top:20px;
      right:20px;
      
      

`


const CenterOutter=styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    align-items:center;
    background-color:#FAFAFA;
    padding:40px 80px 40px 80px;
    width: 1120px;
    height: 794px;
    gap: 0px;
    border-radius: 6px;

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
const InputOutters=styled.div`
    display:flex;
    justify-content:center;
    margin-top:40px;
    gap:40px;
`
const InputOutter=styled.div`
    width:400px;
    gap:40px;
`
const Line=styled.div`
    width:1px;
    height:100%;
    background-color:#DDDDDD;
`
const Headname=styled.h3`
    margin-bottom:10px;
    font-size:16px;
`
const NameOutter=styled.div`
    width:400px;
`
const NameInput=styled.input`
    width: 380px;
    height: 45px;
    gap: 0px;
    border-radius: 6px;
    border: 1px solid #DDDDDD;
    padding-left:20px;

`
const TagsOutter=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:400px;
    gap:15px;

`
const Tag=styled.div`
    display:flex;
    align-items:center;
    font-color: #8D8D8D;
    gap:1px;
    font-size:14px;
`
const TagName=styled.div`
    

`
const TagDelete=styled.img`
    width:16px;
    height:16px;

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
const PostIntroInput=styled.textarea`
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


const PostReleaseOutter=styled.div`
    margin-top:40px;
    width:104px;
    height:64px;
    font-weight: 500;
    line-height: 20.03px;
    text-align: left;

`

const PostPWOutter=styled.div`
    margin-top:40px;
    width:400px;
    height:75px
`
const PostPW =styled.input`
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

function InnerModal({setModalOpen,postId,postValues}){
    // 이전 값 관련 
    
    const [datas,setDatas]=useState();
    const [isComplete,setIsComplete]=useState();
    const [img,setImg]=useState();
    const [values,setValues] =useState({
        ...postValues,
    });
    const [tags,setTags]=useState([]);
    const [tag,setTag]=useState("")
    const navigate =useNavigate();
    
    

    useEffect(()=>{
        const handleload = async () => {
    
                setValues({...postValues,});
                setTags(postValues.tags)

                
            
        }
        handleload();  
        }

    ,[])

    const PostNicknameHandler= (e)=>{
        setValues(
            {...values ,
                "nickname": e.target.value,
            }
        ); 
    }
    const PostTitleHandler= (e)=>{
        setValues(
            {...values ,
                "title": e.target.value,
            }
        ); 
    }
    const PostContentHandler= (e)=>{
        
    setValues(
        {...values ,
            "content": e.target.value,
        }
    );
    }

    const PostTagHandler= (e)=>{
        
        setTag(e.target.value);
        }
    
    const PostTagsHandler= (e)=>{
        
        if(e.key === "Enter"){
                if(tags?.indexOf(tag) == -1){
                    
        
                }else{
                        setTag("");
                        return;
                }
                console.log("입력");
                console.log(tag);
                console.log(typeof(tags))
                console.log(tags)
                console.log(tag)

            
            setTags(tags => [...tags,tag]);
            console.log(tags)
            setTag("");
        }
        }

    const tagDeleteHandler= (e)=>{

    }

const PostLocationHandler= (e)=>{
        
    setValues(
            {...values ,
                "location": e.target.value,
            }
        );
}

const PostMomentHandler= (e)=>{
        
        setValues(
            {...values ,
                "moment": e.target.value,
            }
    );
}

    const PostReleaseHandler = ()=>{
        setValues(
            {...values ,
                "isPublic": !values.isPublic,
            }
            );
            console.log(values.isPublic);
}

    const PostPWHandler= (e)=>{
        
    setValues(
        {...values ,
            "postPassword": e.target.value,
        }
    );
    }


    
    
    const checkSignUp = (e) => {
        
        e.preventDefault();
        console.log("포스트아이디");
        console.log(postId);
        setValues(
            {
                ...values,
                "tags": tags,
            }
        )
        if (img) {
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
                  throw new Error("에러 발생!");
              })
              .catch((error) => {
                  alert(error);
              }).then( (data) => {
                  console.log("이미지주소")
                  console.log(data.imageUrl)
                  const moidifiedValues={
                    "nickname": values.nickname,
                    "title": values.title,
                    "content": values.content,
                    "postPassword": values.postPassword,
                    "imageUrl": data.imageUrl,
                    "tags": values.tags,
                    "location": values.location,
                    "moment": values.moment,
                    "isPublic": true,
                }
                  console.log(JSON.stringify(moidifiedValues))
                  
                  fetch( `https://backend-b4qi.onrender.com/api/posts/${postId}?postId=${postId}`, {
                    method: "PUT",
                    body: JSON.stringify(moidifiedValues),
                    headers: {
                        "postId": postId, // application/json 타입 선언
                        "Content-Type": "application/json",
                      },
                    
                }).then((response) => {
                  if (response.ok === true) {
                  
                      console.log(response)
                      return response.json();
                    
                      }
                      console.log("실패시 응답");
                      console.log(response)
                      setIsComplete(response.ok);
                      throw new Error(response.status);
                        
                    }).catch((err)=>{
                      if(err =="Error: 403"){
                          alert("비밀번호가 일치하지 않습니다.")
                      }else if(err == "Error: 404"){
                          alert("존재하지 않는 그룹입니다.")
                      }
                    })
                  .then((data) => {
                        if(data){
                            console.log("결과");
                            console.log(data);
                            alert("수정이 완료 되었습니다.")
                            
                        }
                  });
                      
                  }
              )
        }else{
            
                  
                const moidifiedValues={
                    "nickname": values.nickname,
                    "title": values.title,
                    "content": values.content,
                    "postPassword": values.postPassword,
                    "imageUrl": values.imageUrl,
                    "tags": values.tags,
                    "location": values.location,
                    "moment": values.moment,
                    "isPublic": true,
                }
                
                  console.log(JSON.stringify(moidifiedValues))
                  console.log("수정 전달 사항")
                  console.log(moidifiedValues)
                  
                  fetch( `https://backend-b4qi.onrender.com/api/posts/${postId}?postId=${postId}`, {
                      method: "PUT",
                      body: JSON.stringify(moidifiedValues),
                      headers: {
                          "postId": postId, // application/json 타입 선언
                          "Content-Type": "application/json",
                        },
                      
                  }).then((response) => {
                    if (response.ok === true) {
                    
                        console.log(response)
                        return response.json();
                      
                        }
                        console.log("실패시 응답");
                        console.log(response)
                        setIsComplete(response.ok);
                        throw new Error(response.status);
                          
                      }).catch((err)=>{
                        if(err =="Error: 403"){
                            alert("비밀번호가 일치하지 않습니다.")
                        }else if(err == "Error: 404"){
                            alert("존재하지 않는 그룹입니다.")
                        }
                      }).then((data) => {
                        if(data){
                        console.log("결과");
                        console.log(data);
                        alert("수정이 완료 되었습니다.")
                        
                        }
                        
                          
      
                      
                  });
        }
        
        
        
      };
    
    // const [verifyModal,setVerifyModal]=useState(); 

    return(
    
            <CenterOutter>
                <ModalOffButton src={exitIcon} onClick={()=>setModalOpen(false)}></ModalOffButton>
            <PageName>추억 수정</PageName>
            <InputOutters>
            <InputOutter>
                <NameOutter>
                    <Headname>닉네임</Headname>
                    <NameInput type="text" value={values.nickname} onChange={PostNicknameHandler} placeholder="닉네임을 입력해 주세요"/>
                </NameOutter>
                <NameOutter>
                    <Headname>제목</Headname>
                    <NameInput type="text" value={values.title} onChange={PostTitleHandler} placeholder="제목을 입력해 주세요"/>
                </NameOutter>
                <RepresentImgOutter>
                    <Headname>이미지</Headname>
                    <ImgInput image={img} onChange={setImg}></ImgInput>
                </RepresentImgOutter>
                <GruopIntroOutter>
                    <Headname>본문</Headname>
                    <PostIntroInput value={values.content} onChange={PostContentHandler}  placeholder="본문 내용을 입력해주세요"></PostIntroInput>
                </GruopIntroOutter>
                </InputOutter>
                <Line></Line>
                <InputOutter>
                <NameOutter>
                    <Headname>태그</Headname>
                    <NameInput type="text" value={tag} onChange={PostTagHandler} onKeyDown={PostTagsHandler} placeholder="태그 입력 후 Enter"/>
                    <TagsOutter>
                        {tags?.map( (e)=>{
                            console.log(e)
                            return(
                                <Tag key={e+1} >
                                    <TagName>
                                    {"#"+e}
                                    </TagName>
                                    <TagDelete src={exitIcon} onClick={()=>{tagDeleteHandler(e)}}>
                                    </TagDelete>
                                </Tag>
                            
                            )
                        }   
                        )}
                    </TagsOutter>
                </NameOutter>
                <NameOutter>
                    <Headname>장소</Headname>
                    <NameInput type="text" value={values.location} onChange={PostLocationHandler} placeholder="장소를 입력해 주세요"/>
                </NameOutter>
                <NameOutter>
                    <Headname>추억의 순간</Headname>
                    <NameInput type="date" value={values.moment} onChange={PostMomentHandler} />
                </NameOutter>
                <PostReleaseOutter>
                    <Headname>추억 공개 선택</Headname>
                    <Toggle onChange={PostReleaseHandler} value={values.isPublic}></Toggle>
                </PostReleaseOutter>
                <PostPWOutter>
                    <Headname>수정 권한 인증</Headname>
                    <PostPW type="Password" onChange={PostPWHandler} value={values.postPassword} placeholder="비밀번호를 입력해 주세요"></PostPW>
                </PostPWOutter>
                
            </InputOutter>
            </InputOutters>
            <Submit onClick={checkSignUp} type="submit" value="수정하기"></Submit>
        </CenterOutter>

    
)
    
    


    
        
    
} 


function PostEditModal({modalOpen,setModalOpen, postId,postValues}){
    
    const modalBackground = useRef();

    const ModalContainer= styled.div`
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);

        
    `
    
    return (
        <>
            { modalOpen &&
            <ModalContainer ref={modalBackground} 
            // onClick={e => {
            //     if (e.target === modalBackground.current) {
            //       setModalOpen(false);
            //     }
            //   }
            // }
              >
                <InnerModal setModalOpen={setModalOpen} postId={postId} postValues={postValues}></InnerModal>

            </ModalContainer>
            }
        </>
      );
}

export default PostEditModal;