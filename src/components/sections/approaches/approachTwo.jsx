import React from 'react'
import Image from 'next/image'
import Icon1 from '../../../../public/icons/approach/icon1'
import Icon2 from '../../../../public/icons/approach/icon2'
import Icon3 from '../../../../public/icons/approach/icon3'
import FunFacte from '@/components/sections/funFacte'
import { funFacteData } from '@/lib/fackData/funFacteData'
import SectionTitle from '@/components/ui/sectionTitle'

const ApproachTwo = () => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"Strategy"}
                section_title={"Our Approach"}
                section_title_class={"lg:mb-8 mb-5"}
                section_description={"Innovation, Quality, and Precision in Every Step"}
                btn_link={"/about-us"}
                btn_name={"See How we work"}
                btn_class={"after:bg-secondary hover:border-secondary"}
            />
       
            <div className='2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>
                <div className='container'>
                    <div className='grid lg:grid-cols-[446px_1fr] grid-cols-1 lg:gap-[90px] gap-16 items-start'>
                        <div className='relative lg:max-w-[446px] md:max-w-[550px] max-w-[446px] overflow-hidden sm:overflow-visible'>
                            <span className='bg-secondary w-full h-full absolute -right-7.5 -top-7.5 z-[-1] '></span>
                            <Image src={'/images/approch-2.png'} width={446} height={564} alt='img' />
                        </div>
                        <div>
                            <ul className='flex gap-[70px] xl:pb-15 lg:pb-10 pb-6'>
                                <li className={'text-secondary-foreground'}><Icon1 /></li>
                                <li className={'text-secondary-foreground'}><Icon2 /></li>
                                <li className={'text-secondary-foreground'}><Icon3 /></li>
                            </ul>
                            <p className='xl:text-[28px] lg:text-2xl text-xl text-muted-foreground !leading-normal'>We prioritize close partnerships and deliver tailored solutions that exceed expectations, driving better success through continuous improvement and forward-thinking strategies.</p>
                            <p className='text-lg mt-10'>Our philosophy is simple yet powerful: by working closely wit clients as trusted partners, understanding their unique challenges, delivering innovative solutions, we  achieve remarkable outcomes together. We continuously strive for excellence, refining our processes, enhancing our skills, and staying ahead of the curve to ensure that we results that drive business growth and improve efficiency.</p>
                            <FunFacte data={funFacteData.slice(0, 3)} color={'text-secondary-foreground'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApproachTwo