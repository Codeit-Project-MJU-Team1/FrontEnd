import { useRef } from "react";
import styled from "styled-components";




function InnerModal({setModalOpen}){
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


    
        return(
                <CreatModal>
                    <ModalName>
                            비공개 추억 접근 실패
                        </ModalName>
                        <ModalExplain>
                        비밀번호가 일치하지 않습니다.
                        </ModalExplain>
                        <ModalButton onClick={()=>setModalOpen(false)} >확인</ModalButton>
                </CreatModal>
        )
    
    
} 


function PrivatePostAccessModal({modalOpen,setModalOpen}){
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
                <InnerModal setModalOpen={setModalOpen}></InnerModal>

            </ModalContainer>
            }
        </>
      );
}

export default PrivatePostAccessModal;