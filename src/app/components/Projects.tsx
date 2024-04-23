"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "./Reveal";

export default function Projects() {

    const variantUp = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        },
        hidden: {
            opacity: 0,
            y: -150
        },
    }

    return (
        <section id="projects" className="flex flex-col justify-evenly xl:w-[1366px] m-auto relative">
            <motion.h1
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeInOut" }}

                className="text-center xl:text-[2.5em] text-2xl font-bold xl:mb-[2em] mb-[2.5em]">
                PROJECTS
            </motion.h1>
            <motion.div
                variants={variantUp}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className="grid xl:grid-cols-2 relative grid-cols-1 gap-[3.2em] mt-[3em] mx-auto justify-center xl:w-[950px]">
                <div>
                    <div className="bg-gray-600 xl:w-[470px] w-[340px] m-auto pt-10 xl:px-10 px-7 h-[260px] rounded-xl justify-between">
                        <div
                            className="h-full  overflow-hidden">
                            <Image
                                src={"/images/projects/hansa.png"}
                                alt="hansa-recipe-app"
                                width={300}
                                height={300}
                                className="w-auto h-full cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Reveal>
                            <div className="flex items-center gap-[1.2em] xl:w-[470px] w-[340px] m-auto mt-5">
                                <h2 className="text-xl shrink-0">Hansa App</h2>
                                <div className="w-full border bg-white opacity-[.3]"></div>
                                <Link href={"https://github.com/JYKATABG/softuni-recipe-project"}>
                                    <FaGithub className="text-[2em]" />
                                </Link>
                            </div>
                        </Reveal>
                        <div className="xl:w-[470px] w-[340px] m-auto">
                            <Reveal>
                                <span className="text-[16.5px] text-[#66dbfb]">React -{">"} React Router -{">"} React Hook Form -{">"} HTML && CSS</span>
                            </Reveal>
                            <Reveal>
                                <p className="leading-6 mt-3">
                                    This is my inaugural CRUD React app designed for sharing recipes.
                                    Users can create, view, edit, and like recipes, all accessible through the profile page.
                                    While the app is fundamental in its design, it serves as the culmination of my React course,
                                    created specifically for the final exam.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div
                >
                    <div className="bg-gray-600 xl:w-[470px] w-[340px] m-auto pt-10 px-10 h-[260px] rounded-xl justify-between">
                        <div
                            // whileHover={{ scale: 1.1, rotateY: 10 }}
                            className="h-full  overflow-hidden">
                            <Image
                                src={"/images/projects/secondride.png"}
                                alt="hansa-recipe-app"
                                width={300}
                                height={300}
                                className="w-auto h-full cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Reveal>
                            <div className="flex items-center gap-[1.2em] xl:w-[470px] w-[340px] mt-5">
                                <h2 className="text-xl shrink-0">SecondRide</h2>
                                <div className="w-full border bg-white opacity-[.3]"></div>
                                <Link href={"https://github.com/JYKATABG/Angular-SecondRide-project"}>
                                    <FaGithub className="text-[2em]" />
                                </Link>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="xl:w-[470px] w-[340px]">
                                <Reveal>
                                    <span className="text-[16.5px] text-[#de0030]">Angular -{">"} TypeScript -{">"} HTML && CSS</span>
                                </Reveal>
                                <p className="leading-6 mt-3">
                                    This is my first Angular project and also my first endeavor into creating a platform for selling second-hand cars.
                                    Users can easily create, edit, and delete car offers with images and details.
                                    Offers are displayed in a catalog, and users can mark favorites for quick access.
                                    It's a basic app developed for my final Angular course assessment.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </motion.div>
        </section >
    )
}