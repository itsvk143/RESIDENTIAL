"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import CustomCard from "@/components/ui/custom-card";

const facultyMembers = [
  {
    subject: "Physics",
    name: "Prof. Rajesh Khanna",
    role: "Senior Physics Faculty",
    experience: "12+ Years",
    specialization: "Mechanics & Thermodynamics",
    bio: "Ex Aakash Faculty,  Ex FIITJEE Faculty,  Ex Allen Faculty",
  },
  {
    subject: "Chemistry",
    name: "VIKASH KUMAR",
    role: "Senior Chemistry Faculty",
    experience: "10+ Years",
    specialization: "Organic & Physical Chemistry",
    bio: "Ex Aakash Faculty,  Ex Narayana Faculty,  Ex Allen Faculty",
    image: "/assets/vikash.png"
  },
  {
    subject: "Biology",
    name: "GUDIYA KUMARI",
    role: "Senior Biology Faculty",
    experience: "10+ Years",
    specialization: "Genetics & Physiology",
    bio: "Ex Aakash Faculty,  Ex Narayana Faculty,  Ex Allen Faculty",
  }
];

const FacultyPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-700 rounded-full">
            The Mentors
          </div>
          <SectionHeading
            title={<>Meet Our <span className="text-blue-600">PCB Experts</span></>}
            subtitle="Specialized guidance for Physics, Chemistry, and Biology to ensure a balanced and high-scoring NEET preparation."
            className="mb-0"
          />
        </motion.div>
      </section>

      {/* Faculty Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {facultyMembers.map((member, index) => (
            <CustomCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-0 overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500"
            >

              {/* Subject Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                {member.subject}
              </div>

              {/* Image Container */}
              <div className="h-80 overflow-hidden bg-slate-200 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <User className="w-24 h-24 text-slate-300" />
                )}
              </div>

              {/* Info Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1 text-slate-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-bold mb-6">{member.role}</p>

                <div className="space-y-3 text-sm text-slate-500 mb-6">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="uppercase text-[10px] tracking-widest font-bold">Experience</span>
                    <span className="text-slate-800 font-semibold">{member.experience}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-emerald-400 pl-4 bg-emerald-50/50 py-2 pr-2 rounded-r-lg">
                  "{member.bio}"
                </p>
              </div>
            </CustomCard>
          ))}
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-4 md:pt-0">
            <p className="text-4xl font-black text-emerald-400">Physics</p>
            <p className="font-bold uppercase text-xs tracking-widest opacity-60 mt-1">Logic & Mastery</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-4xl font-black text-emerald-400">Chemistry</p>
            <p className="font-bold uppercase text-xs tracking-widest opacity-60 mt-1">Reactions & Formulas</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-4xl font-black text-emerald-400">Biology</p>
            <p className="font-bold uppercase text-xs tracking-widest opacity-60 mt-1">Conceptual Depth</p>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Experience their teaching firsthand.</h2>
        <Button className="px-10 py-4 h-auto text-lg hover:shadow-blue-500/30 shadow-lg" size="lg">
          Book a Demo Class
        </Button>
      </section>
    </div>
  );
};

export default FacultyPage;