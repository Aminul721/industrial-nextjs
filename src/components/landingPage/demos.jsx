import React from 'react'
import DemoCard from './demoCard'

const homeDemoData = [
    {
        id: 1,
        demo_img: '/images/landing/home-1.jpg',
        link: "/home-1",
        demo_name: "Home-1"
    },
    {
        id: 2,
        demo_img: '/images/landing/home-2.jpg',
        link: "/home-2",
        demo_name: "Home-2"
    }
]
const innerDemoData = [
    {
        id: 1,
        demo_img: '/images/landing/about_us.png',
        link: "/about-us",
        demo_name: "About Us"
    },
    {
        id: 2,
        demo_img: '/images/landing/blog_archive.png',
        link: "/blog-archive",
        demo_name: "Blog Archive"
    },
    {
        id: 3,
        demo_img: '/images/landing/blog_left_sidebar.png',
        link: "/blog-left-sidebar",
        demo_name: "Blog Left Sidebar"
    },
    {
        id: 4,
        demo_img: '/images/landing/blog_right_sidebar.png',
        link: "/blog-right-sidebar",
        demo_name: "Blog Right Sidebar"
    },
    {
        id: 5,
        demo_img: '/images/landing/blog_single.png',
        link: "/blog-single",
        demo_name: "Blog Single"
    },
    {
        id: 6,
        demo_img: '/images/landing/career.png',
        link: "/career",
        demo_name: "Career"
    },
    {
        id: 9,
        demo_img: '/images/landing/job_details.png',
        link: "/job-details",
        demo_name: "Job Details"
    },
    {
        id: 7,
        demo_img: '/images/landing/contact.png',
        link: "/contact",
        demo_name: "Contact"
    },
    // {
    //     id: 8,
    //     demo_img: contact_2,
    //     link: "/contact-2",
    //     demo_name: "Contact 2"
    // },
    {
        id: 10,
        demo_img: '/images/landing/project_archive.png',
        link: "/project-archive",
        demo_name: "Project Archive"
    },
    {
        id: 11,
        demo_img: '/images/landing/project-single.png',
        link: "/project-single",
        demo_name: "Project Single"
    },
    {
        id: 12,
        demo_img: '/images/landing/services.png',
        link: "/services",
        demo_name: "Services"
    },
    {
        id: 13,
        demo_img: '/images/landing/services_single.png',
        link: "/service-single",
        demo_name: "Service Single"
    },
    // {
    //     id: 14,
    //     demo_img: shop_rchive,
    //     link: "/product-archive",
    //     demo_name: "Product Archive"
    // },
    // {
    //     id: 15,
    //     demo_img: shop_single,
    //     link: "/product-single",
    //     demo_name: "Product Single"
    // },
    {
        id: 16,
        demo_img: '/images/landing/team.png',
        link: "/team",
        demo_name: "Team"
    },
    {
        id: 17,
        demo_img: '/images/landing/team_single.png',
        link: "/team-single",
        demo_name: "Team Single"
    },

]
const Demos = () => {
    return (
        <section className='py-25' id="demos">
            <div className='container'>
                <div>
                    <h1 className='text-center [font-size:_clamp(40px,7vw,90px)] font-extrabold leading-[1.20] text-muted-foreground mb-15'>Stylish & Flexible <br /> Layouts</h1>
                    <div className='grid md:grid-cols-2 gap-10'>
                        {
                            homeDemoData.map(({ id, demo_img, demo_name, link }) => <DemoCard key={id} demo_img={demo_img} demo_name={demo_name} link={link} />)
                        }
                    </div>
                </div>
                <div className='pt-25'>
                    <h1 className='text-center [font-size:_clamp(40px,7vw,90px)] font-extrabold leading-120 text-muted-foreground mb-15'>Inner-Pages</h1>
                    <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
                        {
                            innerDemoData.map(({ id, demo_img, demo_name, link }) => <DemoCard key={id} demo_img={demo_img} demo_name={demo_name} link={link} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Demos