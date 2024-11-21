"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import { blogData } from '@/lib/fackData/blogData';
import CardOne from './cardOne';
import ProgressAndNatigation from '@/components/ui/progressAndNatigation';
import SectionTitle from '@/components/ui/sectionTitle';


const BlogOne = ({ color, isPageTitleShow }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <section className='pt-10'>
            {
                isPageTitleShow &&
                <SectionTitle
                    section_name={"Blog"}
                    section_title={"Industrial Insights & Innovations"}
                    section_title_class={"max-w-[1200px] lg:mb-8 mb-5"}
                    section_description={"Unlocking the keys to Revolutionizing Industrial Processes"}
                />
            }

            <div className='container'>
                <Swiper
                    spaceBetween={18}

                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        // 1400: {
                        //     slidesPerView: 3
                        // }
                    }}
                    pagination={pagination}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className=''
                >
                    {
                        blogData.map(({ id, thumb, date, title, tag }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <CardOne date={date} tag={tag} thumb={thumb} title={title} id={id} />
                                </SwiperSlide>
                            )
                        })
                    }
                    <ProgressAndNatigation color={color} />
                </Swiper>
            </div>
        </section>
    )
}

export default BlogOne