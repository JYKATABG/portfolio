import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%"
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const slideControls = useAnimation();
    const mainControls = useAnimation();


    useEffect(() => {
        console.log(isInView);

        if (!isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    })

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#6305dc",
                    zIndex: 20
                }}
            />
        </div>
    )
}