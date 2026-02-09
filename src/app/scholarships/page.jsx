"use client";

import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Percent, Calendar } from 'lucide-react';

const OfferPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <section className="py-20 px-6 text-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-bold mb-6">
            <GraduationCap size={20} />
            <span>Merit-Based Opportunities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Scholarship <span className="text-emerald-500">Programs</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We believe talent shouldn't be limited by financial constraints. Up to 100% scholarships available based on TRE (Talent Recognition Exam).
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Exam Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-2xl font-bold mb-2">COE TRE 2026</h3>
            <p className="text-slate-400 mb-8">Talent Recognition Exam for Class 8 to 12</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Next Exam Date</p>
                  <p className="font-bold">24th March, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Percent className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Scholarship</p>
                  <p className="font-bold">Up to 100% Tuition Fee Waiver</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-emerald-400 transition-colors">
              Register for FREE
            </button>
          </motion.div>

          {/* Direct Admission Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border-2 border-slate-100 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Direct Admission</h3>
            <p className="text-slate-500 mb-8">Based on past academic performance.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-slate-600"><strong>95% in Boards:</strong> Flat 40% Scholarship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-slate-600"><strong>NTSE Stage 1 Qualified:</strong> Flat 50% Scholarship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-slate-600"><strong>NEET Rank under 50k:</strong> Flat 75% Scholarship</span>
              </li>
            </ul>

            <button className="w-full bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors">
              Check Eligibility
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfferPage;
