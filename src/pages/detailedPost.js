import styled from "styled-components";
import { useState,useEffect } from "react";
import CreateGroupModal from "../components/modals/createGroupModal";
import Toggle from "../components/toggle";
import ImgInput from "../components/imgInput";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";
import { useParams } from "react-router-dom";
import CommentIcon from "../images/commentIcon.png";
import CommentModifyIcon from "../images/commentModifyIcon.png";
import CommentDelete from "../images/commentDelete.png";
import Icon from "../images/size16.png";
import PostEditModal from "../components/modals/postEditModal.js";
import PostDeleteModal from "../components/modals/postDeleteModal.js";

const DetailedPostOutter=styled.div`
    width:1560px;
    margin-top:60px;
    margin-bottom:120px;
    display:flex;
    flex-direction:column;
    align-items:center;

`

const PostHeaderOutter=styled.div`  
    width:100%;
    display:flex;
    justify-content:space-between;


`
const PostHeaderStart=styled.div`  
    display:flex;
    align-items:start;
    flex-direction:column;

    

`
const TopInfo=styled.div`
    gap:20px;
    text-align:left;
    
`
const ReleaseOutter=styled.div`
    display:flex; 
    font-size: 16px;
    font-weight: 400;
    gap:20px; 
`
const EditorName=styled.div`

`

const Release=styled.div`
    font-color:#8D8D8D;
`

const Title=styled.div`
    text-align:left;
    font-size: 30px;
    font-weight: 700;
    margin-top:20px;



`
const Tags=styled.div`
    gap:20px;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin-top:20px;

    
`
const BottomInfo=styled.div`
    display:flex;
    gap:41px;
    margin-top:62px;
`
const PostEnv=styled.div`

    font-size: 16px;
    font-weight: 700;
    text-align: left;

`
const PostResOutter=styled.div`
    display:flex;
    gap:20px;
    font-color: #8D8D8D;
    font-size: 14px;
    font-weight: 400;
    text-align: left;


`
const PostRes=styled.div`
    display:flex;
    gap:5px;
    color:#8D8D8D;
`
const PostResImg=styled.img`
    display:flex;
    width:24px;
    height:24px;
`

const PostHeaderEnd=styled.div`  
    display:flex;
    height:100%;
    flex-direction:column;
    align-items: end;
    justify-content:space-between;
    
    

`

const PostModifyOutter=styled.div`
    display:flex; 
    margin-top:10px
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    gap:60px;

`
const PostEdit=styled.div`
`
const PostDelete=styled.div`
    font-color:#8D8D8D;
`
const LikeButton=styled.div`
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    width: 187.88px;
    height: 52px;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid #282828;
    margin-top:123px;
    

`
const LIkeIcon=styled.img`
    width:22px;
    height:22px;
`

const TopLine =styled.div`
    width:100%;
    height:1px;
    background-color: #DDDDDD;
    margin-top:60px;
`



const PostOutter=styled.div`
    margin-top:60px;
    width: 780px;
`
const PostImg=styled.img`
    width: 780px;
    height: 780px;
    gap: 0px;
    border-radius: 6px;

`
const PostContent=styled.div`
    margin-top:60px;
    font-size: 20px;
    font-weight: 400;
    text-align: left;

`
const CommentButton=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 400px;
    height: 50px;
    margin-top:120px;
    gap: 0px;
    border-radius: 6px;
    background-color: #282828;
    color:#FAFAFA;



`

const CommentsOutter = styled.div`
    margin-top:80px;
    width:1510px;
    
`
const CommentHeader = styled.div`

    font-size: 18px;
    font-weight: 500;
    text-align: left;

`
const CommentsLine =styled.div`
    margin-top:10px;
    width:100%;
    height:1px;
    background-color: #282828;
`
const CommentList= styled.div`
    margin-top:30px;
    gap:20px;
`
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


function DetailedPost(){
    const {id,postId} = useParams();
    const [values,setValues]=useState({});
    const [editModalOpen, setEditModalOpen] =useState(false);
    const [deleteModalOpen,setDeleteModalOpen]=useState(false);
    const date =new Date(values.createdAt);
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(false);

    

    useEffect(
        ()=>{
            
            // if(key || location.state?.isPublic){
                
            // }else{
            //     setKey(location.state?.isAuthentic);
            //     if(key){
                    
            //     }else{
            //         navigate(`/`);
            //     }
                
            // }
            const handleload = async () => {
    
                fetch(`https://backend-b4qi.onrender.com/api/posts/${postId}?postId=${postId}`, {
                    method: "GET",
                }
                ).then((response) => {
                      if (response.ok === true) {
                        console.log("원본")
                        console.log(response)
                      return response.json();
                      }
                      throw new Error("에러 발생!");
                }).catch((err)=>{
                    alert(err);
                }).then((data)=> {
                    if(data){
                        console.log("받은 데이터");
                        console.log(data);
                        setValues(data);
                    }
                    
                    
                })

            }
            handleload();
        }
        ,[]
    )


    return(
        <DetailedPostOutter>
            <PostHeaderOutter>
                <PostHeaderStart>
                    <TopInfo>
                        <ReleaseOutter>
                        <EditorName>{values.nickname}</EditorName><Release>|    {values.isPublic? "공개":"비공개"}</Release>
                        </ReleaseOutter>
                        <Title>
                            {values.content}
                        </Title>
                        <Tags>
                        {
                        values.tags?.map((tag)=>{
                            return(
                                <div>
                                    {`#${tag}`}
                                </div>
                            )
                        })
                    }
                        </Tags>
                    </TopInfo>
                    <BottomInfo>
                        <PostEnv>
                           {`${values?.location}  ·  ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}  {date.getTime}:{date.getMinutes}
                        </PostEnv>
                        <PostResOutter>
                            <Link>
                                <PostRes>
                                    <PostResImg src={Icon}/>
                                    <div>
                                        {values.likeCount}
                                    </div>
                                </PostRes>
                            </Link>
                            <Link>
                                <PostRes>
                                    <PostResImg src={CommentIcon}/>
                                    <div>
                                    {values.commentCount}
                                    </div>
                                </PostRes>
                            </Link>
                        </PostResOutter>
                    </BottomInfo>
                </PostHeaderStart>
                <PostHeaderEnd>
                    <PostModifyOutter>
                        <Link onClick={()=> setEditModalOpen(true)}>
                        <PostEdit>
                            추억 수정하기
                        </PostEdit>
                        </Link>
                        <Link onClick={()=> setDeleteModalOpen(true)}>
                        <PostDelete>
                            추억 삭제하기
                        </PostDelete>
                        </Link>
                        
                        
                    </PostModifyOutter>
                    <Link>
                        <LikeButton>
                            <LIkeIcon src={Icon}/>
                            <div>
                            공감 보내기
                            </div>
                            
                        </LikeButton>
                    </Link>
                </PostHeaderEnd>
            </PostHeaderOutter>
            <TopLine/>
            <PostOutter>
                <PostImg src={values.imageUrl}/>
                <PostContent>
                    {values.content}
                </PostContent>
            </PostOutter>
            <Link>
                <CommentButton>
                    댓글 등록하기
                </CommentButton>
            </Link>
            <CommentsOutter>
                <CommentHeader>
                    댓글 {values.commentCount}
                </CommentHeader>
                <CommentsLine/>
                <CommentList>
                    <CommentOutter>
                        <CommentTopOutter>
                            <CommentUser>
                                다람이네가족
                            </CommentUser>
                            <CommentInfo>
                                24.01.18  21:50
                            </CommentInfo>
                        </CommentTopOutter>
                        <CommentBottom>
                            <CommentCentent>
                                우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~
                            </CommentCentent>
                            <CommentModifyButtons>
                                <CommentModifyButton src={CommentModifyIcon}>

                                </CommentModifyButton>
                                <CommentModifyButton src={CommentDelete}>
                                    
                                </CommentModifyButton>
                            </CommentModifyButtons>
                        </CommentBottom>
                        <CommentLine/>
                    </CommentOutter>
                </CommentList>
            </CommentsOutter>
            
            <PostEditModal modalOpen={editModalOpen} setModalOpen={setEditModalOpen} postId={postId} postValues={values}></PostEditModal>
            <PostDeleteModal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen} postId={postId}></PostDeleteModal>
        </DetailedPostOutter>

    )

}

export default DetailedPost;