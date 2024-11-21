"use client"
import Link from 'next/link'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button';
import RightArrow from '../../../../public/icons/rightArrow';
import { heroTwoData } from '@/lib/fackData/heroTwoData';


const HeroTwo = () => {
  const swiperRef = useRef()

  const handleSlideChange = (swiper) => {
    const animate_fill = document.querySelectorAll(".animate-bg")

    animate_fill.forEach((item) => item.classList.remove("animate-active"))

    animate_fill.forEach((item, index) => {
      if (index === swiper.activeIndex) {
        item.classList.add("animate-active")
      }
    })

  };


  return (
    <section className='relative banner-two'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
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
          heroTwoData.map(({ id, banner_img, heading, }) => {
            return (
              <SwiperSlide key={id} className='relative ' >
                <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${banner_img.src})` }}>
                  <div className='container-fluid'>
                    <div className='xl:pt-[170px] pt-[110px] xl:pb-[220px] pb-[180px] 2xl:pl-[130px] xl:pl-20 lg:pl-10'>
                      <div className='animate-bg'>
                        <h1 className='[font-size:_clamp(3.125rem,2.4038rem+3.2051vw,6.25rem)] leading-[114%] font-extrabold text-muted-foreground max-w-[1040px] transition-all duration-700 translate-y-20 opacity-0 [.animate-active_&]:opacity-100 [.animate-active_&]:translate-y-0'>{heading}</h1>
                        <Button asChild className="lg:mt-[66px] mt-10 after:bg-secondary border-secondary hover:text-secondary-foreground">
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
          {/* ------- Next and prev arrow */}
          <div className='flex md:w-[180px] w-25 lg:h-25 md:h-20 h-16 '>
            <button onClick={() => swiperRef.current?.slidePrev()} className={cn(`w-full h-full bg-background text-primary-foreground flex justify-center items-center rotate-180`)}> <RightArrow width={"35"} height={"22"} /> </button>
            <button onClick={() => swiperRef.current?.slideNext()} className={cn(`w-full h-full bg-secondary text-cream-foreground flex justify-center items-center  `)}> <RightArrow width={"35"} height={"22"} /> </button>
          </div>
          {/* ------- Next and prev arrow */}
        </div>

      </Swiper>

    </section>
  )
}

export default HeroTwo