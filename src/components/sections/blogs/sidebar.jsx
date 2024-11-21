import Link from 'next/link'
import Image from 'next/image'
import { blogData } from '@/lib/fackData/blogData'
import RightArrow from '../../../../public/icons/rightArrow'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { cn } from '@/lib/utils'

const categoriesList = [
    {
        id: "1",
        categories: "Design Inspiration",
        post: "15"
    },
    {
        id: "2",
        categories: "Room Makeovers",
        post: "7"
    },
    {
        id: "3",
        categories: "Color and Decor",
        post: "8"
    },
    {
        id: "4",
        categories: "Home Improvement",
        post: "20"
    },
    {
        id: "5",
        categories: "Sustainable Design",
        post: "4"
    },
    {
        id: "6",
        categories: "Art and Decor",
        post: "9"
    },
    {
        id: "7",
        categories: "Space Planning ",
        post: "15"
    },
    {
        id: "8",
        categories: "Client Success Stories",
        post: "25"
    },
    {
        id: "9",
        categories: "Design Trends",
        post: "3"
    },

]
const tagList = [
    {
        id: 1,
        tag: "Color Schemes",
        link: "",
    },
    {
        id: 2,
        tag: "Furniture Design",
        link: "",
    },
    {
        id: 3,
        tag: "DIY Projects",
        link: "",
    },
    {
        id: 4,
        tag: "Space Planning",
        link: "",
    },
    {
        id: 5,
        tag: "Styling Tips",
        link: "",
    },
    {
        id: 6,
        tag: "Art and Decor",
        link: "",
    },
    {
        id: 7,
        tag: "Modern Living",
        link: "",
    },
    {
        id: 8,
        tag: "Renovations",
        link: "",
    },
    {
        id: 9,
        tag: "Vintage Style",
        link: "",
    },

]

const SideBar = ({ order }) => {
    return (
        <div className={cn(`lg:sticky lg:top-16 lg:pb-16`, order)}>
            <div>
                <Title size={"5xl"} className={"mb-7.5 font-semibold"}>Serach</Title>
                <Input placeholder={"Type & Hit Enter"} className="rounded-none py-[14px] border-muted border-2 text-lg" type={'text'} />
            </div>
            {/* --------- category */}
            <div className='xl:pt-[70px] lg:pt-15 pt-10'>
                <Title size={"5xl"} className={"mb-7.5 font-semibold"}>Categories</Title>
                <ul >
                    {
                        categoriesList.map(({ id, categories, post }) => {
                            return (
                                <li key={id} className='text-muted-foreground flex items-center gap-[27px] mb-[22px] last:mb-0'>
                                    <RightArrow className="lg:w-[35px] lg:h-6 w-7 h-5" />
                                    <Link href={""} className='text-xl leading-160 inline-block'>
                                        <span className='font-medium text-muted-foreground multiline-hover'>{categories}</span>{" "}
                                        <span className='font-bold text-muted-foreground'>({post})</span>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            {/* -------- tag */}
            <div className='xl:pt-[70px] lg:pt-15 pt-10'>
                <Title size={"5xl"} className={"mb-7.5 font-semibold"}>Tags</Title>
                <div className='flex gap-3 flex-wrap'>
                    {
                        tagList.map(({ id, link, tag }) => <Button key={id} variant="outline" asChild className="text-lg font-normal border lg:px-2 px-2 lg:py-1 py-1"><Link href={"#"}>{tag}</Link></Button>)
                    }
                </div>
            </div>

            {/* -------- Recent post */}
            <div className='xl:pt-[70px] lg:pt-15 pt-10'>
                <Title size={"5xl"} className={"mb-7.5 font-semibold"}>Recent Posts</Title>

                {
                    blogData.slice(0, 3).map(({ id, date, title, thumb }) => {
                        return (
                            <div key={id} className='flex sm:flex-row flex-col sm:gap-[26px] gap-4 mb-7.5 last:mb-0'>
                                <div className='max-w-[162px]'>
                                    <Image src={thumb} alt={title} />
                                </div>
                                <div>
                                    <Link href={"/blog-single"} className='text-muted-foreground hover-underline text-2xl leading-120 font-semibold line-clamp-2'><span>{title}</span></Link>
                                    <p>{date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar