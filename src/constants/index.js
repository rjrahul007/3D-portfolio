import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
];

// const logoIconsList = [
//   {
//     imgPath: "/images/logos/company-logo-1.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-2.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-3.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-4.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-5.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-6.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-7.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-8.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-9.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-10.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-11.png",
//   },
// ];

const logoIconsList = [
  {
    name: "React",
    icon: FaReact,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "text-blue-400",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-white",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-white",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
];
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Rahul brought both technical depth and a collaborative spirit to our team at Symbios. Their contributions were instrumental in enhancing our enterprise software — from building robust RESTful APIs for authentication, payments, and third-party integrations (WhatsApp, SMS, Email) to optimizing SQL queries and server performance for better reliability. They also supported our React Native app, improving API integration and user interactions. Their work made a real difference in both performance and user experience.",
    imgPath: "/images/exp11.png",
    logoPath: "/images/symbios.png",
    title: "Full Stack Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Assisted in enhancing enterprise-level software by adding new features and modules, optimizing performance, and ensuring robust authentication and authorization protocols. Worked extensively with advanced SQL queries, database optimization, and server management to maintain high availability and efficiency.",
      "Helped design and implement a wide range of RESTful APIs to support critical app functionalities, including user authentication (Login, OTP), payment processing, and seamless integration with third-party services such as WhatsApp, SMS, Email, and various payment gateways.",
      "Contributed to the frontend development of the subscriber app with react native with expo, assisting with API integration and improving user interactions.",
    ],
  },
  {
    review:
      "Rahul’s contributions as an IT Faculty at IIHT were exceptional. He brought clarity and energy to every session, effectively teaching a wide range of courses from CCA and PGDCA to web development with HTML5, CSS3, and JavaScript. His ability to simplify complex programming languages like Python, C, C++, Visual Basic, and SQL helped students build a strong foundation. He approaches teaching with passion and a problem-solving mindset, making a lasting impact on learners.",
    imgPath: "/images/exp12.png",
    logoPath: "/images/iiht.png",
    title: "It Faculty",
    date: "Nov 2022 - April 2024",
    responsibilities: [
      "Proficiently taught diverse courses, including CCA, PGDCA, and web development (HTML5, CSS3, and JavaScript) to students, ensuring a comprehensive understanding of the subjects.",
      "Instructed programming languages such as Python, C, C++, Visual Basic, and SQL.",
    ],
  },
  {
    review:
      "Rahul brought dedication and clarity to his role as Guest Faculty at Mahendra’s. He effectively prepared students for the NSSB examination by delivering a well-structured computer science curriculum tailored to their needs. His sessions at Tesco College, under our extended partnership, reflected his commitment to student success and his ability to communicate complex topics with ease. His contribution made a meaningful impact in a short time.",
    imgPath: "/images/exp13.png",
    logoPath: "/images/mahindral.png",
    title: "Guest Faculty",
    date: "Aug 2023 - Sep 2023",
    responsibilities: [
      "Prepared students for the NSSB examination by delivering a tailored curriculum in computer science.",
      "Taught students for the NSSB exam at Tesco College through an extended partnership with Mahendra’s.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Moasangba Jamir",
    mentions: "Owner at ACE Car Rental",
    review:
      "Working with Rahul transformed our online car rental presence in Nagaland. His attention to detail and technical expertise exceeded our expectations.",
    imgPath: "/images/client1.jpg",
  },
  {
    name: "Probin Das",
    mentions: "Marketing Director at IElevator",
    review:
      "Rahul delivered a beautiful, high-performing website that perfectly represents our brand. Highly recommended!",
    imgPath: "/images/client2.avif",
  },
  // {
  //   name: "Guy Hawkins",
  //   mentions: "@guyhawkins",
  //   review:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   imgPath: "/images/client2.png",
  // },
  // {
  //   name: "Marvin McKinney",
  //   mentions: "@marvinmckinney",
  //   review:
  //     "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
  //   imgPath: "/images/client5.png",
  // },
  // {
  //   name: "Floyd Miles",
  //   mentions: "@floydmiles",
  //   review:
  //     "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "Albert Flores",
  //   mentions: "@albertflores",
  //   review:
  //     "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
  //   imgPath: "/images/client6.png",
  // },
];

const socialImgs = [
  {
    name: "insta",
    link: "https://www.instagram.com/rjrahool007",
    imgPath: "/images/insta.png",
  },
  {
    name: "github",
    link: "https://github.com/rjrahul007",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    link: "www.linkedin.com/in/rjrahool007",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
