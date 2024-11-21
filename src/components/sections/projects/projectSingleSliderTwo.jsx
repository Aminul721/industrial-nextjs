"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode } from "swiper/modules"
import 'swiper/css';

// import RightArrow from '@/assets/icons/rightArrow';
import { projectsDataTwo } from '@/lib/fackData/projectsDataTwo';
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl';
import RightArrow from '../../../../public/icons/rightArrow';


const ProjectSingleSliderTwo = () => {
    const swiperRef = useRef()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbSwiper, setThumbSwiper] = useState(null)
    useEffect(() => {
        setThumbSwiper(thumbsSwiper)
    }, [thumbsSwiper?.activeIndex])
    return (
        <div className='container'>
            <div className='relative'>
                <Swiper
                    slidesPerView={1}
                    loop
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    thumbs={{ swiper: thumbSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {
                        projectsDataTwo?.map(({ id, project_img }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <Image src={project_img} blurDataURL={staticBluarDataUrl} placeholder='blur' alt='img' className='w-full h-full max-h-[720px]' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between items-center gap-5'>
                    <div onClick={() => swiperRef.current?.slidePrev()}>
                        <button className='transition-all duration-500 bg-primary text-cream-foreground rotate-180 w-16 h-16 md:w-[90px] md:h-[90px] md:px-6 px-1.5 after:bg-primary border-secondary hover:border-primary hover:bg-secondary flex justify-center items-center'><RightArrow width={"35"} height={"22"} /></button>
                    </div>
                    <div onClick={() => swiperRef.current?.slideNext()}>
                        <button className='transition-all duration-500 bg-primary text-cream-foreground w-16 h-16 md:w-[90px] md:h-[90px] md:px-6 px-1.5 border-secondary hover:border-primary after:bg-primary hover:bg-secondary flex justify-center items-center'><RightArrow width={"35"} height={"22"} /></button>
                    </div>
                </div>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={27}
                speed={500}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    750: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                freeMode={true}
                watchSlidesProgress={true}
                // modules={[FreeMode, Navigation, Thumbs]}
                className="mt-[35px]"
            >
                {
                    projectsDataTwo?.map(({ id, project_img }) => {
                        return (
                            <SwiperSlide key={id}>
                                <Image src={project_img} blurDataURL={staticBluarDataUrl} placeholder='blur' alt='img' className='w-full lg:min-h-[250px] min-h-[100px] max-h-[100px] h-full ' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProjectSingleSliderTwo