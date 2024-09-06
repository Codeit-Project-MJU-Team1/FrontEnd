import styled from "styled-components";
import HeadSearch from "../components/headSearch.js";
import Groups from "../components/groups.js";
import ListLoading from "../components/listLoading.js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";
import { KeyContext } from "../components/contexts/keyContext.js";
import noContentImg from "../images/noContent.png"
import { Link } from "react-router-dom";

const CenterOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const NoContentOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:1920px;
    height:895px;

`
const NoContentImg=styled.img`
    margin-top:200px;
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
const GroupCreate=styled(Link)`
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

function Home(){
    //그룹 만들기 버튼 on/off
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(true);

    // const {setKey} = useContext(KeyContext);
    // setKey(false)

    const [datas,setDatas]=useState();
    const [isLoadingButton,setIsLoadingButton]=useState(false);
    const [searchValues,setSearchValues]=useState({
        option : "latest",
        search : "",
        isPublic: true,
        keyword:"",
        page:0,
    })
    const options = [
        {  label: "최신순", value: "latest" },
        {  label: "추억순", value: "mostPosted" },
        {  label: "공감순", value: "mostLiked" },
        {  label: "뱃지순", value: "mostBadge" },
      ]

    const onLoadingClick = () =>{
        
        fetch(`https://backend-b4qi.onrender.com/api/groups?page=${searchValues.page}&pageSize=${12}&sortBy=${searchValues.option}${ searchValues.keyword ? "&keyword="+searchValues.keyword: "" }&isPublic=${searchValues.isPublic}`, {
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
                        setMiddleGroups1((prevGroups)=>{
                            return [...prevGroups,group];

                        }
                            
                        )
                        console.log(middleGroups1)
                    }else if(data?.indexOf(group)%4===1){
                        setMiddleGroups2(
                            (prevGroups)=>{
                                return [...prevGroups,group];
    
                            }
                        )
                        console.log(middleGroups2)
                    }else if(data?.indexOf(group)%4===2){
                        setMiddleGroups3(
                            (prevGroups)=>{
                                return [...prevGroups,group];
    
                            }
                        )
                        console.log(middleGroups3)
                    }else if(data?.indexOf(group)%4===3){
                        setMiddleGroups4(
                            (prevGroups)=>{
                                return [...prevGroups,group];
    
                            }
                        )
                        console.log(middleGroups4)
                    }
                })
                if(data.length%12!=0){
                    setIsLoadingButton(false)
                    setSearchValues({
                        ...searchValues,
                        "page" : 0,
                    })
                    return; // 마지막 로딩에서 그룹 로딩이 꽉안찼을 경우
                }
                setSearchValues({
                    ...searchValues,
                    "page" : searchValues?.page + 1,
                }) 
            }else{
                setIsLoadingButton(false)
                setSearchValues({
                    ...searchValues,
                    "page" : 0,
                }) //로딩된 데이터가 없는 경우
            }
            
        })
    }
    const handleload = async () => {
        console.log("핸들로드 하기 직전 option")
        console.log(searchValues.option);
        fetch(`https://backend-b4qi.onrender.com/api/groups?page=${0}&pageSize=${12}&sortBy=${searchValues.option}${ searchValues.keyword ? "&keyword="+searchValues.keyword: "" }&isPublic=${searchValues.isPublic}`, {
            method: "GET",
        }
        ).then((response) => {
            console.log("핸들로드 한 직후 option")
            console.log(searchValues.option);
              if (response.ok === true) {
                console.log("원본")
                console.log(response)
              return response.json();
              }
              throw new Error("에러 발생!");
        }).catch((err)=>{
            console.log(err)
            alert(err);
        }).then((data)=> {
            console.log("받은 데이터");
            console.log(data);
            
            if(data[0]){
                
                data?.map((group)=>{
                    console.log("map 속")
                    console.log(group)
                    if(data.indexOf(group)%4===0){ // 배열이 불려온 순서(인덱스)에 따라 순서배치
                        setMiddleGroups1((prevGroups)=>{
                            return [...prevGroups,group];

                        }
                            
                        )
                        console.log(middleGroups1)
                    }else if(data?.indexOf(group)%4===1){
                        setMiddleGroups2(
                            (prevGroups)=>{
                                return [...prevGroups,group];
    
                            }
                        )
                        console.log(middleGroups2)
                    }else if(data?.indexOf(group)%4===2){
                        setMiddleGroups3(
                            (prevGroups)=>{
                                return [...prevGroups,group];
    
                            }
                        )
                        console.log(middleGroups3)
                    }else if(data?.indexOf(group)%4===3){
                        setMiddleGroups4(
                            (prevGroups)=>{
                                return [...prevGroups,group];
    
                            }
                        )
                        
                    }
                })
                setIsLoadingButton(true);
                setSearchValues({
                    ...searchValues,
                    "page" : 1,
                })
                if(data.length%12!=0){
                    setIsLoadingButton(false)
                    setSearchValues({
                        ...searchValues,
                        "page" : 0,
                    })
                    return; // 마지막 로딩에서 그룹 로딩이 꽉안찼을 경우
                }
            }else{
                setIsLoadingButton(false)
            }
            
        })
    }

    const [middleGroups1,setMiddleGroups1]=useState([]);
    const [middleGroups2,setMiddleGroups2]=useState([]);
    const [middleGroups3,setMiddleGroups3]=useState([]);
    const [middleGroups4,setMiddleGroups4]=useState([]);
    if(middleGroups1[0] == false){
        console.log("홈시작")
    }


    
        
    
    
    useEffect(()=>{
        setSearchValues({
            ...searchValues,
            "page":0,
        })
        setMiddleGroups1([]);
        setMiddleGroups2([]);
        setMiddleGroups3([]);
        setMiddleGroups4([]);
        
        
        handleload();
        console.log(searchValues.isPublic);
        
        
        
    },[searchValues.option,searchValues.keyword,searchValues.isPublic]);
    
   
        return (
            
            <CenterOutter>
                <HeadSearch options={options} searchValues={searchValues} setSearchValues={setSearchValues} verifyValue={middleGroups1[0]}/>
                {   middleGroups1[0] ?
                    <Groups searchValues={searchValues} middleGroups1={middleGroups1} middleGroups2={middleGroups2} middleGroups3={middleGroups3} middleGroups4={middleGroups4}/> 
                    :
                    <NoContentOutter>
                        <NoContentImg src={noContentImg}/>
                        <NoContentLarge>
                            등록된 {searchValues.isPublic?"공개":"비공개"} 그룹이 없습니다.
                        </NoContentLarge>
                        <NoContentSmall>
                            가장 먼저 그룹을 만들어 보세요!
                        </NoContentSmall>
                            <GroupCreate to={`/createGroup`}>
                                그룹 만들기
                            </GroupCreate>
                    </NoContentOutter>
                }
                <ListLoading isLoadingButton={isLoadingButton} onLoadingClick={onLoadingClick}/>
            </CenterOutter>
        )
    
    
    
    

        
    
    

        
    
}

export default Home;