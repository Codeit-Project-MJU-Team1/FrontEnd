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
    width: 480px;
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

const InputOutter=styled.form`
        width:400px;
        gap:40px;
`
const Headname=styled.h3`
        margin-bottom:10px;
        font-size:16px;
`
const NicknameOutter=styled.div`
        width:400px;
        height:75px;
        margin-top:60px;
`
const NicknameInput=styled.input`
        width: 380px;
        height: 45px;
        gap: 0px;
        border-radius: 6px;
        border: 1px solid #DDDDDD;
        padding-left:20px;

`



const GruopIntroOutter=styled.div`
    margin-top:40px;
    width:400px;
    height:150px

`
const ContentInput=styled.textarea`
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





const PWOutter=styled.div`
    margin-top:40px;
    width:400px;
    height:75px
`
const PW =styled.input`
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
    const ModalName=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    
`



const ModalButton=styled.input`
    margin-top:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 400px;
    height: 50px;
    gap: 0px;
    border-radius: 6px;
    background-color:#282828;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.03em;
    text-align: center;
    color:#FAFAFA;


`

function InnerModal({setModalOpen,postId}){
    // 이전 값 관련 
    
    const [datas,setDatas]=useState();
    const [values,setValues] =useState({});
    const navigate =useNavigate();

    const nicknameHandler= (e)=>{
        setValues(
            {...values ,
                "nickname": e.target.value,
            }
        ); 
    }
    const contentHandler= (e)=>{
        
    setValues(
        {...values ,
            "content": e.target.value,
        }
    );
    }


    const pWHandler= (e)=>{
        
    setValues(
        {...values ,
            "password": e.target.value,
        }
    );
    }

    
    
    const checkSignUp = (e) => {
        
        e.preventDefault();
        const groupData={
            
                "nickname": values.nickname,
                "content": values.content,
                "password": values.password,
            
          }
        console.log(JSON.stringify(groupData))
                  
        fetch( `https://backend-b4qi.onrender.com/api/posts/${postId}/comments?postId=${postId}`, {
            method: "POST",
            body: JSON.stringify(groupData),
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
            throw new Error(response.status);
                  
            }).catch((err)=>{
                if(err =="Error: 400"){
                    alert("양식이 맞지 않습니다.")
                }else if(err == "Error: 404"){
                    alert("게시글이 존재하지 않습니다.")
                }
            }).then((data) => {
                if(data){
                    console.log("결과");
                    console.log(data);
                    setDatas(data);
                    alert("등록이 완료 되었습니다.")
                    }   
                
            });
        
        }
        
        
    
    
    // const [verifyModal,setVerifyModal]=useState(); 

    return(
                
        <CreateModal>
            <ModalOffButton src={exitIcon} onClick={()=>setModalOpen(false)}>

            </ModalOffButton>
        <ModalName>댓글 등록</ModalName>
        <InputOutter>
        <NicknameOutter>
            <Headname>닉네임</Headname>
            <NicknameInput type="text" value={values.nickname} onChange={nicknameHandler} placeholder="닉네임을 입력해 주세요"/>
        </NicknameOutter>
        <GruopIntroOutter>
            <Headname>댓글</Headname>
            <ContentInput onChange={contentHandler} value={values.content} placeholder="댓글을 입력 해주세요"></ContentInput>
        </GruopIntroOutter>
        <PWOutter>
            <Headname>비밀번호 생성</Headname>
            <PW type="Password" onChange={pWHandler} value={values.password} placeholder="비밀번호를 입력해 주세요"></PW>
        </PWOutter>
        <ModalButton onClick={checkSignUp} type="submit" value="등록하기"></ModalButton>
    </InputOutter>
    {/* <CreateGroupModal modalOpen={verifyModal} setModalOpen={setVerifyModal} isComplete={isComplete}></CreateGroupModal> */}
    </CreateModal>
    
)}
    
    



    



function CommentCreateModal({modalOpen,setModalOpen, postId}){
    
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
        z-index: 3000;

        
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
                <InnerModal setModalOpen={setModalOpen} postId={postId}></InnerModal>

            </ModalContainer>
            }
        </>
      );
}

export default CommentCreateModal;