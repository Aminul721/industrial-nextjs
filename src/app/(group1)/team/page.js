import NewsLetter from '@/components/sections/newsLetter'
import TeamOne from '@/components/sections/teams/teamOne'
import { teamData } from '@/lib/fackData/teamData'
import React from 'react'

const Team = () => {
  return (
    <main>
        <TeamOne data={teamData} containerTop={"lg:pt-25 md:pt-20 pt-16"} btnShow={false}/>
        <NewsLetter/>
    </main>
  )
}

export default Team