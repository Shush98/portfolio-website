import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import Premier_UI from "@/public/Premier_UI.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Master of Science in Data Science",
    location: "Northeastern University, Boston",
    description:
      "Graduated with a GPA of 3.6.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    location: "KIIT University, Bhubaneswar",
    description:
      "Graduated with a CGPA of 8.5, which is equivalent to a first-class honours degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  
  {
    title: "High School Degree",
    location: "Ryan International School, Raipur",
    description:
      "Scored 85% in the Central Board of Secondary Education (CBSE), which is the A-level equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Matriculation Degree",
    location: "St. Xavier's High School, Raipur",
    description:
      "Completed my matriculation degree with 93% in the Indian Certificate School Examination (ICSE), which is the GCSE equivalent in India.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
] as const;

export const projectsData = [
  {
    id: "B2B@AI",
    title: "AI Powered B2B Invoice Management Dashboard",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    id: "Insurance@AI",
    title: "Insurance Premium prediction",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    id: "FinChatbot@LLM",
    title: "Financial Advisory chatbot",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    id: "Credit@AI",
    title: "Credit card fraud detection",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    id: "Deepfake@AI",
    title: "Deepfake detection",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    id: "Flight@AI",
    title: "Flight delay prediction(Spark)",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    id: "Supply@AI",
    title: "Supply chain forecasting",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    id: "Premier@UI",
    title: "Premier league dashboard",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Premier_UI,
  },
  {
    id: "MedChatbot@LLM",
    title: "Medical Dialogues chatbot",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    id: "Music@LLM",
    title: "Music generation using Fine Tuned LLM",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
