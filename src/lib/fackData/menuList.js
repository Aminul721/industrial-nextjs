import menu_image_1 from "../../../public/images/menu-image-1.png"

export const menuList = [
    {
        id: 1,
        name: "Home",
        path: "#",
        megaMenu: false,
        dropdownMenu: [
            {
                id: 1,
                name: "Home 1",
                path: "/home-1"
            },
            {
                id: 2,
                name: "Home 2",
                path: "/home-2"
            }
        ]
    },
    {
        id: 2,
        name: "Projects",
        path: '/project-archive',
        megaMenu: false,
        dropdownMenu: false
    },
    {
        id: 3,
        name: "Services",
        path: "#",
        dropdownMenu: false,
        megaMenu: [
            {
                id: 1,
                menus: [
                    {
                        id: 1,
                        name: "Process Optimization",
                        path: "/service-single",
                        desc: "Everything from concept to completion"
                    },
                    {
                        id: 2,
                        name: "System Integration",
                        path: "/service-single",
                        desc: "Focuses on optimizing functionality and aesthetics"
                    },
                    {
                        id: 3,
                        name: "Energy Management",
                        path: "/service-single",
                        desc: "Maximize the potential of your space"
                    }
                ]
            },
            {
                id: 2,
                menus: [
                    {
                        id: 4,
                        name: "Industrial Automation",
                        path: "/service-single",
                        desc: "We help you choose the perfect palette"
                    },
                    {
                        id: 5,
                        name: "Safety Consulting",
                        path: "/service-single",
                        desc: "We oversee every detail for a successful project"
                    },
                    {
                        id: 6,
                        name: "Maintenance Services",
                        path: "/service-single",
                        desc: "Elevate your space with unique furnishings"
                    }
                ]
            },
            {
                id: 3,
                menus: [
                    {
                        id: 7,
                        name: "Project Management",
                        path: "/service-single",
                        desc: "Develop a design concept"
                    },
                    {
                        id: 8,
                        name: "Technical Support",
                        path: "/service-single",
                        desc: "Renovation and remodeling services that breathe new life"
                    }
                ]
            },
            {
                id: 5,
                menus: [
                    {
                        id: 9,
                        name: "Embark on a Design Journey with Us",
                        path: "#",
                        desc: "Let’s Talk",
                        img: menu_image_1
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Pages",
        path: "#",
        megaMenu: false,
        dropdownMenu: [
            {
                id: 1,
                name: "About Us",
                path: "/about-us"
            },
            {
                id: 2,
                name: "Services",
                path: "/services"
            },
            {
                id: 4,
                name: "Project Single",
                path: "/project-single"
            },
            {
                id: 5,
                name: "Product Single",
                path: "/product-single"
            },
            {
                id: 6,
                name: "Product Archive",
                path: "/product-archive"
            },
            {
                id: 7,
                name: "Career",
                path: "/career"
            },
            {
                id: 8,
                name: "Job Details",
                path: "/job-details"
            },
            {
                id: 9,
                name: "Team",
                path: "/team"
            },
            {
                id: 10,
                name: "Team Single",
                path: "/team-single"
            },
            {
                id: 11,
                name: "Contact 2",
                path: "/contact-2"
            },
            {
                id: 12,
                name: "Cart",
                path: "/cart"
            },
            {
                id: 13,
                name: "Checkout",
                path: "/checkout"
            },
        ]
    },
    {
        id: 5,
        name: "Blog",
        path: "#",
        megaMenu: false,
        dropdownMenu: [
            {
                id: 1,
                name: "Blog Archive",
                path: "/blog-archive"
            },
            {
                id: 2,
                name: "Blog Single",
                path: "/blog-single"
            },
            {
                id: 3,
                name: "Blog Left Sidebar",
                path: "/blog-left-sidebar"
            },
            {
                id: 4,
                name: "Blog Right Sidebar",
                path: "/blog-right-sidebar"
            },
        ]
    },
    {
        id: 6,
        name: "Contact",
        path: "/contact",
        megaMenu: false,
        dropdownMenu: false
    },
]