"use client"
import Link from 'next/link'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button';
import { heroOneData } from '@/lib/fackData/heroOneData';
import RightArrow from '../../../../public/icons/rightArrow';


const HeroOne = () => {
  const swiperRef = useRef()

  const handleSlideChange = (swiper) => {
    const animate_fill = document.querySelectorAll(".animate-bg")

    animate_fill.forEach((item) => item.classList.remove("animate-fill"))
    
    animate_fill.forEach((item, index) => {
      if (index === swiper.activeIndex) {
        item.classList.add("animate-fill")
      }
    })
  };


  const pagination = {
    clickable: true,
    el: ".hero-pagination",
    renderBullet: function (index, className) {
      return `
      <span class='${className} flex items-center'>
         <span class='inline-block mr-2 lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary [.swiper-pagination-bullet-active_&]:text-primary-foreground'>0${index + 1}</span>
         <span class='md:text-lg text-sm font-semibold text-cream-foreground hidden sm:block [.swiper-pagination-bullet-active_&]:block sm:max-w-56 max-w-48'> ${heroOneData[index].title}</span>
      </span>`;
    },
  };

  return (
    <section className='relative banner-one'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        speed={1500}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >

        {
          heroOneData.map(({ id, banner_img, heading, }) => {
            return (
              <SwiperSlide key={id} className='relative ' >
                <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${banner_img.src})` }}>
                  <div className='container px-4 lg:px-0'>
                    <div className='xl:pt-[200px] pt-[110px] xl:pb-[250px] pb-[200px]'>
                      <div>
                        <h1 className='[font-size:_clamp(3.25rem,1.1154rem+9.4872vw,12.5rem)] leading-[100%] font-extrabold relative text-cream-foreground animate-fill animate-bg'>
                          {heading}<span className='text-primary-foreground'>.</span>
                        </h1>
                        <Button asChild className="mt-[66px]">
                          <Link href={"/project-archive"}>Explore Our Portfolio</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }

        <div className='max-w-[1835px] mx-auto flex justify-between absolute right-0 bottom-0 z-40'>
          <div className='hero-pagination bg-muted xl:px-9 sm:px-5 px-2 max-w-[800px] flex xl:gap-8 gap-5 py-4'></div>
          {/* ------- Next and prev arrow */}
          <div className='flex sm:w-[180px]  '>
            <button onClick={() => swiperRef.current?.slidePrev()} className={cn(`w-full h-full bg-background text-primary-foreground flex justify-center items-center rotate-180`)}> <RightArrow className="w-[35px] h-[22px]" /> </button>
            <button onClick={() => swiperRef.current?.slideNext()} className={cn(`w-full h-full bg-primary text-cream-foreground flex justify-center items-center  `)}> <RightArrow className="w-[35px] h-[22px]" /> </button>
          </div>
          {/* ------- Next and prev arrow */}
        </div>

      </Swiper>

    </section>
  )
}

export default HeroOne