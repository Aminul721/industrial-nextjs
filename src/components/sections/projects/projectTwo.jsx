"use client"
import React, { useRef } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';


import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import RightArrow from '../../../../public/icons/rightArrow';
import { projectsDataTwo } from '@/lib/fackData/projectsDataTwo';
import SectionTitle from '@/components/ui/sectionTitle';



const ProjectTwo = () => {
    const swiperRef = useRef()
    const pagination = {
        clickable: true,
        el: ".project-pagination",
        renderBullet: function (index, className) {
            return `
                    <div class='${className}'>
                        <h2 class='text-cream-foreground leading-[120%] [font-size:_clamp(2.5rem,1.8942rem+2.6923vw,5.125rem)] font-extrabold bg-muted opacity-0 absolute translate-y-15 transition-all duration-500 [.swiper-pagination-bullet-active_&]:relative [.swiper-pagination-bullet-active_&]:opacity-100 [.swiper-pagination-bullet-active_&]:h-auto [.swiper-pagination-bullet-active_&]:translate-y-0'>${projectsDataTwo[index].project_name}</h2>
                    </div>
                    `;
        },
    };
    return (
        <section className='2xl:mx-12.5 lg:mx-8 md:mx-4 mx-2 pt-10'>
            <SectionTitle
                section_name={"Projects"}
                section_title={"Creative Showcase"}
                section_title_class={"max-w-[700px]"}
                section_description={"Where Imagination Meets Reality in Every Frame"}
                btn_link={"/project-archive"}
                btn_name={"All Projects "}
                btn_class={"after:bg-secondary hover:border-secondary"}
            />
            <div className='container-fluid relative 2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>

                <Swiper
                    slidesPerView={1}
                    loop
                    speed={2000}
                    // autoplay={{
                    //     delay: 4000,
                    // }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    pagination={pagination}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {
                        projectsDataTwo.map(({ id, area, client, project_img, duration, project_year }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div className='bg-cover bg-no-repeat pb-[70px] lg:pt-[758px] pt-[500px] max-w-[1550px] after:contents-[""] after:absolute after:bottom-0 after:right-0 after:w-full after:max-h-[376px] after:h-full after:bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.90)_100%)] after:z-[1] after:max-w-[1550px] ml-auto' style={{ backgroundImage: `url(${project_img.src})` }}>
                                        <div className='px-4 xl:px-0 flex xl:justify-end justify-center -mt-36 xl:-mt-0 2xl:gap-16 xl:gap-14 sm:gap-10 gap-4 max-w-[1166px] relative z-10 ml-auto mr-7.5'>
                                            <h6 className='flex flex-col text-2xl font-bold leading-160 text-cream-foreground whitespace-nowrap'>Clients:
                                                <span className='text-lg font-normal'>{client}</span>
                                            </h6>

                                            <h6 className='sm:flex hidden flex-col text-2xl font-bold leading-160 text-cream-foreground whitespace-nowrap'>Area:
                                                <span className='text-lg font-normal'>{area}</span>
                                            </h6>
                                            <h6 className='flex flex-col text-2xl font-bold leading-160 text-cream-foreground whitespace-nowrap'>Duration:
                                                <span className='text-lg font-normal'>{duration}</span>
                                            </h6>
                                            <h6 className='sm:flex hidden flex-col text-2xl font-bold leading-160 text-cream-foreground whitespace-nowrap '>Project year:
                                                <span className='text-lg font-normal'>{project_year}</span>
                                            </h6>
                                            <Button asChild variant='outline' className="2xl:block hidden border-background hover:border-secondary text-cream-foreground font-bold text-2xl leading-none after:bg-secondary">
                                                <Link href={"/project-archive"}>View Gallery </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='flex justify-center xl:justify-start items-center xl:items-end flex-col xl:flex-row gap-5 '>
                    <div className={`project-pagination xl:min-h-[445px] 2xl:max-w-[673px] max-w-[500px] w-full bg-muted xl:px-10 px-7 xl:py-15 py-10 relative z-10 xl:mt-[-271px] mt-[-100px] overflow-hidden`}> </div>
                    <div className='flex items-end sm:gap-5 gap-2'>
                        <div onClick={() => swiperRef.current?.slidePrev()}>
                            <Button className={"rotate-180 h-[75px] w-[75px] text-secondary-foreground after:bg-popover border-popover hover:text-cream-foreground hover:border-secondary hover:bg-secondary lg:px-0 px-0 lg:py-0 py-0"}><RightArrow width={"35"} height={"22"} /></Button>
                        </div>
                        <div onClick={() => swiperRef.current?.slidePrev()}>
                            <Button className={cn(`h-[75px] border-secondary hover:text-secondary-foreground hover:border-secondary sm:px-10 px-3 after:bg-secondary`)}>Next Project <RightArrow width={"35"} height={"22"} /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectTwo