import React from 'react'
import AboutTwo from '@/components/sections/abouts/aboutTwo'
import ApproachTwo from '@/components/sections/approaches/approachTwo'
import HeroTwo from '@/components/sections/heros/heroTwo'
import ServiceTwo from '@/components/sections/services/serviceTwo'
import ProjectTwo from '@/components/sections/projects/projectTwo'
import NewsLetter from '@/components/sections/newsLetter'
import WorkProcessVideoTwo from '@/components/sections/workProcess/workProcessVideoTwo'
import TeamOne from '@/components/sections/teams/teamOne'
import BlogOne from '@/components/sections/blogs/blogOne'
import { teamData } from '@/lib/fackData/teamData'

const HomeTwo = () => {
    return (
        <main>
            <HeroTwo />
            <AboutTwo/>
            <ApproachTwo/>
            <ServiceTwo isTitleShow={true}/>
            <ProjectTwo/>
            <WorkProcessVideoTwo/>
            <TeamOne data={teamData.slice(0, 3)} className={"team-card"} btn_class={"after:bg-secondary hover:border-secondary"}/>
            <BlogOne isPageTitleShow={true}/>
            <NewsLetter/>
        </main>
    )
}

export default HomeTwo