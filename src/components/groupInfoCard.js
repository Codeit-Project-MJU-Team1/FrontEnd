import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "./likeButton.js";

const CardInfoOutter=styled.div`
    display:flex;
    width:1560px;
    height:273px;
    margin-top:60px;
    
    
`
const CardImg=styled.img`
    width:262px;
    height:273px;
`
const CardInfo=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left:60px;
    width:1238px;
    height:273px;
`

//카드 윗 부분
function InfoHead(){
    const InfoHeadOutter=styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width: 1238px;
        gap:20px;

    `
    const InfoHeadTop=styled.div`
        display:flex;
        width:1238x;
        height:20px;
        justify-content:space-between;
        
    `
    const InfoHeadTopFrag=styled.div`
        display:flex;
        justify-content:space-between;
        color:#8D8D8D;
        margin-right:15px;
    `
    const InfoHeadTopFragLeft=styled.div`
        color:#282828;
;
    `
    
    const InfoHeadMiddle=styled.div` 
        display:flex;
        display:space-between;
        font-size:18px;
        font-weight:700px;
        align-items:center;

    `
    const InfoHeadMiddleStart=styled.div`
        font-size:30px;
        margin-right:40px;
    `
    const InfoHeadMiddleEnd=styled.div`
        display:flex;
        gap:30px;
    `
    const InfoHeadMiddleEndFrag=styled.div`
        display:flex;
        gap:10px;     
    `

    const InfoHeadBottom=styled.div`
        font-size: 18px;
        font-weight: 400;
        text-align: left;

    `
    return(
        <InfoHeadOutter>
            <InfoHeadTop>
                <InfoHeadTopFrag>
                    <InfoHeadTopFragLeft>
                        D+265
                    </InfoHeadTopFragLeft>
                        <div>
                            |
                        </div>
                        <div style={{marginLeft:'15px;'}}>
                            공개
                        </div>
                </InfoHeadTopFrag>
                <InfoHeadTopFrag>
                    <InfoHeadTopFragLeft>
                        <Link>
                        그룹 정보 수정하기
                        </Link>
                    </InfoHeadTopFragLeft>
                    <div style={{marginLeft: '25px'}}>
                        <Link>
                        그룹 삭제하기
                        </Link>
                    </div>
                </InfoHeadTopFrag>
            </InfoHeadTop>
            <InfoHeadMiddle>
                <InfoHeadMiddleStart>
                    달봉이네 가족
                </InfoHeadMiddleStart>
                <InfoHeadMiddleEnd>
                    <InfoHeadMiddleEndFrag>
                        <div>
                            게시글
                        </div>
                        <div>
                            8 
                        </div>
                    </InfoHeadMiddleEndFrag>
                    <div>
                        |
                    </div>
                    <InfoHeadMiddleEndFrag>
                        <div>
                            그룹 공감
                        </div>
                        <div>
                            1.5K
                        </div>
                    </InfoHeadMiddleEndFrag>
                </InfoHeadMiddleEnd>
                
            </InfoHeadMiddle>
            <InfoHeadBottom>
                서로 한마음으로 응원하고 아끼지 않는 달봉이네 가족일까요?
            </InfoHeadBottom>
        </InfoHeadOutter>
        
    )

}

//카드 아래 부분
function InfoFoot(){
    
    const InfoFootOutter=styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:1238px;
        height:92px;
    `
    const InfoFootBottom=styled.div`
        display:flex;
        width:1238px;
        justify-content:space-between;
    `
    function Badges(){
        const BadgesOutter=styled.div`
            display:flex;
            justify-content:start;
            height:52px;
            gap: 10px;
        
        `
        const Badge=styled.div`
            height: 52px;
            padding: 16px 30px 16px 30px;
            gap: 10px;
            border-radius: 50px;
            background-color:#F4F4F4;


        `
        return(
            <BadgesOutter>
                <Badge></Badge>
                <Badge></Badge>
                <Badge></Badge>
            </BadgesOutter>
            
        )
    }
    return(
        <InfoFootOutter>
            <div>획득 배지</div>
            <InfoFootBottom>
                <Badges/>
                <LikeButton/>
            </InfoFootBottom>
            
        </InfoFootOutter>
        
    )

}





function GroupInfoCard({id}){

return(

    <CardInfoOutter>
        <CardImg/>
        <CardInfo>
            <InfoHead/>
            <InfoFoot/>
        </CardInfo>
    </CardInfoOutter>
)
}

export default GroupInfoCard;