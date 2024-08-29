import styled from "styled-components";
import { useState } from "react";

const GroupReleaseInput=styled.div`
    display:flex; 
    width: 104px;
    flex-direction:row;
    margin-top: 20px;
    justify-content:space-between;

`
const GroupReleaselabel=styled.div`
    height:18px;
`
const ToggleContainer = styled.div`
position: relative;
cursor: pointer;
margin:0;

> .toggle-container {
    width: 48px;
    height: 24px;
    border-radius: 30px;
    background-color: #282828;}
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
> .toggle--checked {
    background-color: #282828;
    transition : 0.5s
}

> .toggle-circle {
    position: absolute;
    top: 0.5px;
    left: 0.5px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #FAFAFA;
    transition : 0.5s
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
} >.toggle--checked {
    left: 24.5px;
    transition : 0.5s
}
`;

function Toggle({onChange,value})  {
    const [isOn, setisOn] = useState(false);
        
        const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn)
        onChange();

    };
    
    return(
        <GroupReleaseInput>
            <GroupReleaselabel>
                {value ? "공개" : "비공개"}
            </GroupReleaselabel>
            <label htmlFor="toggle">
                <ToggleContainer onClick={toggleHandler}>
                    <div className={`toggle-container ${value ? "toggle--checked" : null}`}/>
                    <div className={`toggle-circle ${value ? "toggle--checked" : null}`}/>
                </ToggleContainer>
            </label>
    </GroupReleaseInput>

        )
}


export default Toggle;
