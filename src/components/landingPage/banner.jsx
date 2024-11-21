import Link from 'next/link'
import { Button } from '../ui/button'
import RightArrow from '../../../public/icons/rightArrow'

const Banner = () => {
    return (
        <section className={`pt-[100px] relative bg-center bg-no-repeat bg-cover bg-[url('/images/hero/hero-1.2.jpg')]`}>
            <div className='container-fluid '>
                <div className='pt-[160px] pb-[230px]'>
                    <h1 className='2xl:text-[200px] xl:text-[150px] lg:text-[120px] md:text-[90px] text-[60px] font-extrabold leading-[100%]  text-center text-cream-foreground'>Industrail Engineering</h1>
                    <div className='flex md:flex-row flex-col items-center justify-center gap-5 mt-14'>
                        <Button asChild size="lg" className="z-[1]">
                            <Link href={"https://www.templatemonster.com/store/themeperch/"}>Buy Industria <RightArrow /></Link >
                        </Button>
                        <Button variant="outline" size="lg" className="z-[1] text-cream-foreground border-cream">
                            <Link href={"#demos"}>View Demos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner