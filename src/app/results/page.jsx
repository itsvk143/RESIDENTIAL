"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Trophy, Medal, Star, Target } from 'lucide-react';

const ResultsPage = () => {
    const stats = [
        { label: "Total Selections", value: 120, plus: true },
        { label: "AIIMS Selections", value: 15, plus: false },
        { label: "Govt. Medical Seats", value: 85, plus: true },
        { label: "Above 600 Marks", value: 45, plus: true },
    ];

    const toppers = [
        { name: "Aditya Kumar", rank: "AIR 142", marks: "705/720", exam: "NEET 2024", image: "" },
        { name: "Priya Sharma", rank: "AIR 356", marks: "698/720", exam: "NEET 2024", image: "" },
        { name: "Rohan Das", rank: "AIR 892", marks: "685/720", exam: "NEET 2024", image: "" },
        { name: "K. Venkat", rank: "AIR 1205", marks: "680/720", exam: "NEET 2024", image: "" },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans">
            {/* Hero Stats */}
            <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-bold mb-6">
                            <Trophy size={18} />
                            <span>Excellence Delivered</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Our <span className="text-emerald-400">Hall of Fame</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-16">
                            Consistency is our habit. Year after year, COE students prove their mettle in the toughest medical entrance exams.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">
                                    <CountUp end={stat.value} duration={2.5} />{stat.plus && "+"}
                                </div>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Rankers */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Top Rankers 2024</h2>
                        <div className="h-1 w-20 bg-emerald-500 rounded-full mt-2"></div>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-600">NEET 2024</span>
                        <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-400">JEE Main 2024</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {toppers.map((student, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group"
                        >
                            <div className="relative h-64 bg-slate-200 overflow-hidden">
                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-white text-xl font-bold">{student.name}</h3>
                                        <p className="text-emerald-300 font-bold">{student.exam}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">All India Rank</p>
                                        <p className="text-2xl font-black text-slate-900">{student.rank}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Marks</p>
                                        <p className="text-xl font-bold text-blue-600">{student.marks}</p>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 w-[95%]"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detailed List */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Detailed Selection List</h2>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="p-4 font-bold">Student Name</th>
                                        <th className="p-4 font-bold">Course</th>
                                        <th className="p-4 font-bold">Category</th>
                                        <th className="p-4 font-bold">Result / Rank</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-4 font-semibold text-slate-700">Student Name {i + 1}</td>
                                            <td className="p-4 text-slate-500">2 Year Integrated</td>
                                            <td className="p-4 text-slate-500">General</td>
                                            <td className="p-4 font-bold text-emerald-600">Selected in Govt. Medical College</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 text-center border-t border-slate-100">
                            <button className="text-blue-600 font-bold hover:underline">View All Selections</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResultsPage;
