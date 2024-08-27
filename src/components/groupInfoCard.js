import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "./likeButton.js";
import { useState } from "react";
import GroupEditModal from "./modals/groupEditModal.js";
import GroupDeleteModal from "./modals/groupDeleteModal.js";

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

    const getDateDiff= (date)=>{
        const currentDate = new Date();
        const groupDate = new Date(date);
        const diffDate = currentDate.getTime()-groupDate.getTime();
        return Math.floor(Math.abs(diffDate/(1000* 60 *60* 24))) ;
    
    };
//카드 윗 부분
function InfoHead({values , id}){
    
    const [editModalOpen,setEditModalOpen]= useState(false);
    const editModalHandler = () => {
        setEditModalOpen(true)
    }
    const [deleteModalOpen,setDeleteModalOpen]= useState(false);
    const deleteModalHandler = () => {
        setDeleteModalOpen(true)
    }

    return(
        <>
        <InfoHeadOutter>
            <InfoHeadTop>
                <InfoHeadTopFrag>
                    <InfoHeadTopFragLeft>
                    D+{getDateDiff(values.updatedAt)}
                    </InfoHeadTopFragLeft>
                        <div>
                            |
                        </div>
                        <div style={{marginLeft:'15px;'}}>
                        {values.isPublic ? "공개": "비공개"}
                        </div>
                </InfoHeadTopFrag>
                <InfoHeadTopFrag>
                    <InfoHeadTopFragLeft>
                        <Link onClick={editModalHandler}>
                        그룹 정보 수정하기
                        </Link>
                    </InfoHeadTopFragLeft>
                    <div style={{marginLeft: '25px'}}>
                        <Link onClick={deleteModalHandler}>
                        그룹 삭제하기
                        </Link>
                    </div>
                </InfoHeadTopFrag>
            </InfoHeadTop>
            <InfoHeadMiddle>
                <InfoHeadMiddleStart>
                    {values.name}
                </InfoHeadMiddleStart>
                <InfoHeadMiddleEnd>
                    <InfoHeadMiddleEndFrag>
                        <div>
                            게시글
                        </div>
                        <div>
                        {values.postCount} 
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
                            {values.likeCount}
                        </div>
                    </InfoHeadMiddleEndFrag>
                </InfoHeadMiddleEnd>
                
            </InfoHeadMiddle>
            <InfoHeadBottom>
            {values.introduction}
            </InfoHeadBottom>
        </InfoHeadOutter>
        <GroupEditModal modalOpen={editModalOpen} setModalOpen={setEditModalOpen} id={id}></GroupEditModal>
        <GroupDeleteModal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen} id={id}></GroupDeleteModal>
        </>
        
    )

}

//카드 아래 부분

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
    function Badges(){
        
        return(
            <BadgesOutter>
                <Badge></Badge>
                <Badge></Badge>
                <Badge></Badge>
            </BadgesOutter>
            
        )
    }

function InfoFoot(){
    
    
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





function GroupInfoCard({values,id}){

return(

    <CardInfoOutter>
        <CardImg src={values.imageUrl}/>
        <CardInfo>
            <InfoHead values={values} id={id}/>
            <InfoFoot/>
        </CardInfo>
    </CardInfoOutter>
)
}

export default GroupInfoCard;