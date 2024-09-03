import styled from "styled-components";
import not from "../images/404.png"

const Img404Outter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:1920px;
    height:980px;
`
const Img404= styled.img`
    width: 355.17px;
    height: 258px;
    gap: 0px;
    margin-top:311px;

`
function NotFound(){
    return(
        <Img404Outter>
        <Img404 src={not}/>
        </Img404Outter>
    )
}

export default NotFound;