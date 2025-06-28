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
  { value: 10, suffix: "+", label: "APIs & Databases Managed" },
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
      "Utilized a problem-solving approach to teaching, fostering a deep understanding of programming concepts and their practical applications.",
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
      "Instrumental in advancing students’ IT knowledge and skills for successful NSSB examination preparation.",
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

const projects = [
  {
    href: "https://sass-app-tau.vercel.app/",
    imageSrc: "/images/sass-app1.png",
    title: "📚 AI-Powered LMS SaaS – Interactive Learning Platform",
    techStack:
      "Next.js • Supabase • Clerk • Vapi • Tailwind CSS • shadcn/ui • TypeScript • Sentry",
    description:
      "A modern SaaS LMS application platform for an AI-driven learning app featuring real-time voice tutoring, user authentication, subscription billing, and session history. Built with Next.js, Supabase, and Clerk, it integrates clerk for payments and Vapi for interactive voice-based AI sessions. The UI is fully responsive and styled with Tailwind CSS and shadcn/ui, the UI is clean, responsive, and optimized for a seamless user experience across all devices.",
  },
  {
    href: "https://www.acecarrentals.in/",
    imageSrc: "/images/project1.png",
    title: "🚗 Ace Car Rentals – Self-Drive Car Booking Platform",
    techStack:
      "React.js • Node.js • Firebase • PayU • Nodemailer • Tailwind CSS",
    description:
      "A full-stack car rental website where users can book self-drive cars on a daily basis. Built with React, Node.js, and Firebase. Integrated PayU for payments and Nodemailer for email confirmations.",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.symbios&hl=en",
    imageSrc: "/images/project2.webp",
    title: "📱 Symbios Subscriber App – Broadband & WiFi Utility",
    techStack: "React Native • Expo • Tailwind CSS • .Net • SQL",
    description:
      "A mobile app to manage broadband and WiFi services: pay bills, view receipts, and get WhatsApp notifications. Built with React Native and .NET backend.",
  },
  {
    href: "https://movie-website-rose-alpha.vercel.app/",
    imageSrc: "/images/project3.png",
    title: "🎬 Movie Explorer – React-Based Movie Website",
    techStack: "React.js • TMDB API • Appwrite • Tailwind CSS",
    description:
      "A modern, responsive movie discovery website that showcases trending, top-rated, and upcoming movies using the TMDB API. Built with React.js and Appwrite for backend services and storage. Each movie has a dynamic route displaying its YouTube trailer, overview, cast with images, detailed info, and ratings. The app features search functionality, smooth navigation, and an engaging UI for a rich user experience.",
  },
  {
    href: "https://dog-finder-94e1.onrender.com",
    imageSrc: "/images/projectd.png",
    title: "🐾 Dog Finder – Dog Breed Discovery App",
    techStack: "React.js • Tailwind CSS • Framer Motion • Dog API",
    description:
      "Dog Finder is a responsive web application that helps users explore various dog breeds. Built with React.js and styled using Tailwind CSS, the app offers a clean and intuitive interface for browsing dog breeds, complete with images and brief descriptions. The app utilizes the Dog API to fetch breed data, ensuring a seamless user experience.",
  },
  {
    href: "https://agency-website-plum.vercel.app/",
    imageSrc: "/images/project4.png",
    title: "🏢 Agency Website – Modern Business Landing Page",
    techStack: "React.js • Tailwind CSS • Framer Motion",
    description:
      "A sleek, responsive landing page for a modern agency, built using React.js and styled with Tailwind CSS. Smooth animations are powered by Framer Motion to enhance user engagement. The design emphasizes clean layouts, service highlights, and strong visual hierarchy—ideal for showcasing agency portfolios or service-based businesses.",
  },
  {
    href: "https://rjrahul007.github.io/TinDog/",
    imageSrc: "/images/project5.png",
    title: "🐶 TinDog – Tinder for Dogs",
    techStack: "HTML • CSS • Bootstrap",
    description:
      "TinDog is a responsive landing page for a fictional app that helps dogs find companions—like Tinder, but for dogs. Built with HTML, CSS, and Bootstrap, it features a clean and modern layout with sections for features, pricing, testimonials, and download links. Ideal for showcasing UI layout and responsive design skills.",
  },
  {
    href: "https://portfolio-01bv.onrender.com/",
    imageSrc: "/images/project4.1.png",
    title: "💼 Developer Portfolio – Personal Portfolio Website",
    techStack: "React.js • Tailwind CSS • Framer Motion • Emailjs • Express.js",
    description:
      "A fully responsive personal portfolio website built with React.js and styled using Tailwind CSS, showcasing projects, skills, and contact information. The backend, powered by Node.js and Express.js, handles contact form submissions and routing. Designed to present your developer profile professionally with smooth navigation and a clean UI.",
  },

  {
    href: "https://rjrahul007.github.io/Etch-a-sketch/",
    imageSrc: "/images/project6.png",
    title: "🎨 Etch-a-sketch – Interactive Drawing Pad",
    techStack: "HTML • CSS • JavaScript",
    description:
      "Etch-a-Sketch is an interactive drawing pad where users can draw freely on a grid. Built using HTML, CSS, and JavaScript, it allows users to change colors, adjust grid sizes, and reset their artwork. The project demonstrates DOM manipulation, event handling, and dynamic styling.",
  },
  {
    href: "https://rjrahul007.github.io/Simon-Game/",
    imageSrc: "/images/project7.png",
    title: "🎮 Simon Game – Memory Challenge Game",
    techStack: "HTML • CSS • JavaScript",
    description:
      "The Simon Game is a fun and interactive memory challenge game built with HTML, CSS, and JavaScript. Players must follow and repeat an ever-growing sequence of colors and sounds, testing their memory and reaction time. This project demonstrates event handling, game logic, and DOM manipulation.",
  },
  {
    href: "https://rjrahul007.github.io/Roll-Dice/",
    imageSrc: "/images/project8.png",
    title: "🎲 Roll Dice – Simple Dice Rolling Game",
    techStack: "HTML • CSS • JavaScript",
    description:
      "A fun and interactive browser-based dice game built with vanilla JavaScript, HTML, and CSS. Each roll generates a random dice face for two players, making it a quick and engaging mini-game that demonstrates DOM manipulation and basic game logic.",
  },
  {
    href: "https://rjrahul007.github.io/rock-paper-sissors/",
    imageSrc: "/images/project9.png",
    title: "✊✋✌️ Rock Paper Scissors – Classic Game",
    techStack: "HTML • CSS • JavaScript",
    description:
      "A simple and fun Rock Paper Scissors game built with vanilla JavaScript, HTML, and CSS. The player competes against the computer with real-time result updates, visual cues, and score tracking. This project highlights core JavaScript logic, user interaction handling, and responsive design",
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
  projects,
};
