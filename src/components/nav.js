import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavDiv =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:white;
    width:1920px;
    height:100px;
    
`
const DummyDiv=styled.div`
    width: 200px;
    height: 45px;
    margin:27px 0 0 180px;
`

const LogoImg=styled.img`

`
const CreateGroupButton =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 200px;
    height: 45px;
    background-color:#282828;
    color:#FAFAFA;
    gap: 0px;
    border-radius: 6px;
    opacity: 0px;

    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: center;

    margin:27px 180px 0 0;


`
function CreateGroupOutter(){
    return(
        <div>
            <Link to="/createGroup">
                <CreateGroupButton>그룹 만들기</CreateGroupButton>
            </Link>
        </div>

    )
}


function Nav(){
    return (
    <NavDiv>
        <DummyDiv/>
        <Link to="/"><LogoImg src={logo}></LogoImg></Link>
        <CreateGroupOutter/>
    </NavDiv>);
}

export default Nav;
