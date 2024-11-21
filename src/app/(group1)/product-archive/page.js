import NewsLetter from '@/components/sections/newsLetter'
import Card from '@/components/sections/products/card'
import SectionTitle from '@/components/ui/sectionTitle'
import { productData } from '@/lib/fackData/productData'
import React from 'react'

const ProductArchive = () => {
  return (
    <main>
      <section className='pt-10'>
        <SectionTitle
          section_name={"Shop"}
          section_title={"Design Elegance Emporium"}
          section_title_class={"max-w-[1200px] lg:mb-8 mb-5"}
          section_description={"Discover Unparalleled Luxury for Your Space"}
        />
      </section>
      <div className='container'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-x-7 gap-y-15'>
          {
            productData.map(({ id, price, thumbnail, title, rating }) => <Card key={id} id={id} price={price} thumbnail={thumbnail} title={title} rating={rating} />)
          }
        </div>
      </div>
      <NewsLetter />
    </main>
  )
}

export default ProductArchive