import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import RightArrow from '../../../../public/icons/rightArrow'
import VideoPopup from '@/components/ui/videoPopup'
import SlideLeft from '@/lib/animations/slideLeft'
import SectionTitle from '@/components/ui/sectionTitle'

const WorkProcessVideo = () => {
    return (
        <section className='xl:mx-12.5 pt-10'>
            <SectionTitle
                section_name={"Video"}
                section_title={"Visualizing Our Work Process"}
                section_title_class={"max-w-[1000px]"}
                section_description={"Praise, Appreciation, and Design Excellence"}
            />
            <div className={cn(` relative after:contents-[""] after:absolute after:left-0 after:top-0 lg:after:w-[calc(100%-26%)] after:w-full after:z-[-1] after:h-full after:bg-muted lg:pt-[90px] pt-12.5 lg:pb-[110px]`)}>
                <div className='container flex lg:flex-row flex-col justify-between items-start gap-10'>
                    <div className='2xl:max-w-[551px] lg:max-w-[500px] w-full'>
                        <Title size={"4xl"} className={"text-cream-foreground max-w-[400px]"}>Behind the Scenes: Our Wok Process</Title>
                        <p className='text-cream-foreground mt-5'>Top give you an in-depth understanind of how we bring your projects to life, we've created a comprehensive video that showcases our entire work process.</p>
                        <ul className='mt-[35px] flex flex-col gap-4'>
                            <li className='text-cream-foreground flex items-center gap-[27px]'><RightArrow width={"32"} height={"18"} /> <span className='text-cream-foreground text-2xl font-bold'>Initial Vision</span> </li>
                            <li className='text-cream-foreground flex items-center gap-[27px]'><RightArrow width={"32"} height={"18"} /> <span className='text-cream-foreground text-2xl font-bold'>Collaborative Design</span> </li>
                            <li className='text-cream-foreground flex items-center gap-[27px]'><RightArrow width={"32"} height={"18"} /> <span className='text-cream-foreground text-2xl font-bold'>Flawless Execution</span> </li>
                        </ul>

                        <Button asChild variant="outline" size="lg" className="border-background text-cream-foreground mt-[70px]">
                            <Link href={"/about-us"}> Process of Our Work <RightArrow width={"35"} height={"22"} /></Link>
                        </Button>
                    </div>
                    <div className='overflow-hidden'>
                        <SlideLeft className='relative'>
                            <Image src={"/images/workProcess/work-thumb-1.1.png"} width={764} height={470} sizes='100vw' alt='thumb-bg' className='h-full' />
                            <VideoPopup color="text-primary-foreground" />
                        </SlideLeft>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcessVideo