import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import SocialMediaList from '@/components/ui/socalMediaList'
import RightArrow from '../../../../public/icons/rightArrow'
import SlideLeft from '@/lib/animations/slideLeft'

const CardOne = ({ img, name, position, className }) => {
    return (
        <div className={cn(`mb-16 overflow-x-clip`, className)}>
            <SlideLeft>
                <div className='relative group hover-underline'>
                    <div className='relative'>
                        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 h-0 w-0 opacity-0 flex justify-center items-center bg-[rgba(236,245,255,0.80)]'>
                            <SocialMediaList />
                        </div>
                        <Image src={img} width={"auto"} height={"auto"} alt={name} className='w-full h-full' />
                    </div>
                    <div className='bg-background  absolute left-0 bottom-[-10%] min-w-[295px] transition-all duration-500 group-hover:min-w-full'>
                        <div >
                            <span className='w-full h-[1px] bg-[#253B2F4D] block absolute top-2'></span>
                            <span className='w-full h-[1px] bg-[#253B2F4D] block absolute bottom-2'></span>
                            <span className='w-[1px] h-full bg-[#253B2F4D] block absolute left-2'></span>
                            <span className='w-[1px] h-full bg-[#253B2F4D] block absolute right-2'></span>
                        </div>
                        <Link href={"/team-single"} className='flex items-center justify-between px-[27px] pt-[9px] pb-[18px] bg-destructive'>
                            <label>
                                <span className={cn(`text-2xl font-bold leading-160 cursor-pointer text-muted-foreground`)}>{name}</span>
                                <small className={cn(`text-lg block text-muted-foreground`)}>{position}</small>
                            </label>
                            <small className='text-muted-foreground-foreground mt-2.5 flex items-center gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100'> <RightArrow width={"35"} height={"21"} /> </small>
                        </Link>
                    </div>
                </div>
            </SlideLeft>
        </div >
    )
}

export default CardOne