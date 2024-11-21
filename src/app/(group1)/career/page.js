import AboutOne from '@/components/sections/abouts/aboutOne'
import AboutThree from '@/components/sections/abouts/aboutThree'
import Faq from '@/components/sections/faq'
import JobPost from '@/components/sections/jobs/jobPost'
import React from 'react'

const Career = () => {
    return (
        <main>
            <JobPost />
            <AboutThree/>
            <AboutOne/>
            <Faq/>
        </main>
    )
}

export default Career