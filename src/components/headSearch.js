import styled from "styled-components"
import { useState } from "react"
import searchImg from "../images/searchImg.png";
import { Link } from "react-router-dom";

const HeadSearchOuter=styled.div`
    display: flex;
    background-color:white;
    width:1560px;
    height:45px;
`

//공개버튼
const PublicButton=styled.button`
    width: 66px;
    height: 45px;
    gap: 0px;
    border-radius: 22.5px;
    opacity: 0px;
    font-size:14px;
    margin: 0 20px 0 0 ;

`
//비공개버튼
const PrivateButton=styled.button`
    width: 66px;
    height: 45px;
    gap: 0px;
    border-radius: 22.5px;
    opacity: 0px;
    font-size:14px;
    margin: 0 20px 0 0 ;
`

//검색창
const SearchTab= styled.div`
    display:flex;
    width: 1186px;
    height: 45px;
    background-color:#F4F4F4;
    border-radius: 6px 0px 0px 0px;
    opacity: 0px;
    margin: 0 20px 0 0;
    
`
const SearchInput=styled.input`
    height: 45px;
    width: 1131px;
    gap: 0px;
    padding:0;
    border-width: 0;
    background-color:#F4F4F4;

`

//정렬선택기능: 추후 구현 필요 
const SortSelect=styled.input`
    width: 160px;
    height: 45px;
    gap: 0px;
    border: 1px;
    opacity: 0px;
    margin: 0 0 0 20px;
` 
const SearchImg=styled.img`
    width:24.31px;
    height:24px;
    margin: 11px 10.13px 10px 20.26px;

`


function HeadSearch(){

    const [search,setSearch]= useState("");
    const onChange = (e) =>{
        setSearch(e.target.value)
    }

    return(
        <HeadSearchOuter>
            <PublicButton>공개</PublicButton>
            <PrivateButton>비공개</PrivateButton>
            <SearchTab>
                <Link>
                    <SearchImg src="../images/searchImg.png"/>
                </Link>
                
                <SearchInput value={search} onChange={onChange} type="text" placeholder="그룹명을 검색해주세요"/>
            </SearchTab>

            <SortSelect/>
        </HeadSearchOuter>
    );
}

export default HeadSearch;