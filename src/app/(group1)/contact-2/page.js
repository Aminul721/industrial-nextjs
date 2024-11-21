import Address from '@/components/sections/contact/address'
import ContactForm from '@/components/sections/contact/contactForm'
import React from 'react'

const Contact2 = () => {
    return (
        <main>
            <Address className={"lg:grid-cols-1"} addressClass={"lg:grid-cols-3 2xl:gap-x-7.5 gap-x-0 2sm:gap-y-9 gap-y-5 pb-7.5"} />
            <ContactForm isImageShow={false} />
        </main>
    )
}

export default Contact2