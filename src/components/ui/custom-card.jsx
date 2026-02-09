"use client";

import { motion } from 'framer-motion';

const CustomCard = ({ children, className = "", whileHover = { y: -5 }, ...props }) => (
    <motion.div
        whileHover={whileHover}
        className={`bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-100 transition-colors ${className}`}
        {...props}
    >
        {children}
    </motion.div>
);

export default CustomCard;
