import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import MagneticEffect from './MagneticEffect';

const Projects = () => {
    const projects = [
        {
            title: "Automated Deployment Pipeline",
            desc: "A custom CI/CD pipeline using Jenkins and Docker to automate the deployment of microservices with zero downtime.",
            tech: ["Jenkins", "Docker", "Kubernetes", "Shell Scripting"],
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            title: "Network Security Monitor",
            desc: "Real-time network traffic analysis and anomaly detection system built with Python and machine learning.",
            tech: ["Python", "Flask", "Scikit-Learn", "Wireshark"],
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            title: "Smart Infrastructure Hub",
            desc: "IoT platform for monitoring and controlling industrial equipment with real-time data visualization.",
            tech: ["React", "Node.js", "MQTT", "InfluxDB"],
            github: "https://github.com",
            demo: "https://example.com"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Featured Projects
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cinematic-card group flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                                <img
                                    src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800`}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <MagneticEffect strength={0.15}>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors p-1"
                                        >
                                            <Github size={18} />
                                            Code
                                        </a>
                                    </MagneticEffect>
                                    <MagneticEffect strength={0.15}>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors p-1"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    </MagneticEffect>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
