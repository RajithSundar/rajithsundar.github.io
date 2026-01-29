"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TechCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const TechCard = ({ children, className, hoverEffect = true }: TechCardProps) => {
    return (
        <motion.div
            className={cn(
                "relative bg-secondary/30 border border-white/5 p-6 backdrop-blur-sm overflow-hidden group",
                "clip-path-cutout", // We will add this custom utility shortly or define style inline
                className
            )}
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)", // Bottom-right cut
            }}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Technical markings */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-l border-b border-primary/20 pointer-events-none" />

            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)",
                }}
            />

            {children}
        </motion.div>
    );
};
