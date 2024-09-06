import styled from "styled-components";
import CommentModifyIcon from "../images/commentModifyIcon.png";
import CommentDelete from "../images/commentDelete.png";
import { Link } from "react-router-dom";

const CommentOutter= styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
`

const CommentTopOutter=styled.div`
    display:flex;
    gap:10px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    font-color:#B8B8B8;
`
const CommentUser=styled.div`

`
const CommentInfo=styled.div`
    display:flex;
    gap:8px;
    font-weight: 400;
    color:#B8B8B8;
    

`
const CommentBottom=styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-top:16px;
`
const CommentCentent=styled.div`

`
const CommentModifyButtons=styled.div`
    display:flex;
    gap:20px;
`
const CommentModifyButton=styled.img`
    width:20px;
    height:20px;
`

const CommentLine= styled.div`
    margin-top:19px;
    width:100%;
    height:1px;
    background-color: #DDDDDD;
    margin-top:19px;
`
// commentId,onModifyClick,onDeleteClick
function Comment({cmt,scet,scdt,setComment}){
    const date =new Date(cmt.createdAt);
    console.log(cmt)
    setComment(cmt);
    return(
        <CommentOutter>
                    <CommentTopOutter>
                            <CommentUser>
                                {cmt.nickname}
                            </CommentUser>
                            <CommentInfo>
                               <span>{ `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}</span> <span>{`${date.getHours()}:${date.getMinutes()}`}</span>
                            </CommentInfo>
                        </CommentTopOutter>
                        <CommentBottom>
                            <CommentCentent>
                                {cmt.content}
                            </CommentCentent>
                            <CommentModifyButtons>
                                <div>{/* gap 적용을 위한 div */}
                                <Link onClick={()=>{scet(true)}}>
                                    <CommentModifyButton src={CommentModifyIcon}/>
                                </Link>
                                </div>
                                <div>{/* gap 적용을 위한 div */}
                                <Link onClick={()=>{scdt(true)}}>
                                    <CommentModifyButton src={CommentDelete}/>
                                </Link>
                                </div>
                            </CommentModifyButtons>
                        </CommentBottom>
                        <CommentLine/>
                    </CommentOutter>
    )
}

export default Comment;