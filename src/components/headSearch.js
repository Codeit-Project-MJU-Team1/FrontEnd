import styled from "styled-components"

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
const SearchInput=styled.input`
    width: 1186px;
    height: 45px;
    gap: 0px;
    border-radius: 6px 0px 0px 0px;
    opacity: 0px;
    margin: 0 20px 0 0;

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

function HeadSearch(){

    return(
        <HeadSearchOuter>
            <PublicButton>공개</PublicButton>
            <PrivateButton>비공개</PrivateButton>
            <SearchInput type="text" placeholder="그룹명을 검색해주세요"/>
            
            <SortSelect/>
        </HeadSearchOuter>
    );
}

export default HeadSearch;