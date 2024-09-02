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
    font-weight: 400;
    font-color:#B8B8B8;

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
// ,commentId,onModifyClick,onDeleteClick
function Comment({cmt}){
    const date =new Date(cmt.createdAt);
    console.log(cmt)

    return(
        <CommentOutter>
                    <CommentTopOutter>
                            <CommentUser>
                                {cmt.nickname}
                            </CommentUser>
                            <CommentInfo>
                               { `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`}
                            </CommentInfo>
                        </CommentTopOutter>
                        <CommentBottom>
                            <CommentCentent>
                                {cmt.content}
                            </CommentCentent>
                            <CommentModifyButtons>
                                <Link>
                                    <CommentModifyButton src={CommentModifyIcon}/>
                                </Link>
                                <Link>
                                    <CommentModifyButton src={CommentDelete}/>
                                </Link>
                            </CommentModifyButtons>
                        </CommentBottom>
                        <CommentLine/>
                    </CommentOutter>
    )
}

export default Comment;