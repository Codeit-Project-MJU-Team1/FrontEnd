import { BrowserRouter,Routes,Route } from "react-router-dom";
import styled from "styled-components";
import App from "./components/app.js";
import Home from './pages/Home.js';
import CreateGroup from "./pages/createGroup.js";
import DetailedGroup from "./pages/detailedGroup.js";
import Test from "./pages/Test.js";
import PrivateGroupAccess from "./pages/privateGroupAccess.js";

const MainBackground =styled.div`
    background-color:#FAFAFA;
    width:1920px;
    padding-bottom:120px;
`


function Main(){
    return(
        <MainBackground>
                <BrowserRouter>
                    <App/>
                    <Routes>
                        <Route path="/" Component={Home}/>
                        <Route path="/createGroup" Component={CreateGroup}/>
                        <Route path="/privateGroupAccess" Component={PrivateGroupAccess}/>
                        <Route path="/group:" Component={DetailedGroup}/>
                        <Route path="/Test" Component={Test}/>
                    </Routes>
                </BrowserRouter>
        </MainBackground>
    );
};

export default Main;