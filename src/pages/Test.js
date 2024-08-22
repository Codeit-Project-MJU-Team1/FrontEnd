import styled from "styled-components";
import GroupCard from "../components/groupCard";
import PrivateAccessFailModal from "../components/modals/privateAccessFailModal";
import { useState } from "react";
const TestOuter=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:grey;
`


function Test(){
    const [test,setTest]=useState(true);

    return(
        <TestOuter>
            <PrivateAccessFailModal modalOpen={test} setModalOpen={setTest}></PrivateAccessFailModal>
        </TestOuter>
    )
}

export default Test;