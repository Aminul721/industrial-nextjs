import Title from '@/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'

// import team_1 from "@/assets/images/team-1.jpg"
// import team_2 from "@/assets/images/team-2.jpg"

const Comments = () => {
    return (
        <div className='grid 2xl:grid-cols-[auto_25%] lg:grid-cols-[auto_32%] 2xl:gap-[143px] lg:gap-16 pb-20'>
            <div>
                <Title size={"5xl"} className={"mb-7.5 font-bold"}>Comments (32)</Title>
                <div className='flex md:gap-7.5 gap-4'>
                    <Link href={""}>
                        <Image src={'/images/team/team-1.png'} width={80} height={80} alt='Philip Reyes' className='max-w-20 max-h-20 object-cover' />
                    </Link>
                    <div>
                        <Link href={""} className='text-2xl font-bold leading-[80%] text-muted-foreground'>Philip Reyes</Link>
                        <p>Small apartments can be a canvas for creativity and innovation. By following these tips and making thoughtful design choices, you can transform your compact living space into a int functional, inviting</p>
                        <span className='font-bold'>Reply</span>
                    </div>
                </div>
                <div className='flex md:gap-7.5 gap-4 md:ml-28 ml-10 pt-10'>
                    <Link href={""}>
                        <Image src={'/images/team/team-2.png'} width={80} height={80} alt='Philip Reyes' className='max-w-20 max-h-20 object-cover' />
                    </Link>
                    <div>
                        <Link href={""} className='text-2xl font-bold leading-[80%] text-muted-foreground'>Mark Anderson</Link>
                        <p>Small apartments can be a canvas for creativity and innovation. By following these tips and making thoughtful design choices, you can transform your compact living space into a int functional, inviting</p>
                        <span className='font-bold'>Reply</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments