import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styleswiper.css';

// import required modules
import { Navigation } from 'swiper/modules';

function SwiperCom({imgPreview}) {


  
    return ( 
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {
            imgPreview.map((item, index) => {
                return <SwiperSlide><img key={index} src={item}></img></SwiperSlide>
            })
         }
          
        </Swiper>
      </>
     );
}

export default SwiperCom;