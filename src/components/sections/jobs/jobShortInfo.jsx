import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import React from 'react'

const JobShortInfo = () => {
    return (
        <div className='container-fluid'>
            <div className='bg-accent pt-[94px] pb-[130px]'>
                <div className='container'>
                    <Title size={"8.5xl"} className={"max-w-[768px]"}>Mechanical Engineer</Title>
                    <div className='flex md:flex-row flex-col justify-between gap-6 pt-11'>
                        <div className='flex sm:flex-row flex-col justify-between sm:items-center gap-6 lg:basis-1/2 basis-[65%]'>
                            <div>
                                <strong className='text-muted-foreground'>USA,California</strong>
                                <p className='text-muted-foreground'> <span>Apply before:</span> <span className='font-bold whitespace-nowrap'> 28 Feb 2025</span> </p>
                            </div>
                            <div>
                                <strong className='text-muted-foreground'>Expert</strong>
                                <p className='text-muted-foreground flex gap-2'> <span>$45k - $60k </span>/ <span className='font-bold'>year</span></p>
                            </div>
                        </div>
                        <div>
                            <Button size="lg" className="z-[1] lg:px-7.5 px-6">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobShortInfo