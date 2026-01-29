"use client";

import { motion } from "framer-motion";
import { GridContainer } from "./ui/GridContainer";
import { TechCard } from "./ui/TechCard";
import { GitCommit, GraduationCap, Briefcase } from "lucide-react";

const timeline = [
    {
        year: "2024-",
        title: "B.Tech Computer Science (AI-ML)",
        org: "LPU University, Punjab, India",
        desc: "",
        icon: GraduationCap,
        type: "education"
    },
    {
        year: "2021-2023",
        title: "A-Levels (2As, 2Bs) + CAE A",
        org: "Addu High School, S.Hithadhoo, Maldives",
        desc: "",
        icon: GraduationCap,
        type: "education"
    },
    {
        year: "-2021",
        title: "O-Levels (6A*s)",
        org: "Feydhoo School, S.Feydhoo, Maldives",
        desc: "",
        icon: GraduationCap,
        type: "education"
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            <GridContainer>
                <div className="col-span-12 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
                    >
                        System Logs <span className="text-secondary"> //</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-secondary mt-6" />
                </div>

                <div className="col-span-12 lg:col-span-8 lg:col-start-3 relative">
                    {/* Central Track */}
                    <div className="absolute left-[30px] md:left-[50%] top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${!isLeft ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Node */}
                                    <div className="absolute left-[30px] md:left-[50%] md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    </div>

                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                                    >
                                        <TechCard className="p-6 md:p-8" hoverEffect={true}>
                                            <div className={`flex items-center gap-2 mb-2 text-xs font-mono text-primary uppercase tracking-widest ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <item.icon className="w-4 h-4" />
                                                {item.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                            <h4 className="text-gray-400 text-sm font-medium mb-4">{item.org}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </TechCard>
                                    </motion.div>

                                    {/* Empty space for the other side */}
                                    <div className="hidden md:block md:w-[calc(50%-40px)]" />
                                </div>
                            );
                        })}
                    </div>

                    {/* End Node */}
                    <div className="absolute left-[30px] md:left-[50%] bottom-[-20px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-white/20" />
                </div>
            </GridContainer>
        </section>
    );
};
