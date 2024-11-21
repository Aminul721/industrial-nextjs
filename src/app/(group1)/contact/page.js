import Address from '@/components/sections/contact/address'
import ContactForm from '@/components/sections/contact/contactForm'
import NewsLetter from '@/components/sections/newsLetter'
import React from 'react'

const Contact = () => {
    return (
        <main>
            <Address />
            <ContactForm isImageShow={true} />
            <NewsLetter/>
        </main>
    )
}

export default Contact