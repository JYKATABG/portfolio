"use client"

import { MdEmail } from "react-icons/md";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export default function Contact() {

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


    return (
        <section
            id="contact"
            className="flex flex-col xl:justify-evenly items-center justify-end gap-5 xl:w-[1366px]
            xl:m-auto mt-[34em] mb-[7em] xl:px-0 px-">
            <h1 className="text-center xl:text-[2.5em] text-2xl font-bold xl:mb-[2em] mb-[1em]">CONTACT</h1>
            <motion.div
                className="flex xl:flex-row flex-col justify-between items-center"
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                variants={variants}
            >
                <div className="xl:w-[600px] w-[350px] xl:h-[340px] flex flex-col xl:gap-0 gap-5 justify-between">
                    <Reveal>
                        <p className="xl:text-xl text-lg xl:max-w-[25em] max-w-[19em] text-center">If I fit the profile of the candidate you're seeking,
                            I welcome the opportunity to discuss how I can contribute.
                            Please feel free to reach out via email, and we can arrange a time to discuss further.</p>
                    </Reveal>
                    <Reveal>
                        <div className="flex items-center xl:justify-start justify-center xl:gap-5 gap-5 w-[350px] xl:text-xl text-[16px] xl:mb-0 mb-[2em]">
                            <MdEmail />
                            <p className="font-bold">jylian.dinkov.marinov@gmail.com</p>
                        </div>
                    </Reveal>
                </div>
                <form className="flex flex-col gap-5 xl:w-[600px] w-[335px] mx-auto">
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-transparent border-white border p-2" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent border-white border p-2" />
                    <textarea
                        placeholder="Message"
                        className="bg-transparent border-white border p-2 h-[150px] resize-none" />
                    <button className="bg-[#6305dc] p-2">Submit</button>
                </form>
            </motion.div>
        </section>
    )
}