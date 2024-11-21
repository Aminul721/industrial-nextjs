import React from 'react'
import Link from 'next/link'
import Title from '@/components/ui/title'
import { servicesDataTwo } from '@/lib/fackData/servicesDataTwo'
import OutLineSvgText from '@/components/ui/outLineSvgText'
import SlideUp from '@/lib/animations/slideUp'
import SectionTitle from '@/components/ui/sectionTitle'

const ServiceTwo = ({ isTitleShow }) => {
  // isTitleShow props true come from home page two
  return (
    <section className={`2xl:mx-12.5 lg:mx-8 md:mx-4 mx-2 ${isTitleShow ? "pt-10" : "xl:pt-[90px] lg:pt-16 pt-12"}`}>
      {isTitleShow &&
        <SectionTitle
          section_name={"Services"}
          section_title={"Expert Solutions"}
          section_title_class={"max-w-[700px]"}
          section_description={"Crafting Solutions for Tomorrow's Industries"}
          btn_link={"/services"}
          btn_name={"View All Services"}
          btn_class={"after:bg-secondary hover:border-secondary"}
        />
      }
      <div className={`container-fluid`}>
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 2xl:gap-y-25 xl:gap-y-16 gap-y-10'>
          {
            servicesDataTwo.map(({ id, service_details, service_name }) => {
              return (
                <SlideUp key={id} delay_id={id}>
                  <OutLineSvgText className={"stroke-[rgba(0,31,63,0.20)]"}>{id}</OutLineSvgText>
                  <Title size={"4xl"} className='2xl:mt-12.5 lg:mt-7 mt-5'><Link href={"/service-details"} className='multiline-hover'>{service_name}</Link></Title>
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

export default ServiceTwo