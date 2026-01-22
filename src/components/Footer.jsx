import React from 'react';
import MagneticEffect from './MagneticEffect';

const Footer = () => {
    return (
        <footer className="py-10 border-t border-slate-800 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent mb-2">
                            S.DHANUSH
                        </h3>
                        <p className="text-slate-500 text-sm italic">
                            "Engineering excellence through innovation and precision."
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-slate-400">
                        <MagneticEffect strength={0.2}>
                            <a href="#home" className="hover:text-primary transition-colors p-1">Home</a>
                        </MagneticEffect>
                        <MagneticEffect strength={0.2}>
                            <a href="#about" className="hover:text-primary transition-colors p-1">About</a>
                        </MagneticEffect>
                        <MagneticEffect strength={0.2}>
                            <a href="#skills" className="hover:text-primary transition-colors p-1">Skills</a>
                        </MagneticEffect>
                        <MagneticEffect strength={0.2}>
                            <a href="#projects" className="hover:text-primary transition-colors p-1">Projects</a>
                        </MagneticEffect>
                    </div>

                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} S.DHANUSH. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
