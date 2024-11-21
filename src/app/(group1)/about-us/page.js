import AboutOne from '@/components/sections/abouts/aboutOne'
import Expertise from '@/components/sections/expertise'
import NewsLetter from '@/components/sections/newsLetter'
import TeamOne from '@/components/sections/teams/teamOne'
import { teamData } from '@/lib/fackData/teamData'
import React from 'react'

const AboutUs = () => {
  return (
    <main>
      <AboutOne />
      <Expertise/>
      <TeamOne data={teamData} className={"team-card"}/>
      <NewsLetter/>
    </main>
  )
}

export default AboutUs