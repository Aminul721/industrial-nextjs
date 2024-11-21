import NewsLetter from '@/components/sections/newsLetter'
import PersonalPortfolio from '@/components/sections/teams/personalPortfolio'
import TeamDescription from '@/components/sections/teams/teamDescription'
import React from 'react'

const TeamSingle = () => {
    return (
        <main>
            <TeamDescription />
            <PersonalPortfolio/>
            <NewsLetter/>
        </main>
    )
}

export default TeamSingle