"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>

      <p>
        After exploring my interest in the fields of app/UI development,
        robotics and aeronautics in the second year of my bachelors degree, I
        came to the realization that my real interest lied in Exploring Data and
        finding insights. I enrolled in a Data Science Bootcamp which acted as a
        stepping stone towards my journey as a data scientist. All the AI
        jargons immediately caught my interest, from the basics of data
        preprocessing to the complexities of hypothesis testing. My favorite
        part was the exploratory data analysis since it gave me the opportunity
        to find the hidden secrets of Data. A couple years into this world of
        trends and Insights, I found myself working for a FinTech company called
        Highradius which specialized in using AI to to solve financial problems
        and finding actionable insights for it's B2B clients. I leveraged my
        expertise in predictive modelling to build machine learning models to
        predict payment dates for invoices using Python, Java, and Tableau, and
        I gained the knowledge of deploying them on AWS and Azure servers. It
        was here where I gained the experience of working with cross-functional
        teams and presenting our ideas to stakeholders from all around the
        world. I also lead a team of interns overseeing their progress in the
        company. Currently, I'm pursuing a Masters in Data Science from
        Northeastern University in Boston. I
      </p>
    </motion.section>
  );
}
