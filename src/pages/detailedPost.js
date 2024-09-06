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
import Icon from "../images/size16.png";
import PostEditModal from "../components/modals/postEditModal.js";
import PostDeleteModal from "../components/modals/postDeleteModal.js";
import CommentCreateModal from "../components/modals/commentCreateModal.js";
import Comment from "../components/comment.js";
import CommentEditModal from "../components/modals/commentEditModal.js";
import CommentDeleteModal from "../components/modals/commentDeleteModal.js";
import Pagination from "../components/pagination.js";
import LikeButton from "../components/likeButton.js";

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
    color:#8D8D8D;
`

const Title=styled.div`
    text-align:left;
    font-size: 30px;
    font-weight: 700;
    margin-top:20px;



`
const Tags=styled.div`
    display:flex;
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
    align-items:center;
`
const PostEnv=styled.div`

    font-size: 16px;
    font-weight: 700;
    text-align: left;

`
const PostResOutter=styled.div`
    display:flex;
    gap:20px;
    color: #8D8D8D;
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
    margin-bottom:123px;

`
const PostEdit=styled.div`
color:#282828;
`
const PostDelete=styled.div`
    color:#282828;
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
const PostContent=styled.p`
    margin-top:60px;
    font-size: 20px;
    font-weight: 400;
    text-align: left;

`
const CommentButtonOutter=styled.div`
    margin-top:120px;



`
const CommentButton=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 400px;
    height: 50px;
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
const NoContentLarge=styled.div`
    margin-top:121px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color:#8D8D8D;

`
const NoContentSmall=styled.div`
    margin-top:19px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color:#8D8D8D;

`

function DetailedPost(){
    const {id,postId} = useParams();
    const [values,setValues]=useState({});
    const [comments,setComments]=useState([]);
    const [page,setPage]=useState(0);
    const [pagiNum,setPagiNum]=useState(0);
    const [editModalOpen, setEditModalOpen] =useState(false);
    const [deleteModalOpen,setDeleteModalOpen]=useState(false);
    const [commentCreateModalOpen,setCommentCreateModalOpen]=useState(false);
    const [CommentEditModalOpen,setCommentEditModalOpen]=useState(false);
    const [commentDeleteModalOpen,setCommentDeleteModalOpen]=useState(false);
    const [comment,setComment]=useState(false);
    const [maxPagi,setMaxPagi]=useState(1);
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
                
                fetch(`https://backend-b4qi.onrender.com/api/posts/${postId}/comments?postId=${postId}&page=${0}&pageSize=${1000}`, {
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
                        console.log("받은 페이지네이션데이터");
                        console.log(data);
                        console.log(Math.ceil(data?.length/3))
                        setMaxPagi(Math.ceil(data?.length/3))
                    }
                    
                    
                    
                    
                })
            }

            handleload();
        }
        ,[]
    )



    const handleloadCommnets = async () => {
        

        fetch(`https://backend-b4qi.onrender.com/api/posts/${postId}/comments?postId=${postId}&page=${page}&pageSize=${3}`, {
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
            console.log("받은 데이터");
            console.log(data);
            setComments(data)
            
        })
    }


    const onLikeClick=()=>{
        fetch(`https://backend-b4qi.onrender.com/api/posts/${postId}/like`, {
            method: "POST",
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
            console.log("받은 데이터");
            console.log(data);
            setValues({...values,
                "likeCount":values.likeCount+1,})
        })
    }
    
    
        
    
    // 진입 및 댓글 페이지마다 댓글 로딩
    useEffect(()=>{
        
        handleloadCommnets();
    
    },[page]);

    return(
        <DetailedPostOutter>
            <PostHeaderOutter>
                <PostHeaderStart>
                    <TopInfo>
                        <ReleaseOutter>
                        <EditorName>{values.nickname}</EditorName><Release>|</Release><Release>{values.isPublic? "공개":"비공개"}</Release>
                        </ReleaseOutter>
                        <Title>
                            {values.title}
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
                           {`${values?.location}  ·  ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}  {date.getHours()}:{date.getMinutes()}
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
                                    {values.commentCount ? values.commentCount: 0}
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
                    
                    <LikeButton onClick={onLikeClick} />
                    
                </PostHeaderEnd>
            </PostHeaderOutter>
            <TopLine/>
            <PostOutter>
                <PostImg src={values.imageUrl}/>
                <PostContent>
                    {values.content}
                </PostContent>
            </PostOutter>
            <CommentButtonOutter>
            <Link onClick={()=> setCommentCreateModalOpen(true)}>
                <CommentButton>
                    댓글 등록하기
                </CommentButton>
            </Link>
            </CommentButtonOutter>
            <CommentsOutter>
                <CommentHeader>
                    댓글 {values.commentCount ? values.commentCount: 0}
                </CommentHeader>
                <CommentsLine/>
                <CommentList>
                    {comments[0] ?
                        comments.map((cmt)=>{
                            
                            return(
                                <Comment cmt={cmt} scet={setCommentEditModalOpen} scdt={setCommentDeleteModalOpen} setComment={setComment} ></Comment>
                            )
                        }) 
                        :
                        <>
                        <NoContentLarge>
                            게시된 댓글이 없습니다.
                        </NoContentLarge>
                        <NoContentSmall>
                            첫번째 댓글을 올려보세요!
                        </NoContentSmall>
                        </>
                    }
                </CommentList>
                
            </CommentsOutter>
            {comments[0] ?
            <Pagination setPage={setPage} setPagiNum={setPagiNum} maxPagi={maxPagi} page={page} pagiNum={pagiNum}></Pagination>
            :
            <></>
            }
            
            
            <PostEditModal modalOpen={editModalOpen} setModalOpen={setEditModalOpen} postId={postId} postValues={values}></PostEditModal>
            <PostDeleteModal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen} id={id} postId={postId}></PostDeleteModal>
            <CommentCreateModal modalOpen={commentCreateModalOpen} setModalOpen={setCommentCreateModalOpen} postId={postId}></CommentCreateModal>
            <CommentEditModal modalOpen={CommentEditModalOpen} setModalOpen={setCommentEditModalOpen} postId={postId} commentValues={comment}></CommentEditModal>
            <CommentDeleteModal modalOpen={commentDeleteModalOpen} setModalOpen={setCommentDeleteModalOpen} postId={postId} commentValues={comment}></CommentDeleteModal>
        </DetailedPostOutter>

    )

}

export default DetailedPost;