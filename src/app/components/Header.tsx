import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="flex justify-around items-center gap-4 text-lg text-white p-4">
                <h1 className="text-white text-lg font-bold">Jyliqn Marinov</h1>
                <ul className="flex justify-end items-center gap-4 text-lg text-white p-4">
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
            </div >
        </>
    )
}

export default Header
