import React from 'react'
import BlogArticale from '@/components/sections/blogs/blogArticale'
import BlogOne from '@/components/sections/blogs/blogOne'
import Comments from '@/components/sections/blogs/comments'
import LeaveComment from '@/components/sections/blogs/leaveComment'
import NextPrevPost from '@/components/sections/blogs/nextPrevPost'
import NewsLetter from '@/components/sections/newsLetter'
import { blogData } from '@/lib/fackData/blogData'
import Title from '@/components/ui/title'

const BlogSingle = () => {
    return (
        <main>
            <BlogArticale />
            <div className='container'>
                <NextPrevPost />
                <hr className='mt-12.5 mb-[70px] max-w-[830px] w-full' />
                <Comments />
                <LeaveComment />

            </div>
            <div>
                <div className='container'>
                    <Title size={"5xl"}>Related Post</Title>
                </div>
                <BlogOne data={blogData.slice(0, 4)} isPageTitleShow={false} />
            </div>
            <NewsLetter />
        </main>
    )
}

export default BlogSingle