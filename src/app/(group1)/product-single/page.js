import React from 'react'
import ProductDescription from '@/components/sections/products/productDescription'
import ProductOverview from '@/components/sections/products/productOverview'
import ProductPreview from '@/components/sections/products/productPreview'
import { productData } from '@/lib/fackData/productData'
import Title from '@/components/ui/title'
import Card from '@/components/sections/products/card'
import NewsLetter from '@/components/sections/newsLetter'

const ProductSingle = () => {
    const findProduct = productData[0]
    return (
        <main>
            <div className='container mt-20'>
                <div className='grid xl:grid-cols-[55%_auto] lg:grid-cols-2 gap-12.5'>
                    <ProductPreview findProduct={findProduct} />
                    <ProductOverview findProduct={findProduct} />
                </div>
                <ProductDescription />
            </div>

            <div className='container 2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>
                <Title size={"4xl"} className={"mb-10"} >Related Products</Title>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-7.5'>
                    {
                        productData.slice(0, 3).map(({ id, price, thumbnail, title, rating }) => {
                            return (
                                <Card key={id} id={id} price={price} thumbnail={thumbnail} title={title} rating={rating} />
                            )
                        })
                    }
                </div>
            </div>
            <NewsLetter/>
        </main>
    )
}

export default ProductSingle