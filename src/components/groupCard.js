import styled from "styled-components";

const GroupCardOutter= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:335px;
    padding:20px;
    gap:20px;
    background-color:#FAFAFA;
    border: 1px solid #DDDDDD;
    width: 375px;
    border-radius: 12px;





`
const GroupImg= styled.img`
    width:335px;
    height:335px;
    
`

const InfoOutter=styled.div`
    width:335px;
    gap:20px;
    display:flex;
    flex-direction:column;
    align-items:start;
    
`
const TopInfo=styled.div`
    display:flex;
    gap:10px;
`
const MiddelInfo=styled.div`
    display:flex;
    flex-direction:column;
    width:335px;
    gap:10px;
`
const GroupName=styled.div`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-align: left;

`
const GroupExplain=styled.div`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.03em;
    text-align: left;

`


const BottomInfo=styled.div`
    display:flex;
    gap:40px;
`
const BottomInfoHeader=styled.div`
font-size: 12px;
font-weight: 400;
letter-spacing: -0.03em;
text-align: left;

`
const BottomFrag=styled.div`

`
const BottomFragValue=styled.div`
    disply:flex;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.03em;
    text-align: left;

`




function GroupCard(){


    return(
        <GroupCardOutter>
            <GroupImg/>
            <InfoOutter>
                <TopInfo>
                    <div>
                        D+265
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        공개
                    </div>
                </TopInfo>
                <MiddelInfo>
                    <GroupName>
                    에델바이스
                    </GroupName>
                    <GroupExplain>
                    서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.
                    </GroupExplain>
                </MiddelInfo>
                <BottomInfo>
                    
                    <BottomFrag>
                        <BottomInfoHeader>획득배지</BottomInfoHeader>
                        <BottomFragValue>2</BottomFragValue>
                    </BottomFrag>
                    
                    <BottomFrag>
                        <BottomInfoHeader>추억</BottomInfoHeader>
                        <BottomFragValue>8</BottomFragValue>
                    </BottomFrag>
                    <BottomFrag>
                        <BottomInfoHeader>그룹 공감</BottomInfoHeader>
                        <BottomFragValue>8k</BottomFragValue>
                    </BottomFrag>
                </BottomInfo>
            </InfoOutter>
        </GroupCardOutter>
    );

}

export default GroupCard;