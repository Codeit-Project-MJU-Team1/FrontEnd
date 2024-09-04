import React, { useRef, useState } from 'react';
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
  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    badges.map((e) => e)
  );

  

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
        slides.map((slideContent) => {
        return( 
          <SwiperSlide style={{flexGrow:0,}}>
          { slideContent == "postStreak_7"  &&
            <Badge>{"👾  7일 연속 추억 등록"}</Badge>
          }
          { slideContent =="groupLike_10000"  &&
            <Badge>{"🌼  그룹 공감 1만 개 이상 받기"}</Badge>
          }
          { slideContent =="postLike_10000"  &&
            <Badge>{"💖  게시글 공감 1만 개 이상 받기"}</Badge>
          }
          { slideContent =="postCreate_20"  &&
            <Badge>{"👋  추억 20개 이상 등록"}</Badge>
          }
          { slideContent =="createGroup_1year"  &&
            <Badge>{"🌕  그룹 생성 후 1년 달성"}</Badge>
          }
           
          </SwiperSlide>
        )})  
        }  
        </Swiper>
    )
      
      
  
}
export default BadgeSlide;