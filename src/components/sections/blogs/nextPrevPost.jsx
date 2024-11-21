import Link from 'next/link'
import RightArrow from '../../../../public/icons/rightArrow'

const NextPrevPost = ({ link, title, arrowRotate }) => {
    return (
        <div className='flex justify-between lg:items-center lg:flex-row flex-col gap-5 pt-8 lg:pt-0'>
            <div className='flex items-center gap-[26px]'>
                <Link href={""} className='text-primary-foreground rotate-180 lg:w-12.5 lg:h-10 sm:w-10 sm:h-7 w-8 h-5'><RightArrow/></Link>
                <Link href={""} className='[font-size:_clamp(1.125rem,1.0385rem+0.3846vw,1.5rem)] font-semibold max-w-[427px]  '>
                    <span className='multiline-hover'>The Evolution of Industrial Automation</span>
                </Link>
            </div>
            <p className='min-h-[77px] h-full w-0.5 bg-[#4D5965] lg:block hidden'></p>
            <div className='flex items-center gap-[26px] self-end'>
                <Link href={""} className='[font-size:_clamp(1.125rem,1.0385rem+0.3846vw,1.5rem)] font-semibold max-w-[427px] text-right'>
                    <span className='multiline-hover'>Leveraging Big Data for Industrial Optimization</span>
                </Link>
                <Link href={""} className='text-primary-foreground lg:w-12.5 lg:h-10 sm:w-10 sm:h-7 w-8 h-5'><RightArrow/></Link>
            </div>
        </div>
    )
}

export default NextPrevPost