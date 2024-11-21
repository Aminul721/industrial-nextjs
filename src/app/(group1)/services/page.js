import AboutOne from '@/components/sections/abouts/aboutOne'
import Expertise from '@/components/sections/expertise'
import Faq from '@/components/sections/faq'
import FunFacte from '@/components/sections/funFacte'
import NewsLetter from '@/components/sections/newsLetter'
import ServiceTwo from '@/components/sections/services/serviceTwo'
import SectionTitle from '@/components/ui/sectionTitle'
import { funFacteData } from '@/lib/fackData/funFacteData'
import React from 'react'

const Services = () => {
    return (
        <main>
            <section >
                <SectionTitle
                    className={"2xl:mb-0 lg:mb-0 md:mb-0 mb-0"}
                    section_name={"Services"}
                    section_title={"Expert Solutions"}
                    section_description={"Crafting Solutions for Tomorrow's Industries"}
                />
            </section>
            <ServiceTwo />
            <AboutOne />
            <div className='container xl:pt-[82px] lg:pt-16 pt-12'>
                <FunFacte data={funFacteData} />
            </div>
            <Expertise />
            <Faq />
            <NewsLetter/>
        </main>
    )
}

export default Services