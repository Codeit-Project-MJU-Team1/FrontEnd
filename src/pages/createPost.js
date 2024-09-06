import styled from "styled-components";
import { useEffect, useState } from "react";
// import CreatePostModal from "../components/modals/createPostModal.js";
import Toggle from "../components/toggle.js";
import ImgInput from "../components/imgInput.js";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";
import { useParams } from "react-router-dom";
import exitIcon from "../images/exitIcon.png";
import PostUploadModal from "../components/modals/postUploadModal.js";
import noContent from "../images/noContent.png";

const CenterOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#FAFAFA;
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
    width:2px;
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


function CreatePost(){
    const {id} =useParams();
    //그룹 만들기 버튼 on/off
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(false);


    const [modal,setModal]=useState();
    const [values,setValues] =useState({
        "nickname": "",
        "title": "",
        "content": "",
        "postPassword": "",
        "groupPassword": "",
        "imageUrl": "",
        "location": "",
        "moment": "",
        "isPublic": false,
    });
    const [tags,setTags]=useState([]);
    const [tag,setTag]=useState("")
    const [img,setImg]=useState();

    // useEffect(()=>{
    //     setValues({
    //         "tags" :[],
    //     })

    // },[])


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
        if(e.key === "Enter"){
            e.preventDefault();
            return;
        }
        setTag(e.target.value);
        }
    
    const PostTagsHandler= (e)=>{
        if(tag=="" || tag[0] ==" " || tag[-1] ==" "){
            return;
        }
        if(e.key === "Enter"){
                if(tags?.indexOf(e.target.value) == -1){
                    
        
                }else{
                        setTag("");
                        return;
                }
            console.log("입력");
            console.log(e.target.value);
            setTags((prvTags)=>[...prvTags,e.target.value]);
            console.log(tags)
            setTag("");
        }
        }

    const tagDeleteHandler= (e)=>{
        let prevTags = tags;
        console.log(`${prevTags?.indexOf(e)}번째 tag를 지우셨습니다.`)
        prevTags.splice(prevTags.indexOf(e),1)
        setTags([...prevTags])
        console.log(tags)
        

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
        const nextIsPublic=!values.isPublic;
        setValues(
            {...values ,
                "isPublic": nextIsPublic,
            }
            );
            console.log(nextIsPublic);
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
        setValues(
            {
                ...values,
                "tags": tags,
            }
        )
        const formImage = new FormData();
        formImage.append("image", img);
        console.log("보내기전");
        console.log(formImage);
        
        setModal(true);
      
        

        
      };
      

    return(
        <CenterOutter>
            <PageName>추억 올리기</PageName>
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
                            return(
                                <Tag key={e+1} >
                                    <TagName>
                                    {"#"+e}
                                    </TagName>
                                    <TagDelete key={e+1} src={exitIcon} onClick={()=>{tagDeleteHandler(e)}}>
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
                    <Headname>비밀번호</Headname>
                    <PostPW type="Password" onChange={PostPWHandler} value={values.postPassword} placeholder="비밀번호를 입력해 주세요"></PostPW>
                </PostPWOutter>
                
            </InputOutter>
            </InputOutters>
            <Submit onClick={checkSignUp} type="submit" value="올리기"></Submit>
            <PostUploadModal modalOpen={modal} id={id} setModalOpen={setModal} uploadData={values} img={img}></PostUploadModal>
        </CenterOutter>
        
    )
}

export default CreatePost;