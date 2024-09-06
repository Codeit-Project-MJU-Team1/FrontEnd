import styled from "styled-components"
import GroupInfoCard from "../components/groupInfoCard";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HeadSearch from "../components/headSearch";
import Groups from "../components/groups";
import ListLoading from "../components/listLoading";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";
import Posts from "../components/posts.js";
import { KeyContext } from "../components/contexts/keyContext.js";
import noContentImg from "../images/noContent.png"

const DetailedPostOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Line =styled.div`
    width: 1560px;
    height: 1px;
    gap: 0px;
    border: 1px 0px 0px 0px;
    opacity: 0.5 px;
    background-color:#DDDDDD;
    margin-top:120px;
    margin-bottom:120px;

`
const GroupPostsHeaderOutter =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:1560px;
    height:100px;
    
`
const DummyDiv=styled.div`
    width: 200px;
    height: 45px;
`

const PostsHeadName=styled.h1`
    height:30px;
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-weight: 700;
    line-height: 30.05px;
    letter-spacing: -0.03em;
    text-align: center;


`



const NoContentOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:1920px;
    height:711px;

`
const NoContentImg=styled.img`
    margin-top:120px;
    width:100px;
    height:100px;
`
const NoContentLarge=styled.div`
    margin-top:40px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color:#8D8D8D;

`
const NoContentSmall=styled.div`
    margin-top:20px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color:#8D8D8D;

`
const PostCreate=styled.div`
    display:flex;
    margin-top:180px;
    width: 400px;
    height: 50px;
    border-radius: 6px;
    background-color:#282828;
    color: #FAFAFA;
    align-items:center;
    justify-content:center;
    text-decoration: 'none';


`


function CreatePostButton({id}){

    const CreatePostOutter =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 200px;
    height: 45px;
    background-color:#282828;
    color:#FAFAFA;
    gap: 0px;
    border-radius: 6px;

    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: center;



`
        

    return(
        <Link to={`/createPost/${id}`}>
            <CreatePostOutter>추억 올리기</CreatePostOutter>
        </Link>
        
        
    )


}

function DetailedGroup(){

    //그룹 만들기 버튼 on/off
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(false);
    const { setKey ,key } = useContext(KeyContext);
    const {id,postId} = useParams();
    const [values,setValues]=useState({});
    const [postList,setPostList]=useState({});

    
    //그룹 내 추억 로딩
    
    const [isLoadingButton,setIsLoadingButton]=useState(true);
    const [postsValues,setPostsValues]=useState({
        option : "latest",
        search : "",
        isPublic: true,
        keyword:"",
        page:0,
        groupId: id,
    })
    const options = [
        {  label: "최신순", value: "latest" },
        {  label: "댓글순", value: "mostCommented" },
        {  label: "공감순", value: "mostLiked" },
      ]
    

    //그룹 상세 제반사항 로딩
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
                
                fetch(`https://backend-b4qi.onrender.com/api/groups/${id}?groupId=${id}`, {
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
                    setValues(data);
                    
                })

            }
            handleload();
            
        }
        ,[]
    )
    
    
    const onLoadingClick = () =>{
        console.log("보내기 직전")
        console.log(postsValues.option)
        fetch(`https://backend-b4qi.onrender.com/api/groups/${id}/posts?page=${postsValues.page}&pageSize=${12}&sortBy=${postsValues.option}${ postsValues.keyword ? "&keyword="+postsValues.keyword: "" }&isPublic=${postsValues.isPublic}`, {
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
            
            if(data[0]){
                
                data.map((group)=>{
                    console.log("map 속")
                    console.log(group)
                    if(data.indexOf(group)%4===0){ // 배열이 불려온 순서(인덱스)에 따라 순서배치
                        setMiddlePosts1((prevPosts)=>{
                            return [...prevPosts,group];

                        }
                            
                        )
                        console.log(middlePosts1)
                    }else if(data?.indexOf(group)%4===1){
                        setMiddlePosts2(
                            (prevPosts)=>{
                                return [...prevPosts,group];
    
                            }
                        )
                        console.log(middlePosts2)
                    }else if(data?.indexOf(group)%4===2){
                        setMiddlePosts3(
                            (prevPosts)=>{
                                return [...prevPosts,group];
    
                            }
                        )
                        console.log(middlePosts3)
                    }else if(data?.indexOf(group)%4===3){
                        setMiddlePosts4(
                            (prevPosts)=>{
                                return [...prevPosts,group];
    
                            }
                        )
                        console.log(middlePosts4)
                    }
                })
                if(data.length%12!=0){
                    setIsLoadingButton(false)
                    setPostsValues({
                        ...postsValues,
                        "page" : 0,
                    })
                    return; // 마지막 로딩에서 그룹 로딩이 꽉안찼을 경우
                }
                setPostsValues({
                    ...postsValues,
                    "page" : postsValues?.page + 1,
                }) 
                }else{
                setIsLoadingButton(false)
                setPostsValues({
                    ...postsValues,
                    "page" : 0,
                }) //로딩된 데이터가 없는 경우
            }
            
        })
    }
    const handleload = async () => {
        
        console.log("보내기 직전")
        console.log(postsValues.option)
        
        fetch(`https://backend-b4qi.onrender.com/api/groups/${id}/posts?page=${0}&pageSize=${12}&sortBy=${postsValues.option}${ postsValues.keyword ? "&keyword="+postsValues.keyword: "" }&isPublic=${postsValues.isPublic}`, {
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
            
            if(data[0]){
                
                data?.map((post)=>{
                    console.log("map 속")
                    console.log(post)
                    if(data.indexOf(post)%4===0){ // 배열이 불려온 순서(인덱스)에 따라 순서배치
                        setMiddlePosts1((prevPosts)=>{
                            return [...prevPosts,post];

                        }
                            
                        )
                        console.log(middlePosts1)
                    }else if(data?.indexOf(post)%4===1){
                        setMiddlePosts2(
                            (prevPosts)=>{
                                return [...prevPosts,post];
    
                            }
                        )
                        console.log(middlePosts2)
                    }else if(data?.indexOf(post)%4===2){
                        setMiddlePosts3(
                            (prevPosts)=>{
                                return [...prevPosts,post];
    
                            }
                        )
                        console.log(middlePosts3)
                    }else if(data?.indexOf(post)%4===3){
                        setMiddlePosts4(
                            (prevPosts)=>{
                                return [...prevPosts,post];
    
                            }
                        )
                        
                    }
                })
                if(data.length%12!=0){
                    setIsLoadingButton(false)
                    setPostsValues({
                        ...postsValues,
                        "page" : 0,
                    })
                    return; // 마지막 로딩에서 그룹 로딩이 꽉안찼을 경우
                }
                setIsLoadingButton(true);
                setPostsValues({
                    ...postsValues,
                    "page" : 1,
                })
            }else{
                setIsLoadingButton(false)
            }
            
        })
    }

    const [middlePosts1,setMiddlePosts1]=useState([]);
    const [middlePosts2,setMiddlePosts2]=useState([]);
    const [middlePosts3,setMiddlePosts3]=useState([]);
    const [middlePosts4,setMiddlePosts4]=useState([]);
    if(middlePosts1[0] == false){
        console.log("홈시작")
    }


    
        
    
    
    useEffect(()=>{
        setPostsValues({
            ...postsValues,
            "page":0,
        })
        setMiddlePosts1([]);
        setMiddlePosts2([]);
        setMiddlePosts3([]);
        setMiddlePosts4([]);
        
        
        handleload();
        console.log(postsValues.isPublic);
        
        
        
    },[postsValues.option,postsValues.keyword,postsValues.isPublic]);
    
    return(
        <DetailedPostOutter>
            <GroupInfoCard setValues={setValues} values={values} id={id} />
            <Line/>
            <GroupPostsHeaderOutter>
                <DummyDiv/>
                <PostsHeadName>추억 목록</PostsHeadName>
                <CreatePostButton id={id}/>
            </GroupPostsHeaderOutter>
            <HeadSearch options={options} searchValues={postsValues} setSearchValues={setPostsValues}/>
            { middlePosts1[0] ?
            <>
                <Posts middlePosts1={middlePosts1} middlePosts2={middlePosts2} middlePosts3={middlePosts3} middlePosts4={middlePosts4} postsValues={postsValues} />
                <ListLoading isLoadingButton={isLoadingButton} onLoadingClick={onLoadingClick}/>
            </>
            :
            <NoContentOutter>
                <NoContentImg src={noContentImg}/>
                <NoContentLarge>
                    게시된 추억이 없습니다.
                </NoContentLarge>
                <NoContentSmall>
                    첫번째 추억을 올려보세요!
                </NoContentSmall>
                    <div>
                        <Link to={`/createPost/${id}`}>
                            <PostCreate>
                            추억 올리기
                            </PostCreate>
                        </Link>
                    </div>
            </NoContentOutter>
            }
            
        </DetailedPostOutter>
    )
}

export default DetailedGroup;