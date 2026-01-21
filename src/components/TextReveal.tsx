"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
}

export default function TextReveal({ children, className = "" }: TextRevealProps) {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = children.split(" ");

    return (
        <p ref={element} className={`flex flex-wrap leading-tight ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} range={[start, end]} progress={scrollYProgress}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word = ({ children, range, progress }: { children: string, range: [number, number], progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative mr-3 mt-2">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};
