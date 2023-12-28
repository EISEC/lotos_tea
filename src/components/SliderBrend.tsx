'use client'
import React from 'react';
// @ts-ignore
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper/modules';

const SliderBrend = ({brends}: any) => {
    return (
        <div className={'container mx-auto px-6'}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    brends.map((el: any) => {
                        return (
                            <SwiperSlide key={el.id} className={'my-8'}>
                                <Link href={`/catalog/brends/${el.slug}`}
                                      className={'relative overflow-hidden rounded-xl'}>
                                    <div
                                        className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                                        {el.img ? <img className={'h-auto w-auto'}
                                                       src={el.img}
                                                       alt={el.name}/>
                                            : <h3>{el.name}</h3>}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    );
};

export default SliderBrend;