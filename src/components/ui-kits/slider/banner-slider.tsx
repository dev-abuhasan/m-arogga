'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const BannerSlider = () => {
    const arrayLength = 6;
    
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                {Array(arrayLength).fill('')?.map((d, i) =>
                    <SwiperSlide key={i}>
                        <Image src={`https://cdn1.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJvcHRpb25cL2F0dGFjaGVkRmlsZXNXZWItXC92MjAzaGgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNDA1LCJoZWlnaHQiOjQ1MCwiZml0Ijoib3V0c2lkZSJ9fX0=`} alt="" width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                    </SwiperSlide>
                )}
            </Swiper >
        </>
    );
};

export default BannerSlider;