import React from 'react'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackData/teamData'
import CardTwo from './cardTwo'
import CardThree from './cardThree'
import SectionTitle from '@/components/ui/sectionTitle'

const TeamTwo = () => {
    return (
        <section>
            <SectionTitle
                section_name={"Credits"}
                section_title={"Exploring Our Creations"}
                section_title_class={"max-w-[900px]"}
                section_description={"The Talented Team Behind 'Elegant Urban Oasis"}
            />
            <div className='container'>
                <div className='grid sm:grid-cols-2 gap-10'>
                    {
                        teamData.slice(0, 4).map(({ id, desc, img, name, position, link }) => <CardTwo key={id} desc={desc} img={img} name={name} position={position} link={link} />)
                    }
                </div>
            </div>
            {/* ----  Other Credits */}
            <div className='container pt-[120px]'>
                <div className='relative after:absolute after:xl:-left-12.5 after:-left-7 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[130%] after:bg-muted xl:ml-12.5 ml-7'>
                    <Title size={"9.5xl"}>Other <br /> Credits</Title>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[23px] mt-20'>
                    <CardThree src={'/images/projects/credit-image-1.jpg'} name={"Layero Engenharia"} position={"Engineers"} />
                    <CardThree src={'/images/projects/credit-image-2.jpg'} name={"Maddison & Walker"} position={"Interior Supplier"} />
                </div>
            </div>
        </section>
    )
}

export default TeamTwo