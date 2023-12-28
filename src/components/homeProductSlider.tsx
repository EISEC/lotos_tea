'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';

const HomeProductCards = ({dta}: any) => {
    return (
        <Swiper
            slidesPerView={1}
            autoplay={true}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            modules={[Navigation]}
            className="mySwiper"
        >

            {
                dta.slice(0, 8).map((el: any) => {
                    return (
                        <SwiperSlide key={el.id} className={'my-8 p-4'}>
                            <div
                                className="h-full w-full flex flex-col justify-center relative overflow-hidden border-2 border-emerald-600 rounded-lg max-w-xs shadow-md">
                                <div className="relative pt-3 flex items-center justify-center">
                                    <Link className={'relative w-40 h-60'} href={`/catalog/${el.slug}`}>
                                        <Image
                                            fill={true}
                                            style={{objectFit: "contain"}}
                                            src={el.img}
                                            loading="lazy"
                                            alt=""/>
                                    </Link>
                                </div>
                                <div className="relative px-6 pb-6 mt-6 flex flex-col gap-3">
                                    <span className="block opacity-75 -mb-1">{el.cat[0].name}</span>
                                    <Link href={`/catalog/${el.slug}`} className="flex justify-between flex-col gap-2">
                                        <span className="block font-semibold text-xl">{el.title}</span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    );
};

export default HomeProductCards;