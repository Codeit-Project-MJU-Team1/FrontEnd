import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
// Import Swiper styles
import 'swiper/swiper.min.css'


const Badge=styled.div`
  display:flex;
  justify-content:center;
  height: 52px;
  padding: 16px 30px 16px 30px;
  gap: 10px;
  border-radius: 50px;
  background-color:#F4F4F4;

`

function BadgeSlide({badges}) {
  const mockBadges=["postLike_10000","createGroup_1year","createGroup_1year","createGroup_1year"];
  const [badgesNum,setBadgesNum]=useState(badges.length)
  const [totalLength,setTotalLength]=useState(0);

  if (badgesNum>3){
    setBadgesNum(3);
  }
  useEffect(()=>{
    badges?.map((slideContent)=>{
      if(slideContent == "postStreak_7"){
        setTotalLength((current)=> current+300)
      }else if(slideContent =="groupLike_10000"){
        setTotalLength((current)=> current+300)
      }else if(slideContent =="postLike_10000"){
        setTotalLength((current)=> current+300)
      }else if(slideContent =="postCreate_20"){
        setTotalLength((current)=> current+250)
      }else if(slideContent =="createGroup_1Year"){
        setTotalLength((current)=> current+240)
      }
    }

    )
    console.log("뱃지영역 길이")
    console.log(totalLength);
    
  },[badges])
  
  return (
    <>
   
    <Swiper
      slidesPerView={badgesNum}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{width:`${totalLength}px`,gap:"10px",display:"flex",justifyContent:"start"}}
    >
        {
        badges.map((slideContent) => {
        return( 
          <>
          { slideContent == "postStreak_7"  &&
            <SwiperSlide style={{width:"300px",display:"flex",justifyContent:"center"}} >
            <Badge style={{width:"280px"}} >{"👾  7일 연속 추억 등록"}</Badge>
            </SwiperSlide>
          }
          { slideContent =="groupLike_10000"  &&
            <SwiperSlide style={{width:"300px",display:"flex",justifyContent:"center"}} >
            <Badge style={{width:"280px"}} >{"🌼  그룹 공감 1만 개 이상 받기"}</Badge>
            </SwiperSlide>
          }
          { slideContent =="postLike_10000"  &&
            <SwiperSlide style={{width:"300px",display:"flex",justifyContent:"center"}} >
            <Badge style={{width:"280px"}}>{"💖  게시글 공감 1만 개 이상 받기"}</Badge>
            </SwiperSlide>
          }
          { slideContent =="postCreate_20"  &&
            <SwiperSlide style={{width:"250px",display:"flex",justifyContent:"center"}} >
            <Badge style={{width:"230px"}} >{"👋  추억 20개 이상 등록"}</Badge>
            </SwiperSlide>
          }
          { slideContent =="createGroup_1Year"  &&
            <SwiperSlide style={{width:"240px",display:"flex",justifyContent:"center"}} >
              <Badge style={{width:"220px"}} >{"🌕  그룹 생성 후 1년 달성"}</Badge>
            </SwiperSlide>
          }
           </>
          
        )})  
        }  
        </Swiper>
      
      </>
    )
      
      
  
}
export default BadgeSlide;