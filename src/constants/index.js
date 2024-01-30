import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cpp,
    asianaTimes,
    wordpress,
    SchoolHues,
    threejs,
    foodKart,
    redmi,
    getIt
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    }
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Wordpress Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Software Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "wordpress",
        icon: wordpress,
    },
    {
        name: "cpp",
        icon: cpp,
    },
];

const experiences = [
    {
        title: "Wordpress Developer",
        company_name: "Schoolhues",
        icon: SchoolHues,
        iconBg: "#383E56",
        date: "May 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using wordpress and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Video Editor",
        company_name: "Asiana Times",
        icon: asianaTimes,
        iconBg: "#E6DEDD",
        date: "July 2022 - Octuber 2022",
        points: [
            "Utilize industry-standard software Adobe Premiere Pro and Adobe After Effects to edit, color correct, and enhance videos for optimal visual impact.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Edit and assemble raw footage into a polished and compelling final product for various projects, including commercials, corporate videos, and social media content.",
            "Manage multiple projects simultaneously, meeting tight deadlines without compromising quality.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mi Store",
        description:
            "This React-based clone of Mi Store replicates the functionalities and features of the original Mi Store, offering a user-friendly interface and a seamless shopping experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react-bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: redmi,
        source_code_link: "https://sayanbiswas0408.github.io/Mi-Store-Clone/",
    },
    {
        name: "Get It",
        description:
            "An all-encompassing shopping platform that enables users to purchase a diverse range of items, including clothing, electronics, furniture, and various other products, providing a one-stop destination for all their shopping needs.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "WooCommerce",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
        ],
        image: getIt,
        source_code_link: "https://sayanbiswas0408.github.io/Ecommerce-Website/",
    },
    {
        name: "Food Kart",
        description:
            "A comprehensive food delivery platform that empowers users to order a wide array of culinary delights, ranging from diverse cuisines to delectable dishes, ensuring a convenient and satisfying solution for all their food cravings.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: foodKart,
        source_code_link: "https://sayanbiswas0408.github.io/Delivery-Websites/",
    },
];

export { services, technologies, experiences, testimonials, projects };