"use client";

import { HTMLMotionProps, motion } from "motion/react";

type ButtonProps = HTMLMotionProps<"button">;

function Button({ children, className, ...props }: ButtonProps) {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
                mass: 1,
            }}
            className={`btn ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}

export default Button;
