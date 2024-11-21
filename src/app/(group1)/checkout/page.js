import React from 'react'
import Link from 'next/link'
import CheckoutInfo from '@/components/sections/products/checkoutInfo'
import Title from '@/components/ui/title'

const Checkout = () => {
    return (
        <div className='py-15'>
            <div className='container'>
                <div>
                    <Title size={"8.5xl"}>Checkout</Title>
                    <ul className='mt-6 flex flex-col gap-2.5'>
                        <li className='text-muted-foreground'>Returning customer? <Link href={"#"} className='relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-primary'> <span className='text-foreground'>Click here to login</span> </Link> </li>
                        <li className='text-muted-foreground'>Have a coupon? <Link href={"#"} className='relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-primary'> <span className='text-foreground'>Click here to enter your code</span> </Link> </li>
                    </ul>
                </div>
                <CheckoutInfo />
            </div>
        </div>
    )
}

export default Checkout