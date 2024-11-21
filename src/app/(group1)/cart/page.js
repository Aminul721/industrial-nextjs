import React from 'react'
import { productData } from '@/lib/fackData/productData';
import CartProductList from '@/components/sections/products/cartProductList';
import CalclutCard from '@/components/sections/products/calclutCard';
import Card from '@/components/sections/products/card';
import Title from '@/components/ui/title';

const Cart = () => {
    return (
        <div className='container'>
            <div className='py-15'>
                <Title size={"8.5xl"}>Cart</Title>
            </div>
            <div className='grid 2xl:grid-cols-[auto_427px] grid-cols-1 gap-5 items-start'>
                <CartProductList />
                <CalclutCard title={"Cart Total"} />
            </div>
            
            <div className='pt-20 pb-20'>
                <span className='block w-full h-[1px] bg-border mt-[7px] mb-3'></span>
                <div className=' 2xl:mt-[70px] lg:mt-14 mt-10'>
                    <h3 className='text-4xl font-bold text-muted-foreground leading-[1.35]'>Customers also bought</h3>
                    <div className='grid lg:grid-cols-3 2sm:grid-cols-2 grid-cols-1 gap-7.5 2xl:mt-[70px] lg:mt-14 mt-10'>
                        {productData.slice(0, 3).map(({ id, title, thumbnail, price, rating }) => {
                            return (
                                <Card key={id} id={id} price={price} thumbnail={thumbnail} title={title} rating={rating} />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart