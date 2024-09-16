import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";


import { DiPython } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJsBadge } from "react-icons/di";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Nihal Panday",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a year.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/nihalp19/portfolio",
  },
  {
    id: 2,
    name: "Netflix Clone",
    description:
      "A Netflix clone using IMDb API for data, Firebase for authentication and storage, and Redux for efficient state management.",
    image: projectImage2,
    githubLink: "https://github.com/nihalp19/netflixClone",
  },
  {
    id: 3,
    name: "Chat App",
    description:
      "A chat app using Firebase for real-time messaging, user authentication, and database storage, ensuring seamless communication and scalability.",
    image: projectImage3,
    githubLink: "https://github.com/nihalp19/chatApp",
  },
  {
    id: 4,
    name: "Currency Converter",
    description:
      "A currency converter application that fetches real-time exchange rates from an API, allowing users to convert between currencies with an intuitive interface for accurate and fast calculations.",
    image: projectImage4,
    githubLink: "https://github.com/nihalp19/CurrencyConverter",
  },
  {
    id: 5,
    name: "Advanced CRUD App",
    description:
      "An Advanced CRUD App utilizing useReducer for efficient state management, with a built-in search feature to filter and manage records dynamically and efficiently.",
    image: projectImage5,
    githubLink: "https://github.com/nihalp19/AdvancedCrudApp",
  },
  {
    id: 6,
    name: "Instagram Clone",
    description:
      "An Instagram clone built with Firebase for user authentication, real-time database, and storage, enabling photo uploads, comments, likes, and user profile management seamlessly",
    image: projectImage6,
    githubLink: "https://github.com/nihalp19/InstagramClone",
  },
];

export const BIO = [
  "I am Nihal Panday, a passionate frontend developer currently pursuing a BCA degree. With a strong interest in web development, I have been sharpening my skills in HTML, CSS, and JavaScript, as well as modern frameworks like React. I am eager to apply my knowledge in a professional setting and am actively seeking internships and frontend development roles where I can contribute my growing expertise to innovative and creative web solutions.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1 year",
  },
  {
    icon: <DiJsBadge className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Javascript",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <DiPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "1 year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1 years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <DiPhp className="text-4xl text-purple-700 lg:text-5xl" />,
    name: "Php",
    experience: "1 year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor in Computer Applications",
    institution: "MIT-WPU Pune",
    duration: "August 2022 - March 2025",
    description:
      "Specialized in Web Development and Software Engineering. Completed multiple projects focusing on dynamic websites, user interfaces, and responsive design. Gained expertise in HTML, CSS, JavaScript, and React, while also building a strong foundation in algorithms, data structures, and databases. Actively engaged in hands-on learning, contributing to real-world web development projects.",
  },
  {
    degree: "Higher Secondary(PCM)",
    institution: "ABDS.Jr College",
    duration: "June 2020 - March 2022",
    description:
      "Completed the PMC (Physics, Mathematics, Chemistry) stream in the HSC board under the Maharashtra State Board of Secondary and Higher Secondary Education. Gained a solid foundation in scientific principles and problem-solving, preparing for advanced studies in technology and engineering. This academic background supports a strong analytical and technical skill set.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/Nihal_019?t=p_wnZesG8b1k-ZBNG0Gaxw&s=08",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/nihalp19",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://linkedin.com/in/nihal-panday-675721254",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
