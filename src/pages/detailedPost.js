import styled from "styled-components";
import { useState } from "react";
import CreateGroupModal from "../components/modals/createGroupModal";
import Toggle from "../components/toggle";
import ImgInput from "../components/imgInput";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";
import { useParams } from "react-router-dom";
import ReplyModifyIcon from "../images/ReplyModifyIcon.png";
import ReplyDelete from "../images/ReplyDelete.png";
import Icon from "../images/size16.png";

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
    gap:20px; 
`
const EditorName=styled.div`

`

const Release=styled.div`
    font-color:#B8B8B8;
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
const ReplyButton=styled.div`
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

const ReplysOutter = styled.div`
    margin-top:80px;
    width:1510px;
    
`
const ReplyHeader = styled.div`

    font-size: 18px;
    font-weight: 500;
    text-align: left;

`
const ReplysLine =styled.div`
    margin-top:10px;
    width:100%;
    height:1px;
    background-color: #282828;
`
const ReplyList= styled.div`
    margin-top:30px;
    gap:20px;
`
const ReplyOutter= styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
`

const ReplyTopOutter=styled.div`
    display:flex;
    gap:10px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    font-color:#B8B8B8;
`
const ReplyUser=styled.div`


`
const ReplyInfo=styled.div`
    font-weight: 400;
    font-color:#B8B8B8;

`
const ReplyBottom=styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-top:16px;
`
const ReplyCentent=styled.div`

`
const ReplyModifyButtons=styled.div`
    gap:20px;
`
const ReplyModifyButton=styled.img`
    width:20px;
    height:20px;
`

const ReplyLine= styled.div`
    margin-top:19px;
    width:100%;
    height:1px;
    background-color: #DDDDDD;
    margin-top:19px;
`


function DetailedPost(){
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(false);

    const {id,postId} = useParams();
    const [values,setValues]=useState({});


    return(
        <DetailedPostOutter>
            <PostHeaderOutter>
                <PostHeaderStart>
                    <TopInfo>
                        <ReleaseOutter>
                            <EditorName>달봉이아들</EditorName><Release>| 공개</Release>
                        </ReleaseOutter>
                        <Title>
                            인천 앞바다에서 무려 60cm 월척을 낚다!
                        </Title>
                        <Tags>
                            #인천
                        </Tags>
                    </TopInfo>
                    <BottomInfo>
                        <PostEnv>
                           인천 앞바다 ·  24.01.19  18:00
                        </PostEnv>
                        <PostResOutter>
                            <Link>
                                <PostRes>
                                    <div>

                                    </div>
                                    <div>
                                        120
                                    </div>
                                </PostRes>
                            </Link>
                            <Link>
                                <PostRes>
                                    <div>

                                    </div>
                                    <div>
                                        120
                                    </div>
                                </PostRes>
                            </Link>
                        </PostResOutter>
                    </BottomInfo>
                </PostHeaderStart>
                <PostHeaderEnd>
                    <PostModifyOutter>
                        <PostEdit>
                            추억 수정하기
                        </PostEdit>
                        <PostDelete>
                            추억 삭제하기
                        </PostDelete>
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
                <PostImg/>
                <PostContent>
                    인천 앞바다에서 월척을 낚았습니다!
                    가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요

                    인천 앞바다에서 월척을 낚았습니다!
                    가족들과 기억에 오래도록 남을 멋진 하루였어요

                    인천 앞바다에서 월척을 낚았습니다!
                </PostContent>
            </PostOutter>
            <Link>
                <ReplyButton>
                    댓글 등록하기
                </ReplyButton>
            </Link>
            <ReplysOutter>
                <ReplyHeader>
                    댓글 8
                </ReplyHeader>
                <ReplysLine/>
                <ReplyList>
                    <ReplyOutter>
                        <ReplyTopOutter>
                            <ReplyUser>
                                다람이네가족
                            </ReplyUser>
                            <ReplyInfo>
                                24.01.18  21:50
                            </ReplyInfo>
                        </ReplyTopOutter>
                        <ReplyBottom>
                            <ReplyCentent>
                                우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~
                            </ReplyCentent>
                            <ReplyModifyButtons>
                                <ReplyModifyButton src={ReplyModifyIcon}>

                                </ReplyModifyButton>
                                <ReplyModifyButton src={ReplyDelete}>
                                    
                                </ReplyModifyButton>
                            </ReplyModifyButtons>
                        </ReplyBottom>
                        <ReplyLine/>
                    </ReplyOutter>
                </ReplyList>
            </ReplysOutter>
            
            
        </DetailedPostOutter>

    )

}

export default DetailedPost;