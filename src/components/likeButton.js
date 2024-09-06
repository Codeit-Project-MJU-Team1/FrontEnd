import styled from "styled-components";
import Icon from "../images/size16.png";
import { Link } from "react-router-dom";
const LikeButtonOutter=styled.div`
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    width: 187.88px;
    height: 52px;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid #282828;
    

`
const LIkeIcon=styled.img`
    width:22px;
    height:22px;
`

function LikeButton({onClick}){
    
    return(
    <Link style={{color:"#282828",}} onClick={onClick}>
        <LikeButtonOutter>
            <LIkeIcon src={Icon}/>
            <div>
            공감 보내기
            </div>
            
        </LikeButtonOutter>
    </Link>
    )
}

export default LikeButton;