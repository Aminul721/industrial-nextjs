import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../../ui/title'
import { aboutInfo } from '@/lib/fackData/aboutInfo'
import RightArrow from '../../../../public/icons/rightArrow'
import SlideLeft from '@/lib/animations/slideLeft'
import SectionTitle from '@/components/ui/sectionTitle'

const AboutTwo = () => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"About Us"}
                section_title={"Foundations of industria"}
                section_title_class={"max-w-[1000px]"}
                section_description={"Engineering Excellence, Innovating Solutions, and Enduring Success"}
            />
            <div className='2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16 lg:px-15 px-4 lg:pb-7 py-5 relative after:absolute after:left-0 after:bottom-0 after:w-full lg:after:h-[calc(100%-98px)] after:h-full after:bg-popover after:z-[-1]'>
                <div className='container-fluid grid lg:grid-cols-2 gap-7.5'>
                    <div className='order-1 lg:order-0 overflow-hidden'>
                        <SlideLeft>
                            <Image src={'/images/about/about-2.png'} width={728} height={804} sizes='100vw' alt='about-bg' />
                        </SlideLeft>
                        <Title size={"7.5xl"} className={"text-muted-foreground mt-7.5"}>Years of Experience</Title>
                    </div>
                    <div className='lg:mt-[196px] order-0 lg:order-1'>
                        <Title size={"7.5xl"} className={"text-muted-foreground max-w-[370px]"}>Discover Our Story</Title>
                        <p className='text-lg text-muted-foreground mt-10 max-w-[650px]'>At <span className='font-extrabold'>industria</span> , we're more than just an industrial engineering firm—we're a team of passionate innovators dedicated to transforming industries and shaping the future. Learn more about who we are, our values, and our commitment to excellence.</p>
                        <div className='lg:mt-[90px] mt-14'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-12.5'>
                                {
                                    aboutInfo.map(({ icon, id, title }) => {
                                        return (
                                            <div key={id} className='lg:max-w-[157px]'>
                                                <i className='text-secondary-foreground'>{icon}</i>
                                                <p className='text-lg font-medium text-muted-foreground lg:mt-6 mt-4'>{title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <Link href={"/about-us"} className='flex items-center gap-4 text-secondary-foreground font-bold text-xl mt-14'>Learn more About Us <RightArrow width='32' height='18' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo