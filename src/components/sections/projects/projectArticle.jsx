import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import RightArrow from '../../../../public/icons/rightArrow'
import Paragraph from './paragraph'
import ProjectSingleSliderOne from './projectSingleSliderOne'
import ProjectSingleSliderTwo from './projectSingleSliderTwo'

const ProjectArticle = () => {
    return (
        <section>
            <Image src={'/images/projects/project-2.1.png'} blurDataURL={staticBluarDataUrl} placeholder='blur' width={1903} height={860} alt="img" />
            <div className='container 2xl:mt-[156px] lg:mt-20 md:mt-16 mt-10'>
                <div className='grid xl:grid-cols-[65%_auto] lg:grid-cols-[50%_auto] gap-[38px]'>
                    <div className='relative after:absolute lg:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-muted lg:ml-12.5 ml-5'>
                        <h1 className='[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-[1.10] text-muted-foreground'>Efficient Manufactur Overhaul</h1>
                        <span className='inline-block w-[300px] h-[1px] bg-primary'></span>
                        <Title size={"4xl"} className={"font-medium text-foreground mt-2.5"}>The design of this apartment facing Ipanema beach, in Rio de Janeiro, was designed for a couple with two young children.</Title>
                    </div>
                    <div className=' bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[410px]'>
                        <Title size={"4xl"} className={"text-cream-foreground mb-0"} >Pipeline Safety Enhancement</Title>
                        <ul className='pb-7.5 lg:pt-[75px] pt-10 flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 lg:gap-y-[52px] gap-y-7'>
                            <li>
                                <strong className='text-cream-foreground block text-2xl mb-1.5'>Clients:</strong>
                                <span className='text-cream-foreground block'>Sogeprom</span>
                            </li>
                            <li>
                                <strong className='text-cream-foreground block text-2xl mb-1.5'>Area:</strong>
                                <span className='text-cream-foreground block'>891 m²</span>
                            </li>
                            <li>
                                <strong className='text-cream-foreground block text-2xl mb-1.5'>Project year:</strong>
                                <span className='text-cream-foreground block'>Sogeprom</span>
                            </li>
                            <li>
                                <strong className='text-cream-foreground block text-2xl mb-1.5'>Project type:</strong>
                                <span className='text-cream-foreground block'>Sogeprom</span>
                            </li>
                            <li>
                                <strong className='text-cream-foreground block text-2xl mb-1.5'>Location:</strong>
                                <span className='text-cream-foreground block'>Sogeprom</span>
                            </li>
                            <li>
                                <strong className='text-cream-foreground block text-2xl mb-1.5'>Team:</strong>
                                <span className='text-cream-foreground block'>Russell Otten, Gabriel Ranieri, Raissa Furlan, Maria Pereira</span>
                            </li>
                        </ul>
                        <Button variant="outline" size="lg" className="border-accent after:bg-accent text-cream-foreground hover:text-primary-foreground z-[1] after:right-0 after:w-full after:h-0 after:hover:h-full">Technical Sheet <span className='rotate-90'><RightArrow height={"25"} width={"22"} /></span></Button>
                    </div>
                </div>
            </div>
            <div className='container-fluid 2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>
                <div className='flex md:flex-row flex-col gap-8'>
                    <Image src={'/images/projects/project-single-image-1.png'} blurDataURL={staticBluarDataUrl} placeholder='blur' width={585} height={792} alt='img' />
                    <Image src={'/images/projects/project-single-image-2.png'} blurDataURL={staticBluarDataUrl} placeholder='blur' width={1201} height={792} alt='img' />
                </div>
            </div>
            <Paragraph />
            <ProjectSingleSliderOne />
            <Paragraph />
            <ProjectSingleSliderTwo />
            <Paragraph />
        </section>
    )
}

export default ProjectArticle