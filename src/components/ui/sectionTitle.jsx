import React from 'react'
import Link from 'next/link'
import Title from './title'
import { Button } from './button'
import RightArrow from '../../../public/icons/rightArrow'
import { cn } from '@/lib/utils'

const SectionTitle = ({className, section_name, section_title, section_title_class, section_description, section_description_class, btn_name, btn_link, btn_class }) => {
    return (
        <div className={cn('container-fluid overflow-hidden 2xl:mb-[120px] lg:mb-25 md:mb-20 mb-16', className)}>
            <Title size={"10xl"}>{section_name}</Title>
            <div className='container relative'>
                <span className='absolute left-0 top-0 w-[1px] h-full bg-muted'></span>
                <div className='xl:pl-10 lg:pl-5 sm:pl-1.5'>
                    <Title size={"9.5xl"} className={cn("max-w-[700px] xl:-mt-48 lg:-mt-[130px] md:-mt-28 -mt-[65px] mb-2.5", section_title_class)}>{section_title}</Title>
                    <span className='block w-[300px] h-[1px] bg-muted mb-[18px]'></span>
                    <div className='flex flex-wrap justify-between items-center gap-7.5'>
                        <Title size={"4xl"} className={cn('max-w-[690px] font-medium', section_description_class)}>{section_description}</Title>
                        {btn_name &&
                            <Button variant='outline' size="lg" asChild className={btn_class}>
                                <Link href={btn_link}>{btn_name}<RightArrow /> </Link>
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle