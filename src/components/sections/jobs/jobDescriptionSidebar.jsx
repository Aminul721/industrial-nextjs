import React from 'react'
import Title from '../../ui/title'
import Link from 'next/link'
import RightArrow from '../../../../public/icons/rightArrow'
import { Button } from '@/components/ui/button'

const JobDescriptionSidebar = () => {
    return (
        <div className='bg-primary py-12.5 sm:px-9 px-5 mt-10 lg:mt-0 sticky top-10 '>
            <Title size={"4xl"} className={"mb-11 text-cream-foreground font-semibold"} >Job Overview</Title>
            <ul className='lg:mb-16 mb-10 flex flex-col gap-y-[34px]'>
                <li>
                    <strong className='text-cream-foreground block'>Employment type:</strong>
                    <span className='text-cream-foreground block'>Full time</span>
                </li>
                <li >
                    <strong className='text-cream-foreground block'>Location:</strong>
                    <span className='text-cream-foreground block'>USA,California</span>
                </li>
                <li >
                    <strong className='text-cream-foreground block'>Experience:</strong>
                    <span className='text-cream-foreground block'>5+ years</span>
                </li>
                <li >
                    <strong className='text-cream-foreground block'>Qualifications:</strong>
                    <span className='text-cream-foreground block'>MCA</span>
                </li>
                <li >
                    <strong className='text-cream-foreground block'>Salary Range:</strong>
                    <span className='text-cream-foreground block'>$45k -$60k / year</span>
                </li>
                <li >
                    <strong className='text-cream-foreground block'>Date posted:</strong>
                    <span className='text-cream-foreground block'>28th  Feb, 2024</span>
                </li>
                <li >
                    <strong className='text-cream-foreground block'>Expiration date:</strong>
                    <span className='text-cream-foreground block'>28th  Apr, 2025</span>
                </li>
            </ul>
            <Button variant="outline" size="lg" className="border-accent after:bg-accent text-cream-foreground hover:text-primary-foreground z-[1] after:right-0 after:w-full after:h-0 after:hover:h-full"> Download Brochures <span className='rotate-90'><RightArrow height={"25"} width={"22"} /></span></Button>
        </div>
    )
}

export default JobDescriptionSidebar