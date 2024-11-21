import Link from 'next/link'
import React from 'react'
import RightArrow from '../../../../public/icons/rightArrow'
import Title from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import { servicesDataOne } from '@/lib/fackData/servicesDataOne'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ServiceSingleSidebar = () => {
    return (
        <div className='sticky top-16'>
            <div>
                <Title size={"4xl"} className={"pb-7.5"}>All Services</Title>
                <ul>
                    {
                        servicesDataOne.map(({ id, link, service_name }) => {
                            return (
                                <li key={id} className='text-muted-foreground flex items-center gap-[27px] mb-[22px] last:mb-0'>
                                    <RightArrow width={"35"} height={"22"} />
                                    <Link href={'#'} className='text-xl font-medium multiline-hover '>{service_name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='xl:pt-[70px] lg:pt-15 pt-10'>
                <Title size={"4xl"} className={"pb-7.5"}>Search</Title>
                <Input className="rounded-none py-[14px] border-muted border-2 text-lg" placeholder={"Type & Hit Enter"} type={'text'} />
            </div>
            <div className='xl:pt-[70px] lg:pt-15 pt-10'>
                <form action="">
                    <Title size={"4xl"} className={"pb-7.5"}>Schedule a Call</Title>
                    <div className='flex flex-col gap-[15px]'>
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg" placeholder={"Your Name"} type={'text'} />
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg" placeholder={"Phone Number"} type={'number'} />
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg" placeholder={"Phone Number"} type={'date'} />
                        <Textarea placeholder={"Your massage"} className={"min-h-[187px] rounded-none py-[14px] border-muted border-2 text-lg"} />
                        <div>
                            <Button className="lg:px-7.5 px-7" type="submit">Send massage</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ServiceSingleSidebar