"use client";

import { motion } from "framer-motion";
import { TechCard } from "./ui/TechCard";
import { GridContainer } from "./ui/GridContainer";
import { ArrowUpRight, Github, Activity, Archive, Clock } from "lucide-react";
import { Button } from "./ui/Button";

const projects = [
    {
        title: "InstaReel Transcriber",
        problem: "Manual transcription of social media content is slow and error-prone.",
        stack: ["Python", "FastAPI", "OpenAI Whisper"],
        status: "live",
        link: "https://github.com/RajithSundar/InstaReelTranscriber",
        repo: "https://github.com/RajithSundar/InstaReelTranscriber"
    },
    {
        title: "Portfolio System",
        problem: "Traditional portfolios lack kinetic identity and fail to demonstrate system-level thinking.",
        stack: ["Next.js 15", "Tailwind v4", "Framer Motion"],
        status: "live",
        link: "https://rajithsundar.github.io",
        repo: "https://github.com/RajithSundar/rajithsundar.github.io"
    },
    {
        title: "Secure Auth Project",
        problem: "Implementing robust authentication standards from scratch to understand security protocols.",
        stack: ["C++", "Cryptography", "System Design"],
        status: "dev",
        link: "https://github.com/RajithSundar/SecureAuthProject",
        repo: "https://github.com/RajithSundar/SecureAuthProject"
    }
];

const statusConfig = {
    live: { icon: Activity, color: "text-green-400", label: "System Operational" },
    dev: { icon: Clock, color: "text-yellow-400", label: "In Development" },
    archived: { icon: Archive, color: "text-gray-500", label: "Archived Protocol" }
};

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <GridContainer>
                <div className="col-span-12 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
                    >
                        Capabilities <span className="text-primary"> //</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-primary mt-6" />
                </div>

                <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon;
                        const statusColor = statusConfig[project.status as keyof typeof statusConfig].color;
                        const statusLabel = statusConfig[project.status as keyof typeof statusConfig].label;

                        return (
                            <TechCard key={index} className="flex flex-col h-full bg-secondary/20">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold font-mono text-white">{project.title}</h3>
                                    <a href={project.repo} aria-label="GitHub Repo" className="text-gray-500 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Status */}
                                <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-6 ${statusColor}`}>
                                    <StatusIcon className="w-4 h-4" />
                                    {statusLabel}
                                </div>

                                {/* Problem */}
                                <div className="mb-6 flex-grow">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">Problem Statement</div>
                                    <p className="text-gray-300 leading-relaxed text-sm">{project.problem}</p>
                                </div>

                                {/* Stack */}
                                <div className="mb-8">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-mono">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 text-xs font-mono text-primary rounded-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <Button variant="ghost" size="sm" className="w-full justify-between group px-0 hover:bg-transparent hover:text-primary">
                                        View Implementation <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </div>
                            </TechCard>
                        );
                    })}
                </div>
            </GridContainer>
        </section>
    );
};
