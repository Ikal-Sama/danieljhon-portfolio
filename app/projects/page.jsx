"use client";
import Project1 from "@/public/assets/images/project1.png";
import Project2 from "@/public/assets/images/project2.png";
import Project3 from "@/public/assets/images/project3.png";
import Project4 from "@/public/assets/images/project4.png";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const projects = [
  {
    num: "01",
    title: "Planner",
    description:
      "A project planner app, that tracks your activities and tasks.",
    image: Project1,
    href: "https://planner-9k3e.onrender.com/",
  },
  {
    num: "02",
    title: "Huntahan",
    description:
      "A web chat app, you can connect to your loved ones or friends whereever you are anytime anywhere",
    image: Project2,
    href: "https://huntahan.onrender.com/login",
  },
  {
    num: "03",
    title: "NextEcommerce",
    description:
      "A commerce app that sells fashion brands to all customers and pay online.",
    image: Project3,
    href: "https://next-eccomerce-blue.vercel.app/",
  },
  {
    num: "04",
    title: "Analytics Platform",
    description:
      "Analytics Dashboard landing page that monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.",
    image: Project4,
    href: "https://ikal-sama.github.io/react-agency/",
  },
];

export default function Projects() {
  return (
    <section>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {project.num}
                  </div>
                  <Link
                    href={project.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
                    flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width='600'
                    height='100'
                    className='shadow shadow-white'
                  />
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {project.title}
                </h2>
                {/* description */}
                <p className='text-white/60 '>{project.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
