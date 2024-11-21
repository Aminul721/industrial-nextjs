import React from 'react'
import Link from 'next/link'
import OutLineSvgText from '@/components/ui/outLineSvgText'
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import SlideUp from '@/lib/animations/slideUp'
import { servicesDataTwo } from '@/lib/fackData/servicesDataTwo'

const AboutThree = () => {
    return (
        <section className='2xl:mx-12.5 lg:mx-8 md:mx-4 mx-2 pt-10'>
            <SectionTitle
                section_name={"Why"}
                section_title={"Why Join industria "}
                section_title_class={"max-w-[1000px] "}
                section_description={"Discover Your Future at industria : Where Innovation Meets Passion"}
            />
            <div className='container-fluid'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-[32px] xl:gap-y-14 lg:gap-y-10 gap-y-7'>
                    {
                        servicesDataTwo.map(({ id, service_details, service_name }) => {
                            return (
                                <SlideUp key={id} delay_id={id}>
                                    <OutLineSvgText className={"stroke-[rgba(0,31,63,0.20)]"}>{id}</OutLineSvgText>
                                    <Title size={"4xl"} className='2xl:mt-7.5 lg:mt-6 mt-5'><Link href={"/service-details"} className='multiline-hover'>{service_name}</Link></Title>
                                    <p>{service_details}</p>
                                </SlideUp>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutThree