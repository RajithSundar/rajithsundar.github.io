"use client";

import { motion } from "framer-motion";
import { Palette, Code2, BugPlay } from "lucide-react";

const services = [
    {
        title: "Web Design",
        description: "I offer web design services to create visually compelling, user-friendly websites that make a strong impression. My focus is on blending aesthetics with functionality.",
        icon: <Palette className="w-10 h-10 text-primary" />,
        gradient: "from-primary/20 to-accent/20"
    },
    {
        title: "Web Development",
        description: "I provide web development services to bring your ideas to life online. Whether you need a sleek, user-friendly website or a custom-built solution, I’m here to create something that truly represents your brand.",
        icon: <Code2 className="w-10 h-10 text-secondary" />,
        gradient: "from-secondary/20 to-primary/20"
    },
    {
        title: "Software Testing",
        description: "I offer personalized software testing to make sure your applications run smoothly and meet user expectations. From finding bugs to assessing performance, I help catch issues early.",
        icon: <BugPlay className="w-10 h-10 text-accent" />,
        gradient: "from-accent/20 to-primary/20"
    }
];

export const Services = () => {
    return (
        <section className="py-20 bg-background relative" id="services">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Services
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-2xl bg-gradient-to-br border border-white/5 hover:border-white/20 transition-all group overflow-hidden relative`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-background/50 rounded-xl inline-block backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
