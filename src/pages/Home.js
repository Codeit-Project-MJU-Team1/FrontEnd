import styled from "styled-components";
import HeadSearch from "../components/headSearch.js";
import Groups from "../components/groups.js";
import ListLoading from "../components/listLoading.js";

const CenterOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`


function Home(){
    return(
        <CenterOutter>
            <HeadSearch/>
            <Groups/>
            <ListLoading/>
        </CenterOutter>
        
    )
}

export default Home;