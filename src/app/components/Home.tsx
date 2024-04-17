"use client"

import Header from "./Header";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Home() {

    const [text] = useTypewriter({
        words: [' Jyliqn Marinov', ' Front-End Developer'],
        typeSpeed: 120,
        deleteSpeed: 130,
        loop: false
    })

    return (
        <section className="w-[1366px] m-auto">
            <Header />
            <h1 className="text-3xl">
                I'am
            </h1>
            <span className="text-2xl font-bold">
                {text}
            </span>
            <Cursor />
        </section>
    )
}
