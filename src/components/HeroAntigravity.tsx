"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { GridContainer } from "./ui/GridContainer";
import { Button } from "./ui/Button";
import { ArrowRight, Terminal } from "lucide-react";

export const HeroAntigravity = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [cursorText, setCursorText] = useState("");
    const fullText = "System.initialize(RajithSundar);";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCursorText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const bgX = useTransform(mouseX, [0, 1920], [-50, 50]);
    const bgY = useTransform(mouseY, [0, 1080], [-50, 50]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background selection:bg-primary/20">
            {/* Kinetic Background Mesh */}
            <motion.div
                className="absolute inset-0 z-0 opacity-20"
                style={{ x: bgX, y: bgY }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-30 blur-[100px]" />
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </motion.div>

            <GridContainer className="relative z-10 pt-20">
                <div className="col-span-12 lg:col-span-8 flex flex-col justify-center space-y-8">

                    {/* Status Line */}
                    <div className="flex items-center gap-3 text-primary font-mono text-sm tracking-wider">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-glow">{cursorText}<span className="animate-pulse">_</span></span>
                    </div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9]"
                    >
                        SYSTEM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                            ARCHITECT.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-xl border-l-2 border-primary/50 pl-6"
                    >
                        I build precise, kinetic, and autonomous web systems.
                        Moving beyond static templates to engineer digital experiences that live and breathe.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Button size="lg" className="rounded-none border-primary bg-primary/10 hover:bg-primary/20 text-primary font-mono uppercase tracking-widest relative group overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">Initialize <Terminal className="w-4 h-4" /></span>
                            <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                        </Button>

                        <Button variant="outline" size="lg" className="rounded-none border-white/20 text-gray-400 hover:text-white hover:border-white font-mono uppercase tracking-widest">
                            View Protocols
                        </Button>
                    </motion.div>
                </div>

                {/* Visual / Monitor Element */}
                <div className="col-span-12 lg:col-span-4 hidden lg:flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full h-[400px] border border-white/10 bg-black/50 backdrop-blur-md relative overflow-hidden flex items-center justify-center"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,240,255,0.05)_50%,transparent_100%)] animate-scan" style={{ backgroundSize: '100% 4px' }} />

                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-white font-mono">24</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">Projects</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary font-mono">98%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">Uptime</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </GridContainer>
        </section>
    );
};
