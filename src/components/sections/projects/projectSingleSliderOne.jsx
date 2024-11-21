"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl';
import RightArrow from '../../../../public/icons/rightArrow';
import { projectDataThree } from '@/lib/fackData/projectsDataThree';


const ProjectSingleSliderOne = () => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <>
            <div className='project-slider-one'>
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        380: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        750: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1320: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    navigation={{
                        nextEl:".next-btn",
                        prevEl:".prev-btn"
                    }}
                    className='lg:!ml-12.5 !px-2.5 xl:!px-0'
                    pagination={pagination}
                    loop={true}
                    modules={[Pagination, Navigation]}

                >

                    {
                        projectDataThree.map(({ id, src }) => {
                            return (
                                <SwiperSlide key={id} >
                                    <Image src={src} blurDataURL={staticBluarDataUrl} placeholder='blur' alt='img' width={1000} height={700} sizes='100vw' className='clamp-height object-cover' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='container'>
                    <div className='lg:mt-[70px] mt-10'>
                        <div className='flex justify-between items-center gap-12.5'>
                            <div className='progressbar-pagination w-full h-[1px] bg-[#253b2f33] relative'></div>
                            <div className='flex items-center gap-[22px]'>
                                <button className='prev-btn text-muted-foreground rotate-180'> <RightArrow width={"35"} height={"22"} /> </button>
                                <button className='next-btn text-muted-foreground'> <RightArrow width={"35"} height={"22"} /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectSingleSliderOne