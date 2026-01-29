"use client";

import { motion } from "framer-motion";
import { GridContainer } from "./ui/GridContainer";
import { TechCard } from "./ui/TechCard";
import { Terminal } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-secondary/5">
            <GridContainer>
                <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6"
                    >
                        Narrative <span className="text-primary"> //</span>
                    </motion.h2>
                </div>

                <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                    <TechCard className="bg-black/40 border-primary/10">
                        <div className="prose prose-invert max-w-none text-center md:text-left">
                            <p className="text-xl text-gray-300 leading-relaxed font-light mb-6">
                                I am a first-year Computer Science student at <span className="text-white font-medium">LPU</span>,
                                obsessed with the intersection of <span className="text-primary">Artificial Intelligence</span> and <span className="text-primary">Cybersecurity</span>.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-accent" />
                                        The Mission
                                    </h3>
                                    <p className="text-gray-400">
                                        To build systems that are not just functional, but adaptive and resilient.
                                        My work focuses on creating digital experiences that feel "alive" – reacting to user input
                                        with precision and purpose.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-accent" />
                                        Beyond Code
                                    </h3>
                                    <p className="text-gray-400">
                                        When systems command down, I engage in strategic play (Chess) and explore speculative futures (Sci-Fi).
                                        I believe the best engineering comes from a deep understanding of complex systems, whether digital or narrative.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TechCard>
                </div>
            </GridContainer>
        </section>
    );
};
