"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiEnvelope,
    HiMiniClipboardDocumentList
} from "react-icons/hi2";

const navLinks = [
    { name: 'home', icon: <HiHome /> },
    { name: 'about', icon: <HiUser /> },
    { name: 'certificates', icon: <HiMiniClipboardDocumentList /> },
    { name: 'projects', icon: <HiViewColumns /> },
    { name: 'contact', icon: <HiEnvelope /> },
]

export default function Nav() {

    const pathName = usePathname();

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center xl:justify-center gap-y-4 fixed
         h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
            <div className="text-white flex xl:flex-col xl:justify-center
             justify-between w-full items-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8
             backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
                {navLinks.map((link, index) => (
                    <Link
                        className={`${link.name === pathName && ' text-red-600'}
                        relative flex items-center group hover:text-red-600 transition-all duration-300`}
                        href={`#${link.name}`} key={index}>

                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-black items-center p-[6px] roundend-[5px]">
                                <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                            </div>
                        </div>

                        <div>
                            {link.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </motion.nav>
    )
}
