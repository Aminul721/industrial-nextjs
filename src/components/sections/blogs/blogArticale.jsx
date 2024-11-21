import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import QuoteIcon from '../../../../public/icons/quoteIcon'
import SocialMediaList from '@/components/ui/socalMediaList'
import SideBar from './sidebar'
import Title from '@/components/ui/title'

const tagList = [
  {
    id: "1",
    tag: "Art and Decor",
    link: ""
  },
  {
    id: "2",
    tag: "Modern Living",
    link: ""
  },
  {
    id: "3",
    tag: "Renovations",
    link: ""
  },
  {
    id: "4",
    tag: "Vintage Style",
    link: ""
  },

]
const BlogArticale = () => {
  return (
    <section>
      <div className='object-cover bg-no-repeat bg-[url("/images/blog/blog-single-image.jpg")] 2xl:pt-[448px] xl:pt-[300px] lg:pt-[200px] pt-[150px] pb-[68px] relative z-[1] after:contents-[""] after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-[linear-gradient(180deg,_rgba(0,0,0,.01)_14.06%,_rgba(0,0,0,.7)_70.2%)]'>
          <div className='container '>
            <Title size={"8.5xl"} className={"text-[#F9FFFC]"}>Innovative Approaches to Energy Efficiency</Title>
            <p className='mt-14 text-accent-foreground flex sm:gap-[9px] gap-[1px]'> <span>15 November ‘23</span>  / <span>Interior</span> / <span>5 min read</span> </p>
          </div>
      </div>
        <div className='container 2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16 '>
          <div className='grid 2xl:grid-cols-[auto_427px] lg:grid-cols-[auto_400px] 2xl:gap-[130px] lg:gap-16 items-start'>
            <div>
              <div>
                <p>In the fast-paced world of urban living, the allure of compact city apartments iundeniable. The challenge lies in transforming these small spaces into comfortable, stylish havens that cater to both function and aesthetics. With a touch of creativity and a keen eye for design, you can create a cozy, inviting apartment that maximizes every inch of space. Into this blog we'll explore some key tips for making the most of your small apartment, turning it into a to warm and functional home.</p>
                <Title size={"4xl"} className={"mb-[14px] mt-6"}>Smart Energy Management Systems:</Title>
                <p>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
              </div>

              <div>
                <Title size={"4xl"} className={"mb-[14px] mt-6"}>Renewable Energy Integration:</Title>
                <Image src={'/images/blog/blog-inner-image.jpg'} blurDataURL={staticBluarDataUrl} placeholder='blur' width={762} height={410} alt='Multi-Functional Furniture' className='pt-9 pb-12.5 w-full h-full' />
                <p>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
              </div>

              <div>
                <Title size={"4xl"} className={"mb-[14px] mt-6"}>Energy-efficient Equipment:</Title>
                <p>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                <blockquote className='lg:pt-20 pt-10 lg:pb-16 pb-10 flex gap-6 relative'>
                  <span className='absolute sm:static top-2'><QuoteIcon width={"121"} /></span>
                  <div>
                    Lighting plays a vital role in enhancing the atmosphere of your apartment. Choose ambient and task lighting that complements your decor. Well an placed fixtures not only visually expand your space but also contribute to a warm and cozy ambiance.
                    <div className='mt-4 relative after:contents-[""] after:absolute after:-left-5 after:top-0 after:h-full  after:w-[1px] after:bg-primary lg:left-5 left-0'>
                      <p className='font-extrabold text-primary-foreground'>John Smith</p>
                      <span>Smith & Co. Architecture.</span>
                    </div>
                  </div>
                </blockquote>

                <p>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                <p className='pt-[18px]'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                <p className='pt-[18px]'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
              </div>

              <div>
                <Title size={"4xl"} className={"mb-[14px] mt-6"}>Waste Heat Recovery:</Title>
                <p>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
              </div>

              <div>
                <Title size={"4xl"} className={"mb-[14px] mt-6"}>Process Optimization:</Title>
                <p >In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                <p className='pt-[18px]'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
              </div>

              <div className='pt-[54px] flex gap-3 flex-wrap'>
                {
                  tagList.map(({ id, link, tag }) => {
                    return (
                      <>
                        <Button key={id} variant="outline" asChild className="text-lg font-normal border lg:px-2 px-2 lg:py-1 py-1">
                          <Link href={"#"}>{tag}</Link>
                        </Button>
                      </>
                    )
                  })
                }
              </div>
              <div className='flex gap-7 items-center pt-7.5'>
                <strong>Share on:</strong>
                <SocialMediaList />
              </div>
              <hr className='mt-[22px] mb-12.5' />
            </div>
            {/* ---------- sidebar */}
            <SideBar />
          </div>
        </div>
    </section>
  )
}

export default BlogArticale