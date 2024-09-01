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
import DetailedPost from "./pages/detailedPost.js";
import { KeyContext } from "./components/contexts/keyContext.js";


const MainBackground =styled.div`
    background-color:#FAFAFA;
    width:1920px;
    padding-bottom:120px;
`


function Main(){

    const [isCreateButton,setIsCreateButton]= useState(false);
    const [key,setKey]= useState(""); 
    
    return(
        <MainBackground>
            <GroupCreateContext.Provider value={{isCreateButton,setIsCreateButton}}>
            <KeyContext.Provider value={{key,setKey}}>
                    <BrowserRouter>
                        <App/>
                        <Routes>
                            <Route path="/" Component={Home}/>
                            <Route path="/createGroup" Component={CreateGroup}/>
                            <Route path="/privateGroupAccess/:id" Component={PrivateGroupAccess}/>
                            <Route path="/group/:id" Component={DetailedGroup}/>
                            <Route path="/createPost/:id" Component={CreatePost}/>
                            <Route path="/group/:id/post/:postId" Component={DetailedPost}/>
                            <Route path="/Test" Component={Test}/>
                        </Routes>
                    </BrowserRouter>
                    </KeyContext.Provider>
                </GroupCreateContext.Provider>
        </MainBackground>
    );
};

export default Main;