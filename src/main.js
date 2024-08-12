import { BrowserRouter,Routes,Route } from "react-router-dom";
import styled from "styled-components";

const MainBackground =styled.div`
    background-color:black;
    width:100px;
    height:100px;
`


function Main(){
    return(
        <MainBackground></MainBackground>
    );
};

export default Main;