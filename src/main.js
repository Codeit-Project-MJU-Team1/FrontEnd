import { BrowserRouter,Routes,Route } from "react-router-dom";
import styled from "styled-components";
import App from "./components/app.js";
import Home from './pages/Home.js';
import CreateGroup from "./pages/createGroup.js";
import DetailedGroup from "./pages/detailedGroup.js";

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
                        <Route path="/createGroup" Component={CreateGroup}/>
                        <Route path="/group:" Component={DetailedGroup}/>
                    </Routes>
                </BrowserRouter>
        </MainBackground>
    );
};

export default Main;