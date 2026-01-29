"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95",
            outline: "border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary",
            ghost: "hover:bg-primary/10 text-foreground",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
