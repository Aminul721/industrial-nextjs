import CardOne from '@/components/sections/blogs/cardOne'
import NewsLetter from '@/components/sections/newsLetter'
import Pagination from '@/components/ui/pagination'
import SectionTitle from '@/components/ui/sectionTitle'
import { blogData } from '@/lib/fackData/blogData'
import React from 'react'

const BlogArchive = () => {
  return (
    <main>
      <section className='pt-10'>
        <SectionTitle
          section_name={"Blog"}
          section_title={"Design Insights & Inspiration"}
          section_title_class={"max-w-[1100px] lg:mb-8 mb-5"}
          section_description={"Unlocking the Keys to Revolutionizing Industrial Processes"}
        />
        <div className="container 2xl:my-[120px] lg:my-25 md:my-20 my-16">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-[75px]">
            {
              blogData.map(({ id, date, tag, thumb, title }) => <div key={id}> <CardOne date={date} tag={tag} thumb={thumb} title={title} /> </div>)
            }
          </div>
        </div>
        <Pagination />
      </section>
      <NewsLetter />
    </main>
  )
}

export default BlogArchive