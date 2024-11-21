import BlogArticleWithSIdebar from '@/components/sections/blogs/blogArticleWithSIdebar'
import NewsLetter from '@/components/sections/newsLetter'
import React from 'react'

const BlogLeftSidebar = () => {
    return (
        <main>
            <BlogArticleWithSIdebar />
            <NewsLetter/>
        </main>
    )
}

export default BlogLeftSidebar