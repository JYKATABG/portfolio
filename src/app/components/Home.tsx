"use client"

import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

import { animate, motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode, FaGitAlt, FaArrowDown } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { CgGym } from "react-icons/cg";

import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoReact,

} from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";


export default function Home() {

    const [text] = useTypewriter({
        words: [' Jyliqn Marinov', ' Front-End Developer'],
        typeSpeed: 120,
        deleteSpeed: 130,
        loop: false
    })

    const techStack = [
        { icon: <IoLogoHtml5 className="text-[#f06b31]" /> },
        { icon: <IoLogoCss3 className="text-[#41b4e1]" /> },
        { icon: <IoLogoJavascript className="text-[#f7e025]" /> },
        { icon: <BiLogoTypescript className="text-[#007acc]  xl:text-[33px] text-[28px]" /> },
        { icon: <IoLogoReact className="text-[#66dcfb]" /> },
        { icon: <TbBrandNextjs className="xl:text-[33px] text-[28px]" /> },
        { icon: <FaGitAlt className="text-[#f15536] xl:text-[33px] text-[28px]" /> },
    ]

    const variants = {
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        },
        hidden: { opacity: 0 }
    }

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollArrow: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,

            }
        }
    }

    return (
        <section className="xl:w-[1366px] relative m-auto flex flex-col" id="home">
            <Header />
            <div className="flex xl:flex-row flex-col-reverse justify-between items-center xl:m-auto w-full">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={textVariants}
                    className="flex flex-col xl:gap-[1em] gap-[1.2em] items-center xl:items-start"
                >
                    <motion.h1 className="text-[1.5em] xl:text-[2em]" variants={textVariants}>
                        Hello, I'am
                    </motion.h1>
                    <motion.span className="text-[1.5em] xl:text-[2.5em] font-bold" variants={textVariants}>
                        {text}
                        <Cursor />
                    </motion.span>
                    <motion.ul className="flex flex-col gap-7 xl:text-xl text-md" variants={textVariants}>
                        <motion.li className="flex items-center gap-5" variants={textVariants}>
                            <FaLocationDot className="text-red-500 xl:text-3xl text-lg" />
                            Currently living in Bulgaria
                        </motion.li>
                        <motion.li className="flex items-center gap-5 xl:w-max-[5em]" variants={textVariants}>
                            <IoSchool className="text-[#ffa000] xl:text-3xl text-lg" />
                            Graduated SoftUni JavaScript Developer
                        </motion.li>
                        <motion.li className="flex items-center gap-5" variants={textVariants}>
                            <CgGym className="text-gray-600 xl:text-3xl text-lg" />
                            Training calistenics
                        </motion.li>
                        <motion.li className="flex items-center gap-5" variants={textVariants}>
                            <FaLaptopCode className="xl:text-3xl text-lg" />
                            Having an experience of building projects
                        </motion.li>
                    </motion.ul>
                    <motion.h2 className="text-center font-bold self-center">with</motion.h2>
                    <motion.ul initial="hidden" animate="visible" variants={variants} className="flex w-[480px] xl:max-w-[480px] max-w-[18em] items-center justify-between xl:text-[25px] text-[20px]">
                        {techStack.map((link) => (
                            <motion.li variants={variants}>
                                {link.icon}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div className="flex justify-start gap-5 mt-5" variants={textVariants}>
                        <Link href={"#projects"}>
                            <button className="bg-white text-sm xl:text-lg text-black py-3 px-5 rounded-xl">See All Projects</button>
                        </Link>
                        <Link href={"#contact"}>
                            <button className="border text-sm xl:text-lg border-gray-200 py-3 px-5 rounded-xl">Contact Me</button>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="xl:mb-0 mb-10"
                >
                    <Image
                        // src={"/images/samurai.jpg"}
                        src={"/images/profile.jpg"}
                        alt="my-image"
                        width={300}
                        height={300}
                        className="shadow-2xl rounded-[50%] xl:h-[400px] h-[180px] xl:w-[400px] w-[180px] my-5 xl:my-0 "
                    />
                </motion.div>
            </div>
            <motion.div>
                <FaArrowDown className="text-3xl absolute hidden xl:block bottom-10 right-[50%]" />
            </motion.div>
        </section>
    )
}
