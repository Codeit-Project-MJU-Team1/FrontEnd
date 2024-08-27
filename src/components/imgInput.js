import styled from "styled-components"
import { useState } from "react"

const ImgInputOutter=styled.div`
        display:flex;
    `
const ImgLinkDisplay=styled.label`
    width: 290px;
    height: 45px;
    gap: 0px;
    border-radius: 6px;
    border: 1px solid #DDDDDD;
    margin: 0 10px 0 0;
    padding-left:20px;
    align-content:center;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.53px;
    letter-spacing: -0.03em;

`
const Imgbutton=styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100px;
    height: 45px;
    gap: 0px;
    border-radius: 6px;
    border:1px solid;
    color:#282828;
    width: 100px;
`
const DummyInput=styled.input`
        display:none;
    `
    

function ImgInput({image,onChange}){
    
    const handleChange = (e)=> {
        const nextValue=e.target.files[0]
        onChange(nextValue);
    }

    

    return(
        <ImgInputOutter>
                <ImgLinkDisplay htmlFor="repreImg">{ image?.name ||
                "파일을 선택해 주세요"
                }</ImgLinkDisplay>
                <Imgbutton htmlFor="repreImg">파일 선택</Imgbutton>
                
            <DummyInput id="repreImg" type="file" name accept="image/*" onChange={handleChange} ></DummyInput>
        </ImgInputOutter>
    );
}

export default ImgInput;