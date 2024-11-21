import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/ui/title'
import RightArrow from '../../../../public/icons/rightArrow'
import { Button } from '@/components/ui/button'
import VideoPopup from '@/components/ui/videoPopup'
import SlideLeft from '@/lib/animations/slideLeft'
import SectionTitle from '@/components/ui/sectionTitle'

const WorkProcessVideoTwo = () => {
    return (
        <section className='2xl:mx-12.5 lg:mx-8 md:mx-4 mx-2 pt-10'>
            <SectionTitle
                section_name={"Video"}
                section_title={"Visualizing Our Work Process"}
                section_title_class={"max-w-[1000px]"}
                section_description={"Praise, Appreciation, and Design Excellence"}
            />
            <div className='2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>
                <div className={` relative after:contents-[""] after:absolute after:left-0 after:top-0 lg:after:w-[calc(100%-26%)] after:w-full after:z-[-1] after:h-full after:bg-popover lg:pt-[90px] pt-12.5 lg:pb-[110px]`}>
                    <div className='container flex lg:flex-row flex-col justify-between items-start gap-10 px-4 lg:px-0'>
                        <div className='2xl:max-w-[551px] lg:max-w-[500px] w-full'>
                            <Title size={"4xl"} className={"text-muted-foreground"}>Step into the dynamic world of Visual Design Odyssey</Title>
                            <p className='text-muted-foreground mt-5'>Watch our designs come to life through captivating videos that showcase our creativity, innovation, and the transformation of spaces from concept to reality.</p>
                            <ul className='mt-[35px] flex flex-col gap-4'>
                                <li className='text-secondary-foreground flex items-center gap-[27px]'><RightArrow width={"32"} height={"18"} /> <span className='text-muted-foreground text-2xl font-bold'>Initial Vision</span> </li>
                                <li className='text-secondary-foreground flex items-center gap-[27px]'><RightArrow width={"32"} height={"18"} /> <span className='text-muted-foreground text-2xl font-bold'>Collaborative Design</span> </li>
                                <li className='text-secondary-foreground flex items-center gap-[27px]'><RightArrow width={"32"} height={"18"} /> <span className='text-muted-foreground text-2xl font-bold'>Flawless Execution</span> </li>
                            </ul>
                            <Button asChild size="lg" className="border-secondary after:bg-secondary hover:text-secondary-foreground text-cream-foreground mt-[70px]">
                                <Link href={"/about-us"}> Process of Our Work <RightArrow width={"35"} height={"22"} /></Link>
                            </Button>
                        </div>
                        <div className='overflow-hidden'>
                            <SlideLeft className='relative'>
                                <Image src={"/images/workProcess/work-thumb-2.1.png"} width={764} height={470} sizes='100vw' alt='thumb-bg' className='h-full' />
                                <VideoPopup color={"text-secondary-foreground"} />
                            </SlideLeft>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WorkProcessVideoTwo