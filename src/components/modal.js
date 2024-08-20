import { useEffect, useRef } from "react";
import styled from "styled-components";




function VerifiedModal({verify}){
    const CreatModal=styled.div`
    width: 480px;
    height: 298px;
    gap: 0px;
    border-radius: 6px;
    background:white;
    display:flex;
`
    if(verify==true){
        return(
            <>
                <CreatModal>안녕하세요.모달창입니다</CreatModal>
            
            </>
        )
    }else{
        return(
            <>
                <CreatModal>안녕 못해!</CreatModal>
            
            </>
        )
    }
    
} 


function Modal({modalOpen,setModalOpen,isComplete = true}){
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
            <ModalContainer ref={modalBackground} onClick={e => {
                if (e.target === modalBackground.current) {
                  setModalOpen(false);
                }
              }}>
                <VerifiedModal verify={isComplete}></VerifiedModal>

            </ModalContainer>
            }
        </>
      );
}

export default Modal;