"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import Rating from '@/components/ui/rating'
import ShoppingBag from '../../../../public/icons/shoppingBag'
import { cn } from '@/lib/utils'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import { addToCart } from '@/redux/addToCartSlice'

const Card = ({ thumbnail, title, price, rating, id }) => {
    const dispatch = useDispatch()
    return (
        <div className='group'>
            <div className='relative' >
                <div className='absolute z-10 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <button onClick={() => dispatch(addToCart({ id, quantity: 1, thumbnail, title, price }))} className={cn(` px-[25px] py-2.5 flex items-center gap-2.5 border-white hover:border-primary text-white border-2 whitespace-nowrap relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:z-[-1] after:bg-primary after:w-0 after:transition-all after:duration-500 hover:after:w-full transition-all duration-500`)}>Add Cart <ShoppingBag height={"24"} width={"24"} /></button>
                </div>
                <div className='relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-500 after:group-hover:w-full after:group-hover:h-full after:group-hover:opacity-100 after:h-0 after:w-0 after:opacity-0 after:flex after:justify-center after:items-center after:bg-[rgba(37,_59,_47,_0.38)] after:group-hover:blur-sm'>
                    <Image src={thumbnail} width={412} height={506} placeholder='blur' blurDataURL={staticBluarDataUrl} alt={title} className='w-full h-full max-h-[506px]' />
                </div>
            </div>
            <div className='mt-[21px] flex justify-between'>
                <div>
                    <Link href={`/product-single`} className={cn(`text-2xl font-semibold text-muted-foreground leading-160 hover-underline`)}> <span>{title}</span> </Link>
                    <p className={cn(`text-2xl text-muted-foreground`)}>${price}</p>
                </div>
                <div className='mt-2'><Rating star={rating} /></div>
            </div>
        </div>
    )
}

export default Card