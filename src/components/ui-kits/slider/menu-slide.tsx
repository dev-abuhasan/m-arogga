'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import styles from "./menu-slide.module.scss";
import Link from 'next/link';

const MenuSlide = () => {
    const arrayLength = 6;
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={false}
                breakpoints={{
                    300: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    568: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {Array(arrayLength).fill('')?.map((d, i) =>
                    <SwiperSlide key={i}>
                        <Link href={'/'} className={styles.menu_items}>
                            <Image src={`https://cdn1.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJjYXRlZ29yeVwvMTYucG5nIiwiZWRpdHMiOltdfQ==`} alt="" width={25} height={25} />
                            <span>Supplements and Vitamins</span>
                        </Link>
                    </SwiperSlide>
                )}
                {Array(Math.max(8 - arrayLength, 0)).fill('').map((d, i) => (
                    <SwiperSlide key={arrayLength + i}>
                        <div className={`${styles.menu_items} ${styles.menu_disable}`}>
                            <Image src="https://cdn1.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJjYXRlZ29yeVwvMTYucG5nIiwiZWRpdHMiOltdfQ==" alt="" width={25} height={25} />
                            <span>NotFound</span>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper >
        </>
    );
};

export default MenuSlide;