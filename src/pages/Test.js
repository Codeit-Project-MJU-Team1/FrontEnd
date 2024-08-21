import styled from "styled-components";
import GroupCard from "../components/groupCard";
const TestOuter=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:grey;
`


function Test(){

    return(
        <TestOuter>
            <GroupCard></GroupCard>
        </TestOuter>
    )
}

export default Test;