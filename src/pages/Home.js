import styled from "styled-components";
import HeadSearch from "../components/headSearch.js";
import Groups from "../components/groups.js";
import ListLoading from "../components/listLoading.js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GroupCreateContext } from "../components/contexts/groupCreateContext.js";

const CenterOutter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`


function Home(){
    //그룹 만들기 버튼 on/off
    const { setIsCreateButton }=useContext(GroupCreateContext);
    setIsCreateButton(true);


    const [datas,setDatas]=useState();
    const [searchValues,setSearchValues]=useState({
        option : "latest",
        search : "",
        isPublic: true,
        keyword:"",
    })
    const onLoading = () =>{

    }
    const onSearch =()=> {

    }


    const [middleGroups1,setMiddleGroups1]=useState([]);
    const [middleGroups2,setMiddleGroups2]=useState([]);
    const [middleGroups3,setMiddleGroups3]=useState([]);
    const [middleGroups4,setMiddleGroups4]=useState([]);
    if(middleGroups1[0] == false){
        console.log("홈시작")
    }
    useEffect(()=>{
        
        const handleload = async () => {
            setMiddleGroups1([]);
            setMiddleGroups2([]);
            setMiddleGroups3([]);
            setMiddleGroups4([]);
            console.log("공개여부");
            console.log(searchValues.isPublic);
            console.log("공개여부 이후");

            fetch(`https://backend-b4qi.onrender.com/api/groups?page=${0}&pageSize=${12}&sortBy=${encodeURIComponent(searchValues.option)}${ searchValues.keyword ? "&keyword="+encodeURIComponent(searchValues.keyword): "" }&isPublic=${searchValues.isPublic}`, {
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
                
                if(data){
                    
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
                }
                
            })
        }
        handleload();
        console.log(searchValues.isPublic);
        
        
        
    },[searchValues.option,searchValues.isPublic,searchValues.keyword]);
    
   
        return (
            
            <CenterOutter>
                <HeadSearch searchValues={searchValues} setSearchValues={setSearchValues} verifyValue={middleGroups1[0]}/>
                {   middleGroups1[0] &&
                    <Groups searchValues={searchValues} middleGroups1={middleGroups1} middleGroups2={middleGroups2} middleGroups3={middleGroups3} middleGroups4={middleGroups4}/> 
                }
                {
                    middleGroups1[0] ?
                    <></> : <div></div>
                }
                <ListLoading/>
            </CenterOutter>
        )
    
    
    
    

        
    
    

        
    
}

export default Home;