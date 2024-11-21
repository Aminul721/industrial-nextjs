import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import RightArrow from '../../../public/icons/rightArrow'
import Title from '../ui/title'
import { cn } from '@/lib/utils'

const NewsLetter = ({className}) => {
    return (
        <section className={cn('container-fluid xl:pt-[90px] lg:pt-16 pt-12', className)}>
            <div className='bg-cover bg-no-repeat bg-[url("/images/feedback.jpg")] lg:py-[180px] py-36 relative z-[1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.60)] after:z-[-1]' >
                <div className='container flex md:flex-row flex-col justify-between md:items-end items-start gap-10'>
                    <Title size={"7.5xl"} className={"text-cream-foreground max-w-[593px]"}>Have a project in mind?</Title>
                    <Link href={"/contact"}>
                        <Button className="after:bg-background border-background text-muted-foreground font-bold text-2xl hover:text-cream-foreground"> Let’s Talk <RightArrow /> </Button>
                    </Link >
                </div>
            </div>
        </section>
    )
}

export default NewsLetter