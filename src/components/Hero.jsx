import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

import MagneticEffect from './MagneticEffect';
import Seahorse from './Seahorse';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center animate-subtle-float"
                >
                    <h2 className="text-primary font-medium tracking-[0.4em] uppercase mb-10 text-xs sm:text-sm md:text-base">
                        AI & Data Science Specialist
                    </h2>
                    <h1 className="text-6xl md:text-9xl font-extrabold mb-10 leading-tight tracking-tighter text-white font-display flex flex-col items-center justify-center">
                        <Seahorse className="text-primary mb-6 animate-subtle-float" size={84} />
                        <div>Dhanush <span className="text-primary">Sakthi</span></div>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                        Engineering student at AVS Engineering College, Salem. <br className="hidden md:block" />
                        Designing intelligent solutions and professional digital experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <MagneticEffect>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-primary flex items-center gap-3 group"
                        >
                            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                            Download Resume
                        </a>
                    </MagneticEffect>
                    <MagneticEffect>
                        <a
                            href="#contact"
                            className="btn-outline flex items-center gap-3"
                        >
                            <Mail size={18} />
                            Contact Me
                        </a>
                    </MagneticEffect>
                </motion.div>
            </div>

            {/* Subtlest scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
