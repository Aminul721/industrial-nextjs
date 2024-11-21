import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import RightArrow from '../../../../public/icons/rightArrow'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Title from '@/components/ui/title'
import SectionTitle from '@/components/ui/sectionTitle'
const ContactForm = ({ isImageShow }) => {
    return (
        <section className='pt-10'>
            {
                isImageShow &&
                <SectionTitle
                    section_name={"Inquiry"}
                    section_title={"Have a Project in your mind?"}
                    section_title_class={"max-w-[1000px] lg:mb-8 mb-5"}
                    section_description={"Write us directly"}
                />
            }
            <div className='container'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    {
                        isImageShow ?
                            <Image src={'/images/blog/blog-single-image.jpg'} width={638} height={355} alt='contact-form' className='w-full h-auto' />
                            :
                            <Title size={"8.5xl"} className={"max-w-lg"}>Have a Project in your mind?</Title>
                    }
                    <form>
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]" placeholder={"Your Name"} type={"text"} />
                        <div className='flex sm:flex-row flex-col gap-x-5'>
                            <Input className="rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]" placeholder={"Phone Number"} type={"number"} />
                            <Input className="rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]" placeholder={"Your Email"} type={"email"} />
                        </div>
                        <Textarea placeholder={'Type your massage'} className={"rounded-none py-[14px] border-muted border-2 text-lg min-h-[223px] mb-[13px]"} />
                        <div className='flex justify-end'>
                            <Button variant="outline" size="lg" type="submit">Send massage <RightArrow height={"22"} width={"35"} /></Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm