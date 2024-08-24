import { Link, useNavigate } from "react-router-dom";
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
    width: 335px;
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

const getDateDiff= (date)=>{
    const currentDate = new Date();
    const groupDate = new Date(date);
    const diffDate = currentDate.getTime()-groupDate.getTime();
    return Math.floor(Math.abs(diffDate/(1000* 60 *60* 24))) ;

};



function GroupCard({group}){
    
    return(
        <GroupCardOutter>
            <Link to={"/group/"+group?.id} >
                <GroupImg src={group.imageUrl}/>
            </Link>
            
            <InfoOutter>
                <TopInfo>
                    <div>
                        D+{getDateDiff(group.createdAt)}
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        {group.isPublic ? "공개": "비공개"}
                    </div>
                </TopInfo>
                <MiddelInfo>
                    <GroupName>
                    {group.name}
                    </GroupName>
                    <GroupExplain>
                    {group.introduction}
                    </GroupExplain>
                </MiddelInfo>
                <BottomInfo>
                    
                    <BottomFrag>
                        <BottomInfoHeader>획득배지</BottomInfoHeader>
                        <BottomFragValue>{3}</BottomFragValue>
                    </BottomFrag>
                    
                    <BottomFrag>
                        <BottomInfoHeader>추억</BottomInfoHeader>
                        <BottomFragValue>{group.postCount}</BottomFragValue>
                    </BottomFrag>
                    <BottomFrag>
                        <BottomInfoHeader>그룹 공감</BottomInfoHeader>
                        <BottomFragValue>{group.likeCount}</BottomFragValue>
                    </BottomFrag>
                </BottomInfo>
            </InfoOutter>
        </GroupCardOutter>
    );

}

export default GroupCard;