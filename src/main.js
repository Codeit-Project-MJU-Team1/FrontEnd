import { BrowserRouter,Routes,Route } from "react-router-dom";
import styled from "styled-components";
import App from "./components/app.js";
import Home from './pages/Home.js';

const MainBackground =styled.div`
    background-color:white;
    width:1920px;
    height:1853px;
`


function Main(){
    return(
        <MainBackground>
                <BrowserRouter>
                    <App/>
                    <Routes>
                        <Route path="/" Component={Home}/>
                    </Routes>
                </BrowserRouter>
        </MainBackground>
    );
};

export default Main;