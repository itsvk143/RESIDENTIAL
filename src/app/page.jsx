"use client";

import React, { useRef } from 'react';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  MapPin,
  Mail,
  Star,
  Award,
  Zap,
  Heart,
  Use,
  Utensils,
  Home
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import CustomCard from "@/components/ui/custom-card";

/* --- SECTIONS --- */

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/photo.png"
          alt="Campus Life"
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold mb-8 backdrop-blur-sm"
            >
              <CheckCircle2 size={18} className="text-emerald-400" />
              <span>Admissions Open for 2026-27</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Live, Learn & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Succeed
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Experience India's most disciplined residential program. Where you don't just study for NEET - you live it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-blue-500/25">
                Apply for Scholarship <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <a href="tel:+918457876843">
                  <Phone className="mr-2 w-5 h-5" /> Call: 84578-76843
                </a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" /> Safe Campus
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="text-emerald-400" /> Homely Food
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-emerald-400" /> 24x7 Mentorship
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="relative z-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-500 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Guaranteed Results</h3>
                  <p className="text-slate-400">Our structured approach ensures improvement.</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Class 12 Passing Rate", val: "100%" },
                  { label: "NEET Qualification", val: "100%" },
                  { label: "Average NEET Score", val: "650+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-300">{stat.label}</span>
                      <span className="text-emerald-400 font-bold text-xl">{stat.val}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const USPSection = () => {
  const usps = [
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Faculty Lives With You",
      desc: "24x7 doubt clearing. Our teachers stay on campus, ensuring you never feel stuck in your preparation.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <Utensils className="w-8 h-8 text-emerald-600" />,
      title: "Home-Cooked Food",
      desc: "No mess food. We serve fresh, home-cooked meals. Teachers and students eat the same healthy food together.",
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-600" />,
      title: "Family Environment",
      desc: "A relaxed yet competitive atmosphere where every student is treated like a family member, not just a roll number.",
      color: "bg-rose-50 border-rose-100"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-600" />,
      title: "Guaranteed Results",
      desc: "With our disciplined schedule and personalized attention, we guarantee explicit improvement in your performance.",
      color: "bg-amber-50 border-amber-100"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
      title: "Separate & Secure",
      desc: "Separate buildings for male & female students. High-tier security protocols with special focus on safety for female students.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Self-Study & Practice",
      desc: "Maximum time dedicated to self-study with extensive question practice. We ensure you solve thousands of questions before the exam.",
      color: "bg-indigo-50 border-indigo-100"
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="The Residential Advantage"
          subtitle="Why toppers choose to stay with us."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border-2 ${usp.color} transition-all duration-300 hover:shadow-xl`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{usp.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Selections", value: 1200, suffix: "+" },
            { label: "Years Experience", value: 10, suffix: "+" },
            { label: "Avg. Batch Size", value: 30, suffix: "" }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2 font-mono">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy />{stat.suffix}
              </div>
              <div className="text-blue-200 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    { title: "Foundation", subtitle: "Class 9-10", desc: "Build a strong base for NEET.", icon: "🌱" },
    { title: "Target NEET", subtitle: "Class 11-12", desc: "Comprehensive 2-year integrated program.", icon: "⚕️" },
    { title: "Achiever", subtitle: "Droppers", desc: "Intensive 1-year program for rank improvement.", icon: "🚀" },
    { title: "Crash Course", subtitle: "Final Lap", desc: "Short term booster course for final revision.", icon: "⚡" }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Structured Learning Paths" subtitle="Choose the program that fits your journey." />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <CustomCard key={idx} className="relative group cursor-pointer border-transparent hover:border-blue-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl group-hover:scale-110 transition-transform grayscale">
                {course.icon}
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">
                  {course.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm">{course.desc}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                  View Details <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </CustomCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Stories of Success" subtitle="Hear from parents who trusted us." />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Priya Sharma", role: "Rank 450, NEET 2024", text: "The environment is exactly like home. Teachers eating with us made me feel so comfortable. I never felt homesick." },
            { name: "Mr. Rajesh Gupta", role: "Parent", text: "Safety was my biggest concern. Their campus is so secure and the discipline is commendable. Best decision for my daughter." },
            { name: "Amit Verma", role: "Rank 1200, NEET 2023", text: "Staying with faculty 24x7 meant my doubts were cleared at 11 PM also. That gave me the extra edge." }
          ].map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
              <QuoteIcon className="absolute top-8 right-8 text-slate-200 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 italic mb-6 relative z-10 text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                <span className="font-bold text-white">COE NEET</span> is the only institute in the region that provides a complete ecosystem for success.
              </p>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Admissions open for Session 2026-27 at <span className="font-bold text-white">COE NEET</span>. Call us now to book your seat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-blue-900 font-bold">
                  Apply Online
                </Button>
                <Button variant="outlineLight" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                  <a href="tel:+918457876843">
                    <Phone className="mr-2" /> +91 84578-76843
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Helper for Testimonials
const QuoteIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H15C14.4477 8 14 8.44772 14 9V11C14 11.5523 13.5523 12 13 12H12V8H14.017C14.017 5.79086 15.8079 4 18.017 4H19.9999C21.1045 4 21.9999 4.89543 21.9999 6V15C21.9999 18.3137 19.3136 21 15.9999 21H14.017ZM8.01691 21L8.01691 18C8.01691 16.8954 8.91234 16 10.0169 16H13C13.5523 16 14 15.5523 14 15V9C14 8.44772 13.5523 8 13 8H9C8.44772 8 8 8.44772 8 9V11C8 11.5523 7.55228 12 7 12H6V8H8.01691C8.01691 5.79086 9.80777 4 12.0169 4H14.0001C15.1047 4 16.0001 4.89543 16.0001 6V15C16.0001 18.3137 13.3138 21 10.0001 21H8.01691Z" />
  </svg>
)

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Hero />
      <USPSection />
      <Stats />
      <Courses />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default HomePage;