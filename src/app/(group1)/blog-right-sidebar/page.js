import BlogArticleWithSIdebar from '@/components/sections/blogs/blogArticleWithSIdebar'
import NewsLetter from '@/components/sections/newsLetter'
import React from 'react'

const BlogRightSidebar = () => {
    return (
        <main>
            <BlogArticleWithSIdebar isRightSiber={true} />
            <NewsLetter/>
        </main>
    )
}

export default BlogRightSidebar