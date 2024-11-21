import React from 'react'
import Card from './card'
import { jobPostList } from '@/lib/fackData/jobPostList'
import SectionTitle from '@/components/ui/sectionTitle'

const JobPost = () => {
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"Career"}
                section_title={"Career Opportunities"}
                section_title_class={"max-w-[1000px] lg:mb-8 mb-5"}
                section_description={"Discover Your Future at industria : Where Innovation Meets Passion"}
            />
            <div className='container'>
                <ul>
                    {
                        jobPostList.map(({ id, date_line, job_name, level, link, location, salary, time }) =>
                            <Card key={id} id={id} date_line={date_line} job_name={job_name} level={level} location={location} link={link} salary={salary} time={time} />)
                    }
                </ul>
            </div>
        </section>
    )
}

export default JobPost