import React from 'react'
import Image from 'next/image'
import SlideLeft from '@/lib/animations/slideLeft'
import Title from '../ui/title'
import ProgressBar from '../ui/progressBar'
import SectionTitle from '../ui/sectionTitle'


const skillList = [
    {
        id: 1,
        skill_name: "Process Optimization",
        achive: 50
    },
    {
        id: 2,
        skill_name: "System Integration",
        achive: 85
    },
    {
        id: 3,
        skill_name: "Energy Management",
        achive: 90
    },
    {
        id: 4,
        skill_name: "Industrial Automation",
        achive: 93
    },

]
const Expertise = () => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"Expertise"}
                section_title={"Innovative Engineering"}
                section_title_class={"max-w-[1000px]"}
                section_description={"Where Innovation Meets Efficiency"}
            />
            <div className='container-fluid '>
                <div className='bg-popover'>
                    <div className='flex lg:flex-row flex-col items-center gap-15 '>
                        <div className='overflow-hidden'>
                            <SlideLeft>
                                <Image src={'/images/expertise.jpg'} width={900} height={630} alt='Expertise-bg' />
                            </SlideLeft>
                        </div>
                        <div className='px-3 2xl:py-0 py-7 max-w-[609px] w-full'>
                            <Title className={"md:mb-20 mb-14"} >Expertise Progress</Title>
                            <div className=''>
                                {
                                    skillList.map(({ id, achive, skill_name }) => {
                                        return (
                                            <ProgressBar key={id} finalWidth={achive} title={skill_name} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise