import React from 'react'
import AboutOne from '@/components/sections/abouts/aboutOne'
import ApproachOne from '@/components/sections/approaches/approachOne'
import BlogOne from '@/components/sections/blogs/blogOne'
import Footer from '@/components/sections/footer'
import HeaderOne from '@/components/sections/headers/headerOne'
import HeroOne from '@/components/sections/heros/heroOne'
import NewsLetter from '@/components/sections/newsLetter'
import ProjectOne from '@/components/sections/projects/projectOne'
import ServiceOne from '@/components/sections/services/serviceOne'
import TeamOne from '@/components/sections/teams/teamOne'
import WorkProcess from '@/components/sections/workProcess/workProcess'
import WorkProcessVideo from '@/components/sections/workProcess/workProcessVideo'
import { teamData } from '@/lib/fackData/teamData'

const Home1 = () => {
    return (
        <main>
            <HeaderOne />
            <HeroOne />
            <ServiceOne />
            <AboutOne />
            <ApproachOne />
            <ProjectOne />
            <WorkProcess />
            <WorkProcessVideo />
            <TeamOne data={teamData.slice(0, 3)} className={"team-card"} btnShow={true} />
            <BlogOne isPageTitleShow={true} />
            <NewsLetter />
            <Footer />
        </main>
    )
}

export default Home1