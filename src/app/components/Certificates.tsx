'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certificates() {

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

    const variantBottom = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        },
        hidden: {
            opacity: 0,
            scale: 1.1,
            y: 150
        }
    }

    return (
        <>
            <section id="certificates" className="xl:w-[1366px] m-auto flex flex-col justify-center items-center">
                <h1 className="xl:mb-[6em] mb-[3em] text-3xl font-bold uppercase">Certificates</h1>
                <motion.div
                    className="xl:flex grid xl:flex-row justify-around grid-cols-2 gap-10 w-full px-3" 
                    variants={variantUp}
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    exit={{ opacity: 0 }}>
                    <motion.div
                        whileHover={{ scale: 1.10, y: -50 }}
                        variants={variantUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Image
                            src={"/images/certificates/diploma.png"}
                            alt="diploma"
                            width={300}
                            height={300}
                            className="cursor-pointer rounded-md hover:shadow-2xl xl:w-[300px] w-[150px]"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, y: -50 }}
                        variants={variantBottom}
                        initial="hidden"
                        animate="visible"
                    >

                        <Image
                            src={"/images/certificates/html&css.png"}
                            alt="html&css"
                            width={300}
                            height={300}
                            className="cursor-pointer rounded-md hover:shadow-2xl xl:w-[300px] w-[150px]"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, y: -50 }}
                        variants={variantUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Image
                            src={"/images/certificates/internProgram.png"}
                            alt="internProgram"
                            width={308}
                            height={308}
                            className="cursor-pointer rounded-md hover:shadow-2xl xl:w-[300px] w-[150px]"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, y: -50 }}
                        variants={variantBottom}
                        initial="hidden"
                        animate="visible"
                    >
                        <Image
                            src={"/images/certificates/reactjs.png"}
                            alt="reactjs"
                            width={300}
                            height={300}
                            className="cursor-pointer rounded-md hover:shadow-2xl xl:w-[300px] w-[150px]"
                        />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}