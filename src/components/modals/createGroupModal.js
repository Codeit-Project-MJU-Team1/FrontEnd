import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";




function VerifiedModal({verify,setModalOpen,data}){
    const navigate=useNavigate();
    const CreatModal=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 480px;
    height: 298px;
    gap: 0px;
    border-radius: 6px;
    background:white;
    display:flex;
`
const ModalName=styled.div`
    margin-top:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    
`
const ModalExplain=styled.div`
    margin-top:20px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.03em;
    text-align: center;

`
const ModalButton=styled.button`
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


    if(verify==true){
        return(
            <>
                <CreatModal>
                    <ModalName>
                        그룹 만들기 성공
                    </ModalName>
                    <ModalExplain>
                        그룹이 성공적으로 등록되었습니다.
                    </ModalExplain>
                    <ModalButton onClick={()=>{setModalOpen(false);
                        navigate('/group/'+data.id, { state :  {
                            isAuthentic : true,
                            isPublic: data.isPublic,
                        }});
                    }} >확인</ModalButton>
                </CreatModal>
            
            </>
        )
    }else{
        return(
            <>
                <CreatModal>
                <ModalName>
                        그룹 만들기 실패
                    </ModalName>
                    <ModalExplain>
                    그룹 등록에 실패했습니다.
                    </ModalExplain>
                    <ModalButton onClick={()=>setModalOpen(false)} >확인</ModalButton>
                </CreatModal>
            
            </>
        )
    }
    
} 


function CreateGroupModal({modalOpen,setModalOpen,isComplete = true ,data}){
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
                <VerifiedModal verify={isComplete} setModalOpen={setModalOpen} data={data}></VerifiedModal>

            </ModalContainer>
            }
        </>
      );
}

export default CreateGroupModal;