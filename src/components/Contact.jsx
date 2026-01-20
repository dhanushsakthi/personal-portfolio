import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { icon: <Phone className="text-primary" />, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
        { icon: <Mail className="text-primary" />, label: "Email", value: "john.doe@engineering.com", href: "mailto:john.doe@engineering.com" },
    ];

    const socials = [
        { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Get In Touch
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {contactInfo.map((info) => (
                            <a
                                key={info.label}
                                href={info.href}
                                className="flex items-center gap-6 p-6 cinematic-card group hover:translate-x-2 transition-all"
                            >
                                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{info.label}</p>
                                    <p className="text-xl font-bold text-slate-200">{info.value}</p>
                                </div>
                            </a>
                        ))}

                        <div className="pt-8">
                            <p className="text-slate-400 mb-6 font-medium">Follow Me</p>
                            <div className="flex gap-6">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-300"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="cinematic-card p-10 bg-slate-900/50"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
