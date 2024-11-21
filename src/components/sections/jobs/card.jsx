import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Card = ({ id, time, job_name, location, date_line, level, salary, link }) => {
    return (
        <li className='bg-accent grid lg:grid-cols-[8%_25%_20%_20%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 xl:py-8 py-4 xl:px-7.5 px-3 border border-primary'>
            <svg strokeWidth="1" className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-muted stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"><text x="0%" dominantBaseline="middle" y="70%">{id}</text></svg>
            <div className='max-w-72 w-full'>
                <strong className='text-muted-foreground'>{time}</strong>
                <h2 className='text-2xl font-bold leading-160 text-muted-foreground'>{job_name}</h2>
            </div>
            <div>
                <strong className='text-muted-foreground'>{location}</strong>
                <p className='text-muted-foreground'> <span>Apply before:</span> <span className='font-bold whitespace-nowrap'>{date_line}</span> </p>
            </div>
            <div>
                <strong className='text-muted-foreground'>{level}</strong>
                <p className='text-muted-foreground flex gap-2'> <span>{salary.range}</span>/ <span className='font-bold'>{salary.time}</span></p>
            </div>
            <Button asChild className="z-[1] lg:px-7.5 lg:py-[15px] max-h-[66px] max-w-56">
                <Link href={link}>Apply Now</Link>
            </Button>
        </li>
    )
}

export default Card