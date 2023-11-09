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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Developer",
      company_name: "Ventasoft",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2021 - Aug 2021",
      points: [
        "My experience in this work field programming, testing with cypress (testing platform) where I carried out multiple error scenarios that I identified in the software, FRONT END web development, knowledge in js, css, html, workbench.",
      ],
    },
    {
      title: "Technical Suppor Level2",
      company_name: "DinamicApps",
      icon: tesla,
      iconBg: "#383E56",
      date: "Sept 2021 - Feb 2022",
      points: [
        "My Experience in this field of work as level 2 technical support where I had interaction via telephone with clients where they expressed errors in the software and I proceeded to resolve them, I managed Telerik Report formats, GitLab (There I uploaded changes in the database with the formats). I used SQL where I made queries, Insert's etc... and updates in the software, I was in charge of updating the software of each client when a new update was uploaded both in the database and in the main software folders.",
      ],
    },
    
    {
      title: "Customer Service",
      company_name: "Sutherland",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2022 - Present",
      points: [
        "Customer service · Telecommunications",
      ],
    },
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
      name: "Own Store",
      description:
        "This was my second WebSite, I based about a Store where you can see differents T-shirt about Programming languages",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://rubenstore.netlify.app/",
    },
    {
      name: "To Do´s",
      description:
        "Web application that enables users allow to check his task of the day.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://taskofthedayra.netlify.app/",
    },
    {
      name: "GPT3",
      description:
        "Web page based about new technology GPT3.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://gpt3raam.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };