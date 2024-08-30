import { BrowserRouter,Routes,Route } from "react-router-dom";
import styled from "styled-components";
import App from "./components/app.js";
import Home from './pages/Home.js';
import CreateGroup from "./pages/createGroup.js";
import DetailedGroup from "./pages/detailedGroup.js";
import Test from "./pages/Test.js";
import PrivateGroupAccess from "./pages/privateGroupAccess.js";
import { createContext, useState } from "react";
import { GroupCreateContext } from "./components/contexts/groupCreateContext.js";
import CreatePost from "./pages/createPost.js";



const MainBackground =styled.div`
    background-color:#FAFAFA;
    width:1920px;
    padding-bottom:120px;
`


function Main(){

    const [isCreateButton,setIsCreateButton]= useState(false);
    
    return(
        <MainBackground>
            <GroupCreateContext.Provider value={{isCreateButton,setIsCreateButton}}>
                    <BrowserRouter>
                        <App/>
                        <Routes>
                            <Route path="/" Component={Home}/>
                            <Route path="/createGroup" Component={CreateGroup}/>
                            <Route path="/privateGroupAccess" Component={PrivateGroupAccess}/>
                            <Route path="/group/:id" Component={DetailedGroup}/>
                            <Route path="/createPost/:id" Component={CreatePost}/>
                            <Route path="/Test" Component={Test}/>
                            
                        </Routes>
                    </BrowserRouter>
                </GroupCreateContext.Provider>
        </MainBackground>
    );
};

export default Main;