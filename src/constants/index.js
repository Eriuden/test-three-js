import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "à propos",
      title: "A propos",
    },
    {
      id: "emploi",
      title: "Emploi",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Brouzouf company",
      icon: blabla,
      iconBg: "#383E56",
      date: "mai 2018-mars 2023",
      points: [
        "Développement d'application full-stack.",
      ],
    },
    
    
  ];
  
  const témoignages = [
    {
      témoignages:
        "blabla.",
      name: "Jean Duterroir",
      designation: "Guérandais",
      company: "Salt incorporated",
      image: "",
    },
  ];
  
  const projets = [
    {
      name: "The desocialiszer network",
      description:
        "Réseau social en MERN.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "MERN",
          color: "pink-text-gradient",
        },
      ],
      image: blabla,
      source_code_link: "",
    },
    {
      name: "Stockhausse",
      description:
        "Gestion des stocks en Next.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Next",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blabla,
      source_code_link: "",
    },
    {
      name: "Onwine",
      description:
        "e-commerce vins en MERN.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blabla,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, témoignages, projets };