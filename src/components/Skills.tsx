"use client";

import { motion } from "framer-motion";
import { GridContainer } from "./ui/GridContainer";
import { TechCard } from "./ui/TechCard";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const data = [
    { subject: "Frontend", A: 95, fullMark: 100 },
    { subject: "Backend", A: 80, fullMark: 100 },
    { subject: "Security", A: 60, fullMark: 100 }, // Aspiring expert, so realistic score
    { subject: "Database", A: 70, fullMark: 100 },
    { subject: "Design", A: 85, fullMark: 100 },
    { subject: "DevOps", A: 50, fullMark: 100 },
];

const technologies = [
    { category: "Languages", items: ["JavaScript/TS", "Python", "C++", "SQL"] },
    { category: "Frameworks", items: ["Next.js 15", "React 19", "Tailwind v4", "FastAPI"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Postman"] },
];

const ChartWrapper = ({ data }: { data: any[] }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Or a loading spinner
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#9ca3af", fontSize: 12, fontFamily: "var(--font-mono)" }} />
                <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    fill="var(--accent)"
                    fillOpacity={0.4}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-[-20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <GridContainer>
                <div className="col-span-12 mb-12 flex justify-between items-end">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
                        >
                            Technical <br /> Matrix <span className="text-accent"> //</span>
                        </motion.h2>
                        <div className="h-1 w-24 bg-accent mt-6" />
                    </div>
                    <div className="hidden md:block text-right text-gray-500 font-mono text-xs">
                        <div>SYS.ANALYSIS.VISUALIZATION</div>
                        <div>LEVEL: 2 REACTIVE</div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-6 flex items-center justify-center min-h-[400px]">
                    <TechCard className="w-full h-[400px] flex items-center justify-center bg-black/40 border-accent/20">
                        {/* Chart needs to be client-side only to avoid SSR issues with Recharts ResponsiveContainer */}
                        <ChartWrapper data={data} />
                    </TechCard>
                </div>

                <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-mono flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full inline-block" />
                                {tech.category}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tech.items.map(item => (
                                    <span key={item} className="px-3 py-1 bg-white/5 border border-white/5 text-sm font-light text-gray-300 hover:text-white hover:border-accent/50 transition-colors cursor-crosshair">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GridContainer>
        </section>
    );
};
