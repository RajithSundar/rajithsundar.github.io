"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowRight, Linkedin, Github, Instagram } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">

                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-secondary font-semibold tracking-wide uppercase text-sm md:text-base">
                            Welcome to my portfolio
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rajith Sundar</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-[600px]"
                    >
                        Aspiring Cyber Security Expert & Full Stack Developer based in Punjab, India.
                        Transforming ideas into secure, scalable, and flashy digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="https://www.linkedin.com/in/rajith-sundar" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="group">
                                Hire Me <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <div className="flex items-center gap-4 justify-center sm:justify-start">
                            <SocialLink href="https://github.com/RajithSundar" icon={<Github className="w-5 h-5" />} />
                            <SocialLink href="https://www.linkedin.com/in/rajith-sundar" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="https://www.instagram.com/itsrajithsundar/" icon={<Instagram className="w-5 h-5" />} />
                        </div>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-br from-primary via-accent to-secondary animate-spin-slow">
                        <div className="absolute inset-1 rounded-full bg-background z-10" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent z-20">
                            <Image
                                src="/face.jpg"
                                alt="Rajith Sundar"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-bounce duration-[3000ms]" />
                    <div className="absolute bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full border border-gray-800 bg-background/50 hover:bg-primary/20 hover:border-primary transition-all text-gray-400 hover:text-white"
    >
        {icon}
    </a>
);
