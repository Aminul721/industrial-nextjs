import React from 'react'
import Title from '@/components/ui/title'
import { workProcessData } from '@/lib/fackData/workProcessData'
import OutLineSvgText from '../../ui/outLineSvgText'
import SlideUp from '@/lib/animations/slideUp'
import SectionTitle from '@/components/ui/sectionTitle'


const WorkProcess = () => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"How"}
                section_title={"Process of our work"}
                section_description={"Where Imagination Meets Expertise and Dreams Take Shape"}
                btn_name={"All Engineer"}
                btn_link={"/about-us"}
            />
            <div className='container'>
                <div className='flex justify-between flex-wrap lg:gap-x-7.5 gap-x-5 2xl:gap-y-15 xl:gap-y-12 gap-y-10 '>
                    {
                        workProcessData.map(({ id, description, title }) => {
                            return (
                                <SlideUp key={id} delay_id={id} className='lg:w-1/2 md:w-[calc(50%-20px)]'>
                                    <OutLineSvgText>{id}</OutLineSvgText>
                                    <Title size={"4xl"} className={"lg:mt-[25px] mt-2"}>{title}</Title>
                                    <p className='mt-1.5 max-w-[538px]'>{description}</p>
                                </SlideUp>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkProcess