import Link from 'next/link'
import SocialMediaList from '../ui/socalMediaList'
import Logo from '../ui/logo'

const Footer = ({ logo }) => {
    return (
        <footer className='container-fluid'>
            <div className='container'>
                <div className='grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20'>
                    <div>
                        <Link href={"/"} className=''>
                            <Logo src={logo} />
                        </Link>
                        <h5 className='xl:text-2xl text-xl font-semibold text-muted-foreground leading-160 pt-2.5 pb-3'>Your Engineering Partner</h5>
                        <SocialMediaList />
                    </div>
                    <div className='mt-12 lg:mt-0 flex gap-x-10'>
                        <span className='h-[198px] w-[1px] bg-muted block my-2.5'></span>
                        <div>
                            <h5 className='text-2xl font-extrabold block text-muted-foreground leading-160 '>Address Spain:</h5>
                            <span className='w-[99px] h-[1px] bg-muted block my-2.5'></span>
                            <div className=''>
                                <p className='text-xl font-bold text-muted-foreground'>Industria, </p>
                                <p className='text-lg text-muted-foreground'>Avda. Valencia, 3, 46891, </p>
                                <p className='text-lg  text-muted-foreground'>Palomar (Valencia), SPAIN </p>
                            </div>
                            <div className='mt-[17px]'>
                                <Link href={"tel:+34962398486"} className='text-lg block text-muted-foreground hover-underline' >Phone: <span>+34 96 239 84 86</span></Link>
                                <Link href={"mailto:hello@industria.com"} className='text-lg block text-muted-foreground hover-underline'>Email: <span>hello@industria.com</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 lg:mt-0 flex gap-x-10'>
                        <span className='h-[198px] w-[1px] bg-muted block my-2.5'></span>
                        <div>
                            <h5 className='text-2xl font-extrabold inline-block text-muted-foreground leading-160 '>Address USA:</h5>
                            <span className='w-[99px] h-[1px] bg-muted block my-2.5'></span>
                            <div className='mt-[18px]'>
                                <p className='text-xl font-bold text-muted-foreground'>Industria Inc, </p>
                                <p className='text-lg text-muted-foreground'>208 English Road, High Point, </p>
                                <p className='text-lg  text-muted-foreground'>NC 27262, USA </p>
                            </div>
                            <div className='mt-[17px]'>
                                <Link href={"tel:+34962398486"} className='text-lg block text-muted-foreground hover-underline' >Phone: <span>+336 885 6670</span></Link>
                                <Link href={"mailto:hello@industria.com"} className='text-lg block text-muted-foreground hover-underline'>Email: <span>hello@industria .com</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='bg-[#303F50]' />
                <div className='py-8 lg:flex justify-between items-center'>
                    <span className='text-sm text-muted-foreground block'>Made with Love by <Link href={""}>TemplateMonster</Link> </span>
                    <span className='text-sm text-muted-foreground block mt-3 lg:mt-0'>©2024, Industria, All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer