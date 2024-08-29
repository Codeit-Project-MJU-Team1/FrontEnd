import { useState } from "react";
import styled from "styled-components";
import PostCard from "./postCard.js";

const PostsOutter=styled.div`
    display:flex;
    width: 1560px;
    margin: 60px 0 60px 0 ;
    gap:20px;
    flex-wrap:wrap;

`
const TestSmallPost1=styled.div`
    gap:20px;
    width:375px;
    height:406px;
    background-color:red;
`
const TestSmallPost2=styled.div`
    gap:20px;
    width:375px;
    height:561px;
    background-color:green;
`
const TestSmallPost3=styled.div`
    gap:20px;
    width:375px;
    height:206px;
    background-color:blue;
`
const SmallPosts=styled.div`
    display:flex;
    gap:20px;
    width:375px;
    flex-direction:column;
    flex-shrink:1;
    flex-grow:0;

`
const MiddlePosts=styled.div`
    display:flex;
    gap:20px;
    width:375px;
    flex-direction:column;
    flex-shrink:1;
    flex-grow:0;

`


function Test({PostsValues}){
    return(
        <>
             <MiddlePosts>
                <SmallPosts>
                        <PostCard PostsValues={PostsValues}/>
                        <PostCard PostsValues={PostsValues}/>
                        <TestSmallPost3/>
                </SmallPosts>
                <SmallPosts>
                        <TestSmallPost2/>
                        <PostCard PostsValues={PostsValues}/>
                        <PostCard PostsValues={PostsValues}/>
                </SmallPosts>
            </MiddlePosts>
            <MiddlePosts>
                <SmallPosts>
                        <TestSmallPost2/>
                        <PostCard PostsValues={PostsValues}/>
                        <TestSmallPost3/>
                </SmallPosts>
                <SmallPosts>
                        <PostCard PostsValues={PostsValues}/>
                        <TestSmallPost2/>
                        <PostCard PostsValues={PostsValues}/>
                </SmallPosts>
            </MiddlePosts>
            <MiddlePosts>
                <SmallPosts>
                        <TestSmallPost3/>
                        <TestSmallPost2/>
                        <TestSmallPost3/>
                </SmallPosts>
                <SmallPosts>
                        <TestSmallPost2/>
                        <TestSmallPost3/>
                        <PostCard PostsValues={PostsValues}/>
                </SmallPosts>
            </MiddlePosts>
            <MiddlePosts>
                <SmallPosts>
                        <PostCard PostsValues={PostsValues}/>
                        <TestSmallPost2/>
                        <TestSmallPost3/>
                </SmallPosts>
                <SmallPosts>
                        <TestSmallPost3/>
                        <TestSmallPost2/>
                        <PostCard PostsValues={PostsValues}/>
                </SmallPosts>
            </MiddlePosts>
        </>
    )
}




function Posts({middlePosts1,middlePosts2,middlePosts3,middlePosts4,PostsValues}){
    console.log("전달된 데이터");
    console.log(middlePosts1)
    console.log(middlePosts2)
    console.log(middlePosts3)
    console.log(middlePosts4)
        return(
        <PostsOutter>
            <MiddlePosts>
                {middlePosts1 && middlePosts1.map((Post)=>{
                    console.log(Post.id)
                    return <PostCard key={Post.id} Post={Post}/>
                })}
            </MiddlePosts>
            <MiddlePosts>
                {middlePosts2 && middlePosts2.map((Post)=>{
                    console.log(Post.id)
                    return <PostCard key={Post.id} Post={Post}/>
                })}
            </MiddlePosts>
            <MiddlePosts>
                {middlePosts3 && middlePosts3.map((Post)=>{
                    console.log(Post.id)
                    return <PostCard key={Post.id} Post={Post}/>
                })}
            </MiddlePosts>
            <MiddlePosts>
                {middlePosts4 && middlePosts4.map((Post)=>{
                    console.log(Post.id)
                    return <PostCard key={Post.id} Post={Post}/>
                })}
            </MiddlePosts>
        </PostsOutter>
     )
    
    
}

export default Posts;