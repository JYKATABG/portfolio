'use client'

import { motion } from "framer-motion";

export default function About() {

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        },
        hidden: {
            opacity: 0,
            y: 150,
        }
    }

    const paragraphVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        hidden: {
            opacity: 0,
            x: 150
        }
    }

    return (
        <section id="about" className="flex flex-col justify-center xl:w-[1366px] m-auto gap-5 xl:px-0 px-5">
            <motion.h1
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center xl:text-3xl text-xl font-bold xl:mb-[3em] mb-[0.5em]">
                ABOUT ME
            </motion.h1>
            <motion.div
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                className="xl:text-xl text-[15px] flex flex-col gap-5 pb-3">
                <motion.p variants={paragraphVariants}>My coding journey commenced in 2022 when I enrolled in my first course at SoftUni - <span>Programming Basics with JavaScript - march 2022</span></motion.p>
                <motion.p variants={paragraphVariants}>I've had the opportunity to delve into a variety of exciting new technologies, including React, Angular, Node.js, Express, MongoDB, as well as HTML and CSS.</motion.p>
                <motion.p variants={paragraphVariants}>I gained valuable knowledge from the instructors and the supportive community they've cultivated.
                    Additionally, I dedicated time to watching numerous YouTube videos, studying documentation, and actively
                    building projects to deepen my understanding of various concepts and technologies.</motion.p>
                <motion.p variants={paragraphVariants}>I recently enrolled in the interns and team leads program organized by SoftUni.
                    During the program, I had the opportunity to collaborate with a fantastic team on a project called MI CASA SU CASA,
                    focused on booking. It was a rewarding experience working with such a talented group.
                </motion.p>
                <motion.p variants={paragraphVariants}>I'm currently focused on continuing to work on projects to further enhance my skills and acquire new knowledge.</motion.p>
            </motion.div>
        </section>
    )
}