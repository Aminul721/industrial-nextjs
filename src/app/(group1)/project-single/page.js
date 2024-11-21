import NewsLetter from '@/components/sections/newsLetter'
import ProjectArticle from '@/components/sections/projects/projectArticle'
import TeamTwo from '@/components/sections/teams/teamTwo'
import React from 'react'

const ProjectSingle = () => {
  return (
    <main>
        <ProjectArticle/>
        <TeamTwo/>
        <NewsLetter/>
    </main>
  )
}

export default ProjectSingle