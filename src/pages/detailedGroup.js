import styled from "styled-components"
import GroupInfoCard from "../components/groupInfoCard";
import { Link, useParams } from "react-router-dom";
import HeadSearch from "../components/headSearch";
import Groups from "../components/groups";
import ListLoading from "../components/listLoading";
import { useEffect, useState } from "react";

const DetailedGroupOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Line =styled.div`
    width: 1560px;
    height: 1px;
    gap: 0px;
    border: 1px 0px 0px 0px;
    opacity: 0.5 px;
    background-color:#DDDDDD;
    margin-top:120px;
    margin-bottom:120px;

`
const GroupPostsHeaderOutter =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:1560px;
    height:100px;
    
`
const DummyDiv=styled.div`
    width: 200px;
    height: 45px;
`

const PostsHeadName=styled.h1`
    height:30px;
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-weight: 700;
    line-height: 30.05px;
    letter-spacing: -0.03em;
    text-align: center;


`


function CreatePostButton(){

    const CreatePostOutter =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 200px;
    height: 45px;
    background-color:#282828;
    color:#FAFAFA;
    gap: 0px;
    border-radius: 6px;

    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: center;



`
        

    return(
    
        <CreatePostOutter>추억 올리기</CreatePostOutter>
        
    )


}

function DetailedGroup(){
    
    const {id} = useParams();
    const [searchValues,setSearchValues]=useState({
        option : "latest",
        search : "",
    })
    console.log("id")
    console.log(id);
    
    return(
        <DetailedGroupOutter>
            <GroupInfoCard id={id} />
            <Line/>
            <GroupPostsHeaderOutter>
                <DummyDiv/>
                <PostsHeadName>추억 목록</PostsHeadName>
                <CreatePostButton/>
            </GroupPostsHeaderOutter>
            <HeadSearch searchValues={searchValues} setSearchValues={setSearchValues}/>
            <Groups/>
            <ListLoading/>
            
        </DetailedGroupOutter>
    )
}

export default DetailedGroup;