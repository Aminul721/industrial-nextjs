import React from 'react'
import CardOne from './cardOne'
import { projectsDataTwo } from '@/lib/fackData/projectsDataTwo'
import SectionTitle from '@/components/ui/sectionTitle'

const ProjectThree = () => {
    return (
        <section>
            <SectionTitle
                // className={"2xl:mb-0 lg:mb-0 md:mb-0 mb-0"}
                section_name={"Projects"}
                section_title={"Creative Showcase"}
                section_description={"Where Imagination Meets Reality in Every Frame"}
            />
            <div className='flex flex-col 2xl:gap-y-[120px] lg:gap-y-20 gap-y-12'>
                {
                    projectsDataTwo.map(({ id, project_desc, project_img, project_name, project_year, project_type, location, link }) => {
                        if (id % 2 === 0) {
                            return (
                                <CardOne
                                    key={id}
                                    project_desc={project_desc}
                                    project_img={project_img}
                                    project_type={project_type}
                                    location={location}
                                    project_year={project_year}
                                    link={link}
                                    project_name={project_name}
                                    order={'lg:order-1 order-0'}
                                    position={"lg:right-0 "}
                                    isSlideRight={true}
                                />
                            )
                        }
                        else {
                            return (
                                <CardOne
                                    key={id}
                                    project_desc={project_desc}
                                    project_img={project_img}
                                    project_type={project_type}
                                    location={location}
                                    project_year={project_year}
                                    link={link}
                                    project_name={project_name}
                                    position={"lg:left-0"}
                                />
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}

export default ProjectThree