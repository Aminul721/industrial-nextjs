import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SocialMediaList from '@/components/ui/socalMediaList'
import Title from '@/components/ui/title'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import RightArrow from '../../../../public/icons/rightArrow'
import SectionTitle from '@/components/ui/sectionTitle'

const TeamDescription = () => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"Engineer"}
                section_title={"Russle Otten"}
                section_title_class={"max-w-[500px]"}
                section_description={"Cheif Engineer"}
            />

            <div className='container'>
                <div className='grid xl:grid-cols-[auto_538px] md:grid-cols-2 grid-cols-1 2xl:gap-[132px] xl:gap-16 lg:gap-10 gap-5 items-start'>
                    <div>
                        <div>
                            <Title size={"4xl"} className={"xl:mb-7.5 mb-4"}>Brief Bio:</Title>
                            <p>Russell Otten, the Interior Alchemist at industria , adds a touch of magic to spaces. With over a decade of experience, Russell blends artistic flair with a deep understanding of client aspirations.</p>
                        </div>
                        <div className='xl:pt-12.5 pt-10'>
                            <Title size={"4xl"} className={"xl:mb-7.5 mb-4"} >Expertise and Specializations:</Title>
                            <ul>
                                <li>
                                    <h5 className='font-bold text-muted-foreground'>Architectural Focus: </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>Russell specializes in residential, commercial a outdoor design.</p>
                                </li>
                                <li className='pt-7.5'>
                                    <h5 className='font-bold text-muted-foreground'>Specializations:  </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>His expertise lies in creating a timeless interiors that seamlessly blend luxury and functionality.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='xl:pt-20 pt-14'>
                            <Title size={"4xl"} className={"xl:mb-7.5 mb-4"}>Design Philosophy:</Title>
                            <ul>
                                <li>
                                    <h5 className='font-bold text-muted-foreground'>Philosophy Overview:  </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>Russell's design philosop Industria revolves around capturing the essence of each client's persionality and translating it into a space that feels uniquely theirs.</p>
                                </li>
                                <li className='pt-7.5'>
                                    <h5 className='font-bold text-muted-foreground'>Client-Centric Approach: </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>Through close collaboration, Russell ensures that a every design reflects the client's vision and exceeds expectations.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='xl:pt-20 pt-14'>
                            <Title size={"4xl"} className={"xl:mb-7.5 mb-4"}>Education and Credentials:</Title>
                            <ul>
                                <li>
                                    <h5 className='font-bold text-muted-foreground'>Educational Background:  </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>Russell holds a Master's in Interior of the Design from Industria University of Belgium.</p>
                                </li>
                                <li className='pt-7.5'>
                                    <h5 className='font-bold text-muted-foreground'>Professional Credentials:    </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>Recognized as an the industry leader, Russell is a member of the National Interior Design for Association (NIDA) and has received accolades for his innovative designs.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='xl:pt-20 pt-14'>
                            <Title size={"4xl"} className={"xl:mb-7.5 mb-4"}>Awards and Recognition:</Title>
                            <ul>
                                <li>
                                    <h5 className='font-bold text-muted-foreground'>Achievements:  </h5>
                                    <p className='mt-2.5 xl:ml-[113px] md:ml-7 ml-4'>Russell Otten's work at Industria has been feeatured in Design Excellence Magazine, earning him the Interior Alchemist title.</p>
                                </li>

                            </ul>
                        </div>
                        <div className='xl:pt-20 pt-14'>
                            <Title size={"4xl"} className={"xl:mb-7.5 mb-4"}>Contact information:</Title>
                            <ul>
                                <li className='flex items-center mb-3'>
                                    <h5 className='font-bold text-muted-foreground min-w-28'>Email:  </h5>
                                    <Link href={"mailto:russell@industria .com"} className='hover-underline' ><span>russell@industria .com</span></Link>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <h5 className='font-bold text-muted-foreground min-w-28'>Phone:  </h5>
                                    <Link href={"tel:555123-4567"} className='hover-underline' > <span>(555) 123-4567</span> </Link>
                                </li>
                                <li className='flex items-center'>
                                    <h5 className='font-bold text-muted-foreground min-w-28'>Social:    </h5>
                                    <div className=''> <SocialMediaList /> </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='sticky top-16'>
                        <Image src={'/images/team/team-1.png'} width={538} height={660} blurDataURL={staticBluarDataUrl} placeholder='blur' alt='Russell Otten' className='w-full' />
                        <Button asChild variant="outline" size="lg" className="mt-11">
                            <Link href={""}>Connect to Linkedin <RightArrow width={"53"} height={"22"} /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamDescription