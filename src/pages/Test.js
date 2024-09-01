import styled from "styled-components";
import GroupCard from "../components/groupCard";
import PrivateAccessFailModal from "../components/modals/privateAccessFailModal";
import { useState } from "react";
import GroupEditModal from "../components/modals/groupEditModal";
import GroupDeleteModal from "../components/modals/groupDeleteModal";
import CreatePost from "./createPost";
import DetailedPost from "./detailedPost";

const TestOuter=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`


function Test(){
    const [test,setTest]=useState(true);

    return(
        <TestOuter>
            <DetailedPost></DetailedPost>
        </TestOuter>
        
    )
}

export default Test;