"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const courses = [
  {
    tag: "Class 9 & 10",
    title: "Foundation Course",
    description: "Build a rock-solid foundation in Science and Maths. Early preparation for competitive exams like Olympiads and NTSE while excelling in board exams.",
    features: ["Conceptual Clarity", "Weekly Tests", "Mental Ability Training"],
    duration: "2 Years",
    color: "bg-blue-50 border-blue-100 text-blue-900"
  },
  {
    tag: "Class 11 Moving",
    title: "NEET - 2 Year Program",
    description: "Comprehensive coverage of Physics, Chemistry, and Biology. Transition from board level to medical entrance level with systematic mentorship.",
    features: ["In-depth Theory", "NCERT Focused", "Regular Doubt Sessions"],
    duration: "2 Years",
    color: "bg-emerald-50 border-emerald-100 text-emerald-900"
  },
  {
    tag: "Class 12 Moving",
    title: "NEET - 1 Year Program",
    description: "Intensive fast-track program for students aiming for immediate success. Includes rigorous revision and high-frequency mock tests.",
    features: ["Syllabus Completion by Dec", "Rank Booster Series", "Full-length Mocks"],
    duration: "1 Year",
    color: "bg-indigo-50 border-indigo-100 text-indigo-900"
  },
  {
    tag: "Passed Class 12",
    title: "NEET Dropper Batch",
    description: "Dedicated batch for repeaters. Focuses on identifying weak areas, error analysis, and maximizing speed and accuracy for the final attempt.",
    features: ["Daily Practice Papers", "Personal Mentorship", "Error Analysis Labs"],
    duration: "Full Year",
    color: "bg-rose-50 border-rose-100 text-rose-900"
  }
];

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Header / Hero Section */}
      <section className="py-20 px-6 text-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Our <span className="text-blue-600">Specialized</span> Courses
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Strategically designed programs tailored for every stage of your medical entrance journey.
          </p>
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border ${course.color} transition-all duration-300 hover:shadow-xl bg-white`}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold mb-6 shadow-sm">
                {course.tag}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                {course.title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-3 mb-8">
                {course.features.map((feat, i) => (
                  <div key={i} className="flex items-center text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" /> {feat}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Duration</p>
                  <p className="font-bold text-slate-900">{course.duration}</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center shadow-lg shadow-slate-900/20">
                  Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison or CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Not sure which program fits you?</h3>
            <p className="text-blue-100 mb-8 text-lg">Schedule a free counseling session with our academic experts.</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;