import {
  sustainathon,
  igi,
  woodpecker,
  newsmonkey,
  engram,
  favicon,
  wellbeing,
  legal,
  saferoute,
} from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nodejs,
  react,
  python,
  tailwindcss,
  typescript,
  cpp,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "DSA",
  },
];

export const experiences = [
  {
    title:
      "Contributing Author, Intersecting Natural Language Processing and FinTech Innovations in Service Marketing",
    company_name: "IGI Global Publishing",
    icon: igi,
    iconBg: "#accbe1",
    date: "December 2024 - April 2025",
    points: [
      "Analyzed cutting-edge AI applications in fraud detection, algorithmic trading, and personalized banking",
      "Evaluated the impact of machine learning and NLP on credit scoring accuracy and financial inclusion.",
      "Discussed critical challenges including data privacy, algorithmic bias, and regulatory compliance.",
      "Explored future trends in AI-driven FinTech innovation.",
    ],
  },
  {
    title: "WoodPecker Hackathon",
    company_name: "WoodPecker Analytics and Services Private Limited",
    icon: woodpecker,
    iconBg: "#fbc3bc",
    date: "Jun 2024 - July 2024",
    points: [
      "Worked On a website for Predictive Maintenance for Trucks",
      "AI-driven predictive maintenance using python to foresee potential issues and avoid unexpected breakdowns.",
      "Developed the frontend using html, css and js",
      "Collaborated with cross-functional teams including other developers and designers.",
    ],
  },
  {
    title: "SUSTAIN-A-THON 2024",
    company_name: "Indian Oil Corporation ltd",
    icon: sustainathon,
    iconBg: "#b7e4c7",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AvaneshJ",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/avanesh-joshi-708701289/",
  },
];

export const projects = [
  {
    iconUrl: wellbeing,
    theme: "btn-back-red",
    name: "WellBeing+",
    description:
      "Developed a mobile application that offers AI-guided yoga posture correction, on-demand AI therapy sessions, and personalized music therapy to support emotional health.",
    link: "https://github.com/AvaneshJ/WellBeing",
  },
  {
    iconUrl: newsmonkey,
    theme: "btn-back-green",
    name: "NewsMonkey",
    description:
      "Created a web application using React.js providing news update across various categories, offering users a seamless browsing experience",
    link: "https://github.com/AvaneshJ/NewsMonkey",
  },
  {
    iconUrl: engram,
    theme: "btn-back-blue",
    name: "Engram",
    description:
      "Engram is a personalized AI-powered chat application that reflects your personality by analyzing diary entries.  ",
    link: "https://github.com/AvaneshJ/Engram",
  },
  {
    iconUrl: legal,
    theme: "btn-back-pink",
    name: "Legal Sentiment Analyser",
    description:
      "Basic Gen AI model used to do sentiment analysis of legal documents. It processes legal case texts to determine whether the outcome is positive (favorable), negative (unfavorable), or neutral (procedural).",
    link: "https://github.com/AvaneshJ/Legal_Sentiment-Analyser",
  },
  {
    iconUrl: favicon,
    theme: "btn-back-black",
    name: "Personal Portfolio",
    description:
      "My personal portfolio website showcasing my technical projects and professional experience, featuring interactive project demos and streamlined contact integration.",
    link: "https://avaneshportfolio.netlify.app/",
  },
  {
    iconUrl: saferoute,
    theme: "btn-back-black",
    name: "SafeRoute",
    description:
      "SafeRoute is designed to provide a safe and secure commuting experience for women by utilizing crowd-sourced data, real-time alerts, and emergency response features. This application enables users to find safe routes based on community reviews and access immediate assistance in distressing situations.",
    link: "https://github.com/AvaneshJ/SafeRoute/tree/master",
  },
];
