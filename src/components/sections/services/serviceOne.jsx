import React from 'react'
import Link from 'next/link'
import Title from '@/components/ui/title'
import { servicesDataOne } from '@/lib/fackData/servicesDataOne'
import SlideUp from '@/lib/animations/slideUp'
import Image from 'next/image'
import SectionTitle from '@/components/ui/sectionTitle'

const ServiceOne = () => {
    return (
        <section className=' pt-10'>
            <SectionTitle
                section_name={"Services"}
                section_title={"Expert Solutions"}
                section_description={"Crafting Solutions for Tomorrow's Industries"}
                btn_name={"View All Services"}
                btn_link={"/services"}
            />
            <div className='container-fluid grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 2xl:gap-y-25 xl:gap-y-16 gap-y-10'>
                {
                    servicesDataOne.map(({ icon, id, service_details, service_name }) => {
                        return (
                            <SlideUp key={id} delay_id={id}>
                                <div className='relative xl:w-[70px] w-15 xl:h-[70px] h-15'>
                                    <Image src={icon} fill sizes='20vw' alt='icon' />
                                </div>
                                <Title size={"4xl"} className={"2xl:mt-12.5 lg:mt-7 mt-5"}><Link href={"/service-details"} className='multiline-hover'>{service_name}</Link></Title>
                                <p className='text-lg mt-[5px]'>{service_details}</p>
                            </SlideUp>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ServiceOne