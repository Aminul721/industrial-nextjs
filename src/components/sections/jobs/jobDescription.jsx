import React from 'react'
import JobDescriptionSidebar from './jobDescriptionSidebar'
import Title from '@/components/ui/title'

const requrments = [
  {
    id: "1",
    requrment: "Key Responsibilities:",
    keys: [
      `Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.`,
      `Work with BAs, product managers and tech teams to lead the Product Design`,
      `Accurately estimate design tickets during planning sessions.`,
      `Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.`,
      `Accurately estimate design tickets during planning sessions.`,
      `Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.`,
      `Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.`,
      `Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel`,
      `Present your work to the wider business at Show & Tell sessions.`
    ]
  },
  {
    id: "2",
    requrment: "Required Skills:",
    keys: [
      `You’ve been designing digital products for 2+ years.`,
      `A portfolio that exemplifies strong visual design and a focus on defining the user experience.`,
      `You’ve proudly shipped and launched several products.`,
      `You have some past experience working in an agile environment – Think two-week sprints.`,
      `Experience effectively presenting and communicating your design decisions to clients and team members`,
      `Up-to-date knowledge of design software like Figma, Sketch etc.s`,
    ]
  }
]
const JobDescription = () => {
  return (
    <div className='container 2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>
      <div className='grid lg:grid-cols-[auto_427px] xl:gap-x-[132px] gap-x-10 items-start'>
        <div>
          <div>
            <Title size={"4xl"} className={"pb-7.5"}>Job Description</Title>
            <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
            <p className='pt-7'>This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
            <p className='pt-7'>It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
          </div>
          <div className='pt-7.5'>
            {
              requrments.map(({ id, keys, requrment }) => {
                return (
                  <div key={id}>
                    <h5 className='font-bold text-muted-foreground'>{requrment}</h5>
                    <ul className='2sm:ml-[132px] sm:ml-20 ml-10 py-7 list-disc'>
                      {
                        keys.map((key, index) => {
                          return (
                            <li key={index} className='mb-6 last:mb-0'>{key}</li>
                          )
                        })
                      }

                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
        <JobDescriptionSidebar />
      </div>
    </div>
  )
}

export default JobDescription