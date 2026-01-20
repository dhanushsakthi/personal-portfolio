import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, PenTool } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Target className="text-primary" />,
            title: "Precision Engineering",
            desc: "Delivering high-quality solutions with attention to detail and efficiency."
        },
        {
            icon: <Lightbulb className="text-primary" />,
            title: "Innovative Mindset",
            desc: "Always exploring new technologies and approaches to solve complex problems."
        },
        {
            icon: <PenTool className="text-primary" />,
            title: "Problem Solver",
            desc: "Analytical thinker dedicated to architectural excellence and clean code."
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        I am an Artificial Intelligence and Data Science student at AVS Engineering College, Salem.
                        Currently in my III-Year (2023-2027), I am passionate about data-driven insights and
                        intelligent systems. Born on October 15, 2005, and hailing from Nagapattinam, I am
                        dedicated to mastering the field of engineering through innovation and precision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cinematic-card p-10 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
