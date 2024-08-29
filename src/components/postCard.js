import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    const PostDate = new Date(date);
    const diffDate = currentDate.getTime()-PostDate.getTime();
    return Math.floor(Math.abs(diffDate/(1000* 60 *60* 24))) ;

};



function PostCard({Post}){
    
    return(
        <PostCardOutter>
            { Post.isPublic &&
            <Link to={"/Post/"+Post?.id} >
                <PostImg src={Post.imageUrl}/>
            </Link>
            }
            
            
            <InfoOutter>
                <TopInfo>
                    <div>
                        D+{getDateDiff(Post.createdAt)}
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        {Post
                        .isPublic ? "공개": "비공개"}
                    </div>
                </TopInfo>
                <MiddelInfo>
                    <PostName to={"/Post/"+Post?.id}>
                    {Post.name}
                    </PostName>
                    <PostExplain to={"/Post/"+Post?.id}>
                    {Post.introduction}
                    </PostExplain>
                </MiddelInfo>
                <BottomInfo>
                    
                    <BottomFrag>
                        <BottomInfoHeader>획득배지</BottomInfoHeader>
                        <BottomFragValue>{3}</BottomFragValue>
                    </BottomFrag>
                    
                    <BottomFrag>
                        <BottomInfoHeader>추억</BottomInfoHeader>
                        <BottomFragValue>{Post.postCount}</BottomFragValue>
                    </BottomFrag>
                    <BottomFrag>
                        <BottomInfoHeader>그룹 공감</BottomInfoHeader>
                        <BottomFragValue>{Post.likeCount}</BottomFragValue>
                    </BottomFrag>
                </BottomInfo>
            </InfoOutter>
        </PostCardOutter>
    );

}

export default PostCard;