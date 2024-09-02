import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReplyIcon from "../images/ReplyIcon.png";
import Icon from "../images/size16.png";
const PostCardOutter= styled.div`
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
const PostImg= styled.img`
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
const PostName=styled(Link)`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-align: left;
    color:#282828;
    text-decoration:none;

`
const PostExplain=styled(Link)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.03em;
    text-align: left;
    color:#282828;
    text-decoration:none;

`


const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`
const PostInfo=styled.div`
   
    font-size: 12px;
    font-weight: 400;
    text-align: left;

`

const Tags=styled.div`
    display:flex;
    gap:20px;
    width:100%;
    font-size: 14px;
    font-weight: 400;
    text-align: left;

    color:#B8B8B8;

    
`

const ResOutter=styled.div`
    gap:20px;
    display:flex;
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

const getDateDiff= (date)=>{
    const currentDate = new Date();
    const PostDate = new Date(date);
    const diffDate = currentDate.getTime()-PostDate.getTime();
    return Math.floor(Math.abs(diffDate/(1000* 60 *60* 24))) ;

};



function PostCard({Post,id}){
        const date =new Date(Post.createdAt);



    return(
        <PostCardOutter>
            { Post.isPublic &&
            <Link to={`Post/`+Post?.id} >
                <PostImg src={Post.imageUrl}/>
            </Link>
            }
            
            
            <InfoOutter>
                <TopInfo>
                    <div>
                        {Post.nickname}
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        {Post.isPublic ? "공개": "비공개"}
                    </div>
                </TopInfo>
                <MiddelInfo>
                    <PostName to={`Post/`+Post?.id}>
                    {Post.title}
                    </PostName>
                    <Tags>
                    {
                        Post?.tags.map((tag)=>{
                            return(
                                <div>
                                    {`#${tag}`}
                                </div>
                            )
                        })
                    }
                </Tags>
                </MiddelInfo>
                
                <Bottom>
                    <PostInfo>
                        {`${Post?.location}  ·  ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}
                    </PostInfo>
                    <ResOutter>
                        <Link>
                            <PostRes>
                                    <PostResImg src={Icon}/>
                                    <div>
                                        {Post.likeCount}
                                    </div>
                                </PostRes>
                            </Link>
                            <Link>
                                <PostRes>
                                    <PostResImg src={ReplyIcon}/>
                                    <div>
                                        {Post.commentCount}
                                    </div>
                                </PostRes>
                            </Link>
                    </ResOutter>
                </Bottom>
            </InfoOutter>
        </PostCardOutter>
    );

}

export default PostCard;