import styled from "styled-components";
import HeadSearch from "../components/headSearch.js"

const CenterOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

function Home(){
    return(
        <CenterOutter>
            <HeadSearch/>
        </CenterOutter>
        
    )
}

export default Home;