import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";
import PrivatePostAccessModal from "../components/modals/privatePostAccessModal.js";





const PrivatePostAccessOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 480px;
    gap: 60px;
    border-radius: 6px;
    background:#FAFAFA;
    display:flex;
    margin-top:284px;
`
const PageHead=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
`
const PageName=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    
`
const PageExplain=styled.div`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.03em;
    text-align: center;

`

const PasswordOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:10px;
`
const PasswordLabel=styled.label`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.03em;
    text-align: left;

`
const PasswordInput=styled.input`
    width: 400px;
    height: 45px;
    gap: 0px;
    border-radius:6px;
    border:1px solid #DDDDDD ;
    background-color: #FAFAFA;
`

const PageButton=styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 400px;
    height: 50px;
    border-radius: 6px;
    background-color:#282828;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.03em;
    text-align: center;
    color:#FAFAFA;


`

const PrivatePostAccessBackground = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#FAFAFA;
    width:1920px;
    height:980px;
`
    
    



function PrivatePostAccess(){
    //그룹 만들기 버튼 on/off
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(false);
    const {id,postId}= useParams();

    const navigate=useNavigate();
    const[modal,setModal]=useState(false);
    const [password,setPassword]=useState("");

    const clickHandle= ()=>{
        const PostData= {
            "password": password,
        }
        fetch(`https://backend-b4qi.onrender.com/api/posts/${postId}/verify-password`, {
            method: "Post",
            body: JSON.stringify(PostData),
            headers: {
                "Content-Type": `application/json`, // application/json 타입 선언
                "groupId": id,
                },
        }
        ).then((response) => {
              if (response.ok === true) {
                console.log("원본")
                console.log(response)
                navigate(`/group/${id}/post/${postId}`, { state :  {
                    isAuthentic : true,
                }});
              }
              throw new Error("에러 발생!");
        }).catch((err)=>{
            setModal(true);
        })
    }
    const passwordHandle= (e)=>{
        setPassword(e.target.value);
    };
    

    
    
    return (
            <PrivatePostAccessBackground>
                <PrivatePostAccessOutter>
                    <PageHead>
                        <PageName>
                            비공개 추억
                        </PageName>
                        <PageExplain>
                        비공개 추억에 접근하기 위해 권한 확인이 필요합니다.
                        </PageExplain>
                    </PageHead>
                    
                    <PasswordOutter>
                        <PasswordLabel>비밀번호 입력</PasswordLabel>
                        <PasswordInput type="password" placeholder="추억 비밀번호를 입력해 주세요" value={password} onChange={passwordHandle}></PasswordInput>
                    </PasswordOutter>
                    <PageButton onClick={clickHandle} >제출하기</PageButton>
                </PrivatePostAccessOutter>
                <PrivatePostAccessModal modalOpen={modal} setModalOpen={setModal}></PrivatePostAccessModal>
            </PrivatePostAccessBackground> 
        );
}

export default PrivatePostAccess;