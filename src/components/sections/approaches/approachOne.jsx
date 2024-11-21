import React from 'react'
import Title from '@/components/ui/title'
import Icon1 from '../../../../public/icons/approach/icon1'
import Icon2 from '../../../../public/icons/approach/icon2'
import Icon3 from '../../../../public/icons/approach/icon3'
import FunFacte from '../funFacte'
import { funFacteData } from '@/lib/fackData/funFacteData'
const ApproachOne = () => {
    return (
        <div className='xl:pt-[90px] lg:pt-16 pt-12'>
            <div className='container-fluid'>
                <div className='grid xl:grid-cols-[530px_1fr] lg:grid-cols-[460px_1fr] md:grid-cols-[340px_1fr] grid-cols-1 2xl:gap-[169px] xl:gap-25 gap-7 items-start'>
                    <Title size={"7.5xl"} className={"sm:sticky top-11"}>Our Approach </Title>

                    <div className='max-w-[872px]'>
                        <ul className='flex gap-[70px] xl:pb-15 lg:pb-10 pb-6'>
                            <li className={'text-primary-foreground'}><Icon1 /></li>
                            <li className={'text-primary-foreground'}><Icon2 /></li>
                            <li className={'text-primary-foreground'}><Icon3 /></li>
                        </ul>
                        <p className='xl:text-[28px] lg:text-2xl text-xl text-muted-foreground !leading-normal'>We prioritize close partnerships and deliver tailored solutions that exceed expectations, driving better success through continuous improvement and forward-thinking strategies.</p>
                        <p className='text-lg mt-10'>Our philosophy is simple yet powerful: by working closely wit clients as trusted partners, understanding their unique challenges, delivering innovative solutions, we  achieve remarkable outcomes together. We continuously strive for excellence, refining our processes, enhancing our skills, and staying ahead of the curve to ensure that we results that drive business growth and improve efficiency.</p>
                        <FunFacte data={funFacteData.slice(0, 3)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproachOne