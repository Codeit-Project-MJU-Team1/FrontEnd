import styled from "styled-components"
import { useState } from "react"
import searchImg from "../images/searchImg.png";
import { Link } from "react-router-dom";
import MakeSelect from "./makeSelect.js";

const HeadSearchOuter=styled.div`
    display: flex;
    background-color:#FAFAFA;
    width:1560px;
    height:45px;
    margin:40px 0 0 0;
`



//검색창
const SearchTab= styled.div`
    display:flex;
    width: 1186px;
    height: 45px;
    background-color:#F4F4F4;
    border-radius: 6px;
    margin: 0 20px 0 0;
    
`
const SearchInput=styled.input`
    height: 45px;
    width: 1131px;
    gap: 0px;
    padding:0;
    border-width: 0;
    outline:none;
    background-color:#F4F4F4;

`

//정렬선택기능: 추후 구현 필요 
const SortSelect=styled(MakeSelect)`
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

function Buttons({onHandler,offHandler}){
    console.log(typeof searchValues);
    const [isPublic,setIsPublic] =useState(true);
    const onPublic = (e)=>{ 
        setIsPublic(true);
        onHandler();
    }
    const onPrivate = (e)=>{ 
        setIsPublic(false);
        console.log("false");
        offHandler();
    }


    //공개버튼
    const PublicButton=styled.button`
    width: 66px;
    height: 45px;
    gap: 0px;
    border-radius: 22.5px;
    border: 0;
    font-size:14px;
    margin: 0 20px 0 0 ;
    ${isPublic ? "background-color:#282828; color:#FFFFFF;":"background-color:#FAFAFA; color:#282828;"}

    `
    //비공개버튼
    const PrivateButton=styled.button`
    width: 66px;
    height: 45px;
    gap: 0px;
    border-radius: 22.5px;
    border: 0;
    font-size:14px;
    margin: 0 20px 0 0 ;

    ${isPublic ? "background-color:#FAFAFA; color:#282828;":"background-color:#282828; color:#FFFFFF;"}

    `
    return(
            <>
                <PublicButton onClick={onPublic}>공개</PublicButton>
                <PrivateButton onClick={onPrivate}>비공개</PrivateButton>
            
            </>
    )
}


function HeadSearch({searchValues,setSearchValues}){
    const onChange = (e) =>{
        setSearchValues({
            ...searchValues,
            "search" : e.target.value,
        })
    }
    const onHandler= ()=>{
        setSearchValues({
            ...searchValues,
            "isPublic":true,
        })

    }
    const offHandler= ()=>{
        setSearchValues({
            ...searchValues,
            "isPublic":false,
        })
        
    }


    // 검색 그룹 필터링 함수
    // const filterGroups = **받아온 그룹 배열**.filter((g)=>{ return g.**그룹이름프로퍼티**.toLoclaeLowerCase().includes(search.toLoclaeLowerCase())})

    return(
        <HeadSearchOuter>
            <Buttons onHandler={onHandler} offHandler={offHandler}/>
            <SearchTab>
                <Link>
                    <SearchImg src={searchImg}/>
                </Link>
                <SearchInput value={searchValues?.search} onChange={onChange} type="text" placeholder="그룹명을 검색해주세요"/>
            </SearchTab>

            <SortSelect setSearchValues={setSearchValues} searchValues={searchValues}/>
        </HeadSearchOuter>
    );
}

export default HeadSearch;