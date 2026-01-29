"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden" id="contact">
            {/* Footer background effect */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                        Get in Touch
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-primary/50 transition-colors">
                            <MapPin className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-white">Location</h3>
                                <p className="text-gray-400">Punjab, India.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-primary/50 transition-colors">
                            <Phone className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-white">Phone</h3>
                                <p className="text-gray-400">74189-XXXXX</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-primary/50 transition-colors">
                            <Mail className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-white">Email</h3>
                                <p className="text-gray-400">rajithsundarpillai@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name</label>
                                    <input type="text" placeholder="Your name" className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email</label>
                                    <input type="email" placeholder="Your email" className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea placeholder="How can I help you?" rows={4} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600 resize-none" />
                            </div>
                            <Button size="lg" className="w-full">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                <p>© 2024 Rajith Sundar. All rights reserved.</p>
            </footer>
        </section>
    );
};
