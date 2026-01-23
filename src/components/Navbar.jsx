import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Seahorse from './Seahorse';

import MagneticEffect from './MagneticEffect';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Basic scroll spy for active section
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
            <div className="container-custom">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Seahorse className="text-primary animate-subtle-float" size={28} />
                        <span className="text-xl font-bold tracking-tight text-white uppercase">
                            Dhanush <span className="text-primary">Sakthi</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <MagneticEffect key={link.name} strength={0.1}>
                                <a
                                    href={link.href}
                                    className={`nav-pill text-sm font-medium transition-colors ${activeSection === link.id
                                        ? 'nav-pill-active'
                                        : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </MagneticEffect>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/5 py-4 px-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all ${activeSection === link.id
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
