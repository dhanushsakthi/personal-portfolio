import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Terminal, Cpu, Shield, Download } from 'lucide-react';

import MagneticEffect from './MagneticEffect';

const Skills = () => {
    const skills = [
        { name: "Full Stack Development", desc: "Building responsive web applications using React, Node.js, and modern tools.", icon: <Code className="text-primary" /> },
        { name: "System Architecture", desc: "Designing scalable and maintainable system infrastructures.", icon: <Cpu className="text-primary" /> },
        { name: "Cloud Computing", desc: "Expertise in AWS/Azure for deployment and cloud-native solutions.", icon: <Cloud className="text-primary" /> },
        { name: "Database Management", desc: "Proficient in SQL and NoSQL database optimization.", icon: <Database className="text-primary" /> },
        { name: "IT Security", desc: "Implementing security best practices and infrastructure protection.", icon: <Shield className="text-primary" /> },
        { name: "DevOps & CI/CD", desc: "Streamlining development workflows with automation tools.", icon: <Terminal className="text-primary" /> }
    ];

    const certificates = [
        { title: "Azure Solutions Architect", file: "azure-cert.pdf" },
        { title: "AWS Cloud Practitioner", file: "aws-cert.pdf" },
        { title: "Full Stack Certification", file: "fullstack-cert.pdf" }
    ];

    return (
        <section id="skills" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Core Skills
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cinematic-card p-8 group hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold">{skill.name}</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-bold mb-10 text-center text-slate-200">Certifications</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col sm:flex-row items-center gap-6 hover:border-primary/30 transition-all"
                            >
                                <span className="text-lg font-medium text-slate-300">{cert.title}</span>
                                <MagneticEffect strength={0.2}>
                                    <a
                                        href={`/certificates/${cert.file}`}
                                        download
                                        className="flex items-center gap-2 text-primary hover:text-accent font-semibold group p-1"
                                    >
                                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                        Download
                                    </a>
                                </MagneticEffect>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
