import { useEffect, useRef } from "react";
import styled from "styled-components";

function Modal({modalOpen,setModalOpen,Children}){
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
                {Children}

            </ModalContainer>
            }
        </>
      );
}

export default Modal;