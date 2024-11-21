import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackData/teamData'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PersonalPortfolio = () => {
    return (
        <div className='container pt-20'>
            <Title size={"8.5xl"} className={"max-w-[651px]"}>Portfolio Showcase:</Title>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-14 pt-10'>
                {teamData[0].portfolio.map(({ id, img, link, project_name }) => <Card key={id} img={img} project_name={project_name} />)}
            </div>
        </div>
    )
}

export default PersonalPortfolio


const Card = ({img, project_name}) => {
    return (
        <div className='relative max-h-[347px] h-full w-full after:absolute after:bottom-0 after:left-0 after:w-full after:h-full  after:bg-[linear-gradient(180deg,_rgba(217,217,217,0.00)_-21.43%,_#FFF_153.57%)]'>
            <Image src={img} width={426} height={347} sizes='100vw' placeholder='blur' blurDataURL={staticBluarDataUrl} alt='portfolio_1' className='h-full object-cover' />
            <div className='absolute bottom-6 left-7.5 z-10'>
                <Link href={"/project-single"} className='md:text-4xl sm:text-3xl text-2xl font-bold multiline-hover text-muted-foreground'>{project_name}</Link>
            </div>
        </div>
    )
}