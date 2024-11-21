import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '@/redux/addToCartSlice'
import { Button } from '@/components/ui/button'
import Offcanvas, { OffcanvasClose, OffcanvasContent, OffcanvasOverlay, OffcanvasTrigger } from '@/components/ui/offcanvas'
import ShoppingBag from '../../../../public/icons/shoppingBag'
import { cn } from '@/lib/utils'


const ShopCart = ({ color, bg_color, border_color }) => {
    const { products } = useSelector((state) => state.addToCart)
    const dispatch = useDispatch()

    const totalPrice = products.reduce((total, product) => total + product?.price * product?.quantity, 0);
    const productQuantity = products.reduce((total, product) => total + product?.quantity, 0)


    return (
        <Offcanvas>
            <OffcanvasTrigger>
                <div className={cn('text-primary-foreground cursor-pointer flex relative', color)}>
                    <ShoppingBag />
                    {
                        products.length ? <span className={cn('font-medium flex items-center justify-center text-cream-foreground text-sm absolute -top-3 -right-4 w-6 h-6 bg-primary rounded-full', bg_color)}>{productQuantity}</span> : ""
                    }
                </div>
            </OffcanvasTrigger>
            <OffcanvasOverlay />
            <OffcanvasContent className={"md:px-17.5 px-5  py-16 rounded-none min-h-screen md:min-w-[500px] h-full overflow-auto no-scrollbar"}>
                <div className='flex justify-between items-center'>
                    <h5 className='text-xl font-bold text-muted-foreground'>Your Cart ({productQuantity})</h5>
                    <OffcanvasClose className={"top-15 text-xl"}>Close (X)</OffcanvasClose>
                </div>

                {products.length === 0 && <h3 className='text-xl font-bold text-muted-foreground mt-[62px]'>No Product your cart</h3>}
                <ul className='mt-[62px]'>
                    {
                        products.map(({ id, price, thumbnail, title, quantity }, index) => {
                            return (
                                <li key={index} className='flex items-center justify-between mb-[22px] last:mb-0'>
                                    <div className='flex items-center md:gap-6 gap-4'>
                                        <Image src={thumbnail} width={"106"} height={"120"} alt='shop img' className='max-h-28 object-cover' />
                                        <div>
                                            <p className='text-xl font-bold mb-[13px] text-muted-foreground line-clamp-1'>{title}</p>
                                            <span className='text-lg inline-block text-muted-foreground'>Qty <span className='font-bold text-xl inline-block ml-[22px]'>{quantity}</span> </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p onClick={() => dispatch(removeToCart(id))} className='text-xl mb-[13px] text-end cursor-pointer text-muted-foreground'>(X)</p>
                                        <span className='text-xl font-bold text-end text-muted-foreground'>${price}</span>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>

                <div className='mt-14 '>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-xl font-bold text-muted-foreground'>Subtotal:</h5>
                        <h5 className='text-xl font-bold text-muted-foreground '>${totalPrice}</h5>
                    </div>
                    <div className='mt-7 flex gap-[27px] items-center'>
                        <Button asChild size="lg" className={cn(`after:${bg_color} hover:${color}`, border_color)}>
                            <Link href={"/cart"}>View Cart</Link>
                        </Button>
                        <Button variant="outline" asChild size="lg" className={cn(`border-primary text-primary-foreground after:${bg_color}`, color, border_color)}>
                            <Link href={"/checkout"}>Checkout</Link>
                        </Button>
                    </div>
                </div>

            </OffcanvasContent>
        </Offcanvas>
    )
}

export default ShopCart