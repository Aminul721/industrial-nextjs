import React from 'react'
import SideBar from './sidebar'
import Pagination from '@/components/ui/pagination'
import { blogData } from '@/lib/fackData/blogData'
import CardOne from './cardOne'
import SectionTitle from '@/components/ui/sectionTitle'

const BlogArticleWithSIdebar = ({ isRightSiber }) => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"Blog"}
                section_title={"Design Insights & Inspiration"}
                section_title_class={"max-w-[1100px] lg:mb-8 mb-5"}
                section_description={"Unlocking the Keys to Revolutionizing Industrial Processes"}
            />
            <div className='container 2xl:my-[120px] lg:my-25 md:my-20 my-16'>
                <div className={`grid  ${isRightSiber ? "2xl:grid-cols-[auto_385px] lg:grid-cols-[auto_300px]" : "2xl:grid-cols-[385px_auto] lg:grid-cols-[300px_auto]"} items-start gap-x-[62px]`}>
                    {isRightSiber || <SideBar order={"order-1 lg:order-0"} />}
                    <div className='grid sm:grid-cols-2 gap-x-5 xl:gap-y-[75px] lg:gap-y-15 gap-y-10 order-0 lg:order-1'>
                        {
                            blogData.map(({ id, date, tag, thumb, title }) => <CardOne key={id} date={date} tag={tag} thumb={thumb} title={title}/>)
                        }
                    </div>
                    {isRightSiber && <SideBar order={"order-1 lg:order-0"} />}
                </div>
            </div>
            <Pagination />
        </section>
    )
}

export default BlogArticleWithSIdebar