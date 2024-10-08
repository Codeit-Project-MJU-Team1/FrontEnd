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
import NotFound from "./pages/notFound.js";
import PrivatePostAccess from "./pages/privatePostAccess.js";


const MainBackground =styled.div`
    background-color:#FAFAFA;
    width:1920px;
    display:flex;
    flex-direction:column;
    align-items:center;

    
`


function Main(){

    const [isCreateButton,setIsCreateButton]= useState(false);
    const [key,setKey]= useState(""); 
    
    return(
        
            <GroupCreateContext.Provider value={{isCreateButton,setIsCreateButton}}>
            <KeyContext.Provider value={{key,setKey}}>
                    <BrowserRouter>
                    <MainBackground>
                        <App/>
                        <Routes>
                            <Route path="/" Component={Home}/>
                            <Route path="/createGroup" Component={CreateGroup}/>
                            <Route path="/privateGroupAccess/:id" Component={PrivateGroupAccess}/>
                            <Route path="/group/:id" Component={DetailedGroup}/>
                            <Route path="/createPost/:id" Component={CreatePost}/>
                            <Route path="/privatePostAccess/:id/:postId" Component={PrivatePostAccess}/>
                            <Route path="/group/:id/post/:postId" Component={DetailedPost}/>
                            <Route path="/Test" Component={Test}/>
                            <Route path= "/*" Component={NotFound}/>
                        </Routes>
                        </MainBackground>
                    </BrowserRouter>
                    </KeyContext.Provider>
                </GroupCreateContext.Provider>
    
    );
};

export default Main;