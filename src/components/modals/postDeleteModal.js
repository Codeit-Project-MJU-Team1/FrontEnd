import { useRef, useState } from "react";
import styled from "styled-components";
import exitIcon from "../../images/exitIcon.png";
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

    const InputOutter=styled.form`
        width:400px;
        gap:40px;
    `
    const Headname=styled.h3`
        font-size:16px;
    `

 



const GroupPWOutter=styled.div`
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

    const nav = useNavigate();
    // POST 관련 코드

    const [password,setPassword]=useState("");
    const checkSignUp = (e) => {
        e.preventDefault();
        
        console.log("삭제확인")
        console.log(postId);
        console.log(password);
        const passwordData={
            "postPassword": password, 
        }
        fetch(`https://backend-b4qi.onrender.com/api/posts/${postId}?postId=${postId}`, {
          method: "DELETE",
          headers:{
                "Content-Type" : "application/json",
          },
          body: JSON.stringify(passwordData),
          
        })
          .then((response) => {
            if (response.status === 200 || response.status === 400 || response.status === 403) {
                console.log(response);
              return response.json();
            }            
            console.log(response);
            throw new Error("에러 발생!");
          })
          .catch((error) => {
            alert(error);
          })
          .then((data) => {
            console.log(data?.message);
            alert(data?.message);
            nav("/");
            
            
          });
          };
    
    // const [verifyModal,setVerifyModal]=useState(); 


    
    


    
        return(
                
                <CreateModal>
                    <ModalOffButton src={exitIcon} onClick={()=>setModalOpen(false)}>

                    </ModalOffButton>
                        <ModalName>추억 삭제</ModalName>
                        <InputOutter>
                            <GroupPWOutter>
                                <Headname>삭제 권한 인증</Headname>
                                <GroupPW type="Password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="비밀번호를 입력해 주세요"></GroupPW>
                                </GroupPWOutter>
                            <ModalButton onClick={checkSignUp} type="submit" value="삭제하기"></ModalButton>
                        </InputOutter>
                    {/* <CreateGroupModal modalOpen={verifyModal} setModalOpen={setVerifyModal} isComplete={isComplete}></CreateGroupModal> */}
                </CreateModal>
            
        )
    
    
} 


function PostDeleteModal({modalOpen,setModalOpen,postId}){
    
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
                <InnerModal setModalOpen={setModalOpen} postId={postId}></InnerModal>

            </ModalContainer>
            }
        </>
      );
}

export default PostDeleteModal;