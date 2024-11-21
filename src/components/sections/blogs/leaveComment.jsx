import React from 'react'
import { Button } from '../../ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import RightArrow from '../../../../public/icons/rightArrow'
import Title from '@/components/ui/title'

const LeaveComment = () => {
    return (
        <div className='grid 2xl:grid-cols-[auto_25%] lg:grid-cols-[auto_32%] 2xl:gap-[143px] lg:gap-16 pb-20'>
            <div>
                <Title size={"5xl"} className={"mb-7.5 font-bold"}>Comments (32)</Title>
                <form>
                    <Textarea className="rounded-none py-[14px] border-muted border-2 text-lg min-h-[225px] mb-7.5" placeholder={"Write your comment"} />
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg" placeholder={"Your name*"} type={"text"} />
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg" placeholder={"Your Email*"} type={"email"} />
                    </div>
                    <div className='mt-7.5 flex justify-end'>
                        <Button size="lg">Submit <RightArrow /></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LeaveComment