import React from 'react'
import { useSwiper } from 'swiper/react';
import RightArrow from '../../../public/icons/rightArrow';

const ProgressAndNatigation = () => {
    const swiper = useSwiper();
    return (
        <div className='lg:mt-[70px] mt-10'>
            <div className='flex justify-between items-center gap-12.5'>
                <div className='progressbar-pagination w-full h-[1px] bg-[#253b2f33] relative'></div>
                <div className='flex items-center gap-[22px]'>
                    <button onClick={() => swiper.slidePrev()} className='text-muted-foreground rotate-180'> <RightArrow width={"35"} height={"22"} /> </button>
                    <button onClick={() => swiper.slideNext()} className='text-muted-foreground'> <RightArrow width={"35"} height={"22"} /> </button>
                </div>
            </div>
        </div>
    )
}

export default ProgressAndNatigation