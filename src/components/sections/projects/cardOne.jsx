import Image from 'next/image'
import Link from 'next/link'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import { Button } from '@/components/ui/button'
import SlideRight from '@/lib/animations/slideRight'
import SlideLeft from '@/lib/animations/slideLeft'
import RightArrow from '../../../../public/icons/rightArrow'
import { cn } from '@/lib/utils'

const CardOne = ({ order, position, project_year, project_desc, project_img, location, project_name, isSlideRight }) => {
    return (
        <div className='container-fluid w-full mx-auto relative overflow-hidden lg:py-[58px]'>
            <div className='container px-0'>
                <div className='flex lg:flex-row flex-col items-center  '>
                    <div className={cn(`lg:w-1/2 `, order)}>
                        <div className={cn(`w-full xl:max-w-[1100px] lg:max-w-[900px]  max-h-[700px] h-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 `, position)}>
                            <Image src={project_img} placeholder='blur' blurDataURL={staticBluarDataUrl} alt='project-img-1' width={"auto"} height={"auto"} className=' h-full' />
                        </div>
                    </div>
                    <div className='lg:w-1/2 relative z-[1] overflow-hidden' >
                        {isSlideRight ?
                            <SlideRight>
                                <div className={`bg-muted-foreground xl:px-16 px-8 xl:pt-[78px] pt-10 xl:pb-[58px] pb-7  `}>
                                    <h3 className='xl:text-5xl md:text-[40px] text-4xl font-extrabold leading-120 text-cream-foreground pb-10'>{project_name}</h3>
                                    <p className='text-cream-foreground mb-7'>{project_desc}</p>
                                    <ul className='mb-9'>
                                        <li className='flex  items-center mb-[6px]'>
                                            <span className='inline-block font-extrabold min-w-32 text-cream-foreground'>Year:</span>
                                            <span className='font-medium text-cream-foreground'>{project_year}</span>
                                        </li>
                                        <li className='flex  items-center mb-[6px]'>
                                            <span className='inline-block font-extrabold min-w-32 text-cream-foreground'>Location</span>
                                            <span className='font-medium text-cream-foreground'>{location}</span>
                                        </li>
                                    </ul>
                                    <Button asChild size="lg" className="border-accent after:bg-accent text-muted-foreground hover:text-cream-foreground z-[1]">
                                        <Link href={'/project-single'}>View Project <RightArrow width={'35'} height={"22"} /></Link>
                                    </Button>
                                </div>
                            </SlideRight>
                            :
                            <SlideLeft>
                                <div className={`bg-muted-foreground xl:px-16 px-8 xl:pt-[78px] pt-10 xl:pb-[58px] pb-7  `}>
                                    <h3 className='xl:text-5xl md:text-[40px] text-4xl font-extrabold leading-120 text-cream-foreground pb-10'>{project_name}</h3>
                                    <p className='text-cream-foreground mb-7'>{project_desc}</p>
                                    <ul className='mb-9'>
                                        <li className='flex  items-center mb-[6px]'>
                                            <span className='inline-block font-extrabold min-w-32 text-cream-foreground'>Year:</span>
                                            <span className='font-medium text-cream-foreground'>{project_year}</span>
                                        </li>
                                        
                                        <li className='flex  items-center mb-[6px]'>
                                            <span className='inline-block font-extrabold min-w-32 text-cream-foreground'>Location</span>
                                            <span className='font-medium text-cream-foreground'>{location}</span>
                                        </li>
                                    </ul>
                                    <Button asChild size="lg" className="border-accent after:bg-accent text-muted-foreground hover:text-cream-foreground z-[1]">
                                        <Link href={'/project-single'}>View Project <RightArrow width={'35'} height={"22"} /></Link>
                                    </Button>
                                </div>
                            </SlideLeft>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOne