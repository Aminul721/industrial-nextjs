import React from 'react'
import CardOne from './cardOne'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/ui/sectionTitle'

const TeamOne = ({ data, className, containerTop, btn_class, btnShow }) => {
    // containerTop from team page
    // 
    return (
        <section className='pt-10'>
            <SectionTitle
                className={"2xl:mb-0 lg:mb-0 md:mb-0 mb-0"}
                section_name={"Team"}
                section_title={"Engineers of Ingenuity"}
                section_title_class={"max-w-[900px] lg:mb-8 mb-5"}
                section_description={"Crafting Innovative Solutions for a Dynamic Industry"}
                btn_link={"/team"}
                btn_name={btnShow ? "All Engineers" : ""}
                btn_class={btn_class}
            />
            <div className={cn('container lg:pt-[340px] sm:pt-20 pt-14', containerTop)}>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-7.5'>
                    {
                        data.map(({ id, img, name, position, social_link }) => <CardOne key={id} img={img} name={name} position={position} social_link={social_link} className={className} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamOne