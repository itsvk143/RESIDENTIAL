"use client";

import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, center = true, light = false, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mb-16 ${center ? 'text-center' : 'text-left'} ${className}`}
    >
        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-slate-900'} tracking-tight`}>
            {title}
        </h2>
        <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 mb-6 ${center ? 'mx-auto' : ''}`}></div>
        {subtitle && <p className={`text-lg md:text-xl max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-slate-600'}`}>{subtitle}</p>}
    </motion.div>
);

export default SectionHeading;
