import Card from '@/components/sections/jobs/card'
import JobDescription from '@/components/sections/jobs/jobDescription'
import JobShortInfo from '@/components/sections/jobs/jobShortInfo'
import Title from '@/components/ui/title'
import { jobPostList } from '@/lib/fackData/jobPostList'
import React from 'react'

const JobDetails = () => {
    return (
        <main>
            <JobShortInfo />
            <JobDescription />
            <div className='container pt-15 pb-30'>
                <Title size={"4xl"}>Other Jobs</Title>
                <ul className='pt-7.5'>
                    {
                        jobPostList.map(({ id, date_line, job_name, level, link, location, salary, time }) =>
                            <Card key={id} id={id} date_line={date_line} job_name={job_name} level={level} location={location} link={link} salary={salary} time={time} />)
                    }
                </ul>
            </div>
        </main>
    )
}

export default JobDetails