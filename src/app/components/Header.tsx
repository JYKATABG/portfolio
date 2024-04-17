import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-between xl:px-0 px-4 items-center gap-4 text-lg text-white xl:py-4 pb-0">
                <h1 className="text-white text-lg font-bold">Jyliqn Marinov</h1>
                <ul className="flex justify-end items-center gap-4 text-lg text-white py-4">
                    <li>
                        <Link
                            href={"https://www.instagram.com/j.marinov7/"}
                            className="hover:opacity-45 duration-150 text-[1.5em] text-[#ff3682]">
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://github.com/JYKATABG"}
                            className="hover:opacity-45 duration-150 text-[1.5em]">
                            <FaGithub />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://www.linkedin.com/in/jyliqn-marinov-468489276/"}
                            className="hover:opacity-45 duration-150 text-[1.5em] text-[#0077b5]">
                            <FaLinkedin />
                        </Link>
                    </li>
                </ul>
            </motion.div >
        </>
    )
}

export default Header
