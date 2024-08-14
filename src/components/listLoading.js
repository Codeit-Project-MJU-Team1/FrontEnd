import styled from "styled-components";

const ListLoadingButton = styled.button`
    display:flex;
    width: 1560px;
    height: 60px;
    justify-content:center;
    align-items:center;
    margin: 0 0 60px 0;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: center;
`
function ListLoading(){

    return(
        <ListLoadingButton>더보기</ListLoadingButton>
    )
}

export default ListLoading;