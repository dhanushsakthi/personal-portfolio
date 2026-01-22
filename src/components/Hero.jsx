import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

import MagneticEffect from './MagneticEffect';

const Hero = () => {
    return (
        <section id="home" className="relative min-height-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
            <div className="hero-glow" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-semibold tracking-widest uppercase mb-4">
                        Welcome to my professional space
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
                        I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">S.DHANUSH</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Artificial Intelligence and Data Science Student at AVS Engineering College, Salem. (2023-2027)
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <MagneticEffect>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-primary flex items-center gap-2 group"
                        >
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            Download Resume
                        </a>
                    </MagneticEffect>
                    <MagneticEffect>
                        <a
                            href="#contact"
                            className="btn-outline flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Contact Me
                        </a>
                    </MagneticEffect>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
