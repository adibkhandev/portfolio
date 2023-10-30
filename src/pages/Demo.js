import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
const Demo=()=> {
  function circlePath(cx, cy, r){
    return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,1 '+(r*2)+',0 a '+r+','+r+' 0 1,1 -'+(r*2)+',0';
}
    return (
        <>
        <svg className='spinner' viewBox="0 0 1000 1000">
          <path fill='transparent' id="curve" d={circlePath(100,100,60)} />
          <text width="500">
            <textPath alignment-baseline="top" xlinkHref="#curve">
              Dangerous Curves Ahead Leesgoooooooooyodaksd who
            </textPath>
          </text>
        </svg>
        </>
    )
}

export default Demo
