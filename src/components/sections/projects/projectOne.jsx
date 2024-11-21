"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { projectsDataOne } from '@/lib/fackData/projectsDataOne'
import RightArrow from '../../../../public/icons/rightArrow'

const ProjectOne = () => {
    const swiperRef = useRef()
    return (
        <section className='xl:ml-12.5 xl:pt-[90px] lg:pt-16 pt-12'>
            <div className='relative after:absolute after:left-0 after:top-0 after:w-full lg:after:h-[calc(100%-100px)] after:min-h-[550px] after:h-full after:bg-muted after:z-[-1]'>
                <div className=' flex xl:flex-row flex-col justify-between gap-7.5 xl:pt-25 lg:pt-16 sm:pt-14 pt-10'>
                    <div className='lg:pl-12.5 pl-4 xl:max-w-[40%]'>
                        <Title size={'8.5xl'} className={"text-cream-foreground 2xl:text-[90px] xl:text-7xl 2xl:leading-[110%] xl:leading-[110%]"}>Projects <br /> we’re Proud of</Title>
                        <p className={"text-accent-foreground text-lg font-medium 2xl:mt-10 mt-6 2xl:mb-20 mb-10 max-w-[654px]"}>Explore our portfolio of ground-breaking projects that showcase our expertise and innovation industrial engineering.</p>
                        <Button asChild variant="outline" size="lg" className="border-background text-cream-foreground">
                            <Link href={"/project-archive"}>View All Projects <RightArrow /></Link>
                        </Button>
                    </div>
                    <div className='xl:max-w-[58%] relative'>
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                540: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 2.5
                                },
                                1280: {
                                    slidesPerView: 1.5
                                },
                                1418: {
                                    slidesPerView: 2
                                },
                                1700: {
                                    slidesPerView: 2.5
                                }
                            }}
                            loop={true}
                            spaceBetween={20}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper
                            }}
                        >
                            {projectsDataOne.map(({ id, src, title, category }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className='group relative after:absolute after:left-0 after:bottom-0 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_60%,_rgba(2,0,25,0.5270483193277311)_100%)] after:w-full after:h-full'>
                                            <Image src={src} width={427} height={703} sizes='100vw' alt={`img-${id}`} className='' />
                                            <div className='absolute -bottom-full group-hover:bottom-0 left-0 z-10 lg:pl-10 pl-5 lg:pb-10 pb-5 transition-all duration-700'>
                                                <span className='text-cream-foreground text-xl font-medium'>{category}</span>
                                                <span className='block w-[74px] h-[1px] bg-background mt-4 mb-[15px]'></span>
                                                <Link href={"/project-single"} className='text-cream-foreground text-[28px] font-extrabold leading-[120%] multiline-hover'>{title}</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className='flex justify-center mt-4'>
                            <div className='flex sm:w-[180px] w-25 xl:h-25 h-15 xl:absolute xl:left-[-180px] left-4 xl:bottom-0'>
                                <button onClick={() => swiperRef.current?.slidePrev()} className={`w-full h-full bg-primary text-cream-foreground flex justify-center items-center rotate-180`}> <RightArrow className="w-[35px] h-[22px]" /> </button>
                                <button onClick={() => swiperRef.current?.slideNext()} className={`w-full h-full bg-background flex justify-center items-center`}> <RightArrow className="w-[35px] h-[22px]" /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOne