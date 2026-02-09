"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import CustomCard from "@/components/ui/custom-card";

// Student Testimonials Data
const studentTestimonials = [
  // {
  //   name: "Aravind Patel",
  //   rank: "NEET AIR 142",
  //   course: "2 Year Program",
  //   review: "The residential program changed my life. Having teachers live with us meant I could clear doubts at 11 PM. The discipline is unmatched.",
  //   image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200"
  // },
  // {
  //   name: "Sneha Reddy",
  //   rank: "AIIMS Delhi Selected",
  //   course: "Dropper Batch",
  //   review: "I failed in my first attempt. Coming here was the best decision. The error analysis labs helped me understand exactly where I was losing marks.",
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  // },
  // {
  //   name: "Rahul Singh",
  //   rank: "JEE Main 99.8%ile",
  //   course: "Foundation + 2 Year",
  //   review: "The competition here is healthy. Everyone wants to win, but we help each other. It feels like a family working towards a single goal.",
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  // },
];

// Parent Testimonials Data
const parentTestimonials = [
  {
    name: "Dr. P.K. Sharma",
    profession: "Surgeon",
    child: "Father of Rohan (Class 11)",
    review: "As a doctor, I know the pressure of this field. I wanted a place where my son would be cared for, not just taught. COE provides that safe, home-like environment.",
  },
  {
    name: "Mrs. Anjali Das",
    profession: "Professor",
    child: "Mother of Priya (Class 12)",
    review: "Safety was my biggest concern for my daughter. Seeing the campus and the faculty living there gave me immense peace of mind. She is eating healthy and studying well.",
  },
  {
    name: "Mr. T. Venkat",
    profession: "Bank Manager",
    child: "Father of Arjun (Dropper)",
    review: "The improvement in his mock test scores is visible. The daily mentorship calls help us stay updated on his progress without disturbing his studies.",
  },
];

const renderStars = () => (
  <div className="flex gap-1 text-yellow-400 mb-4">
    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
  </div>
);

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <section className="py-20 px-6 text-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-700 rounded-full">
            Success Stories
          </div>
          <SectionHeading
            title={<>Trusted by <span className="text-blue-600">Toppers</span> & Parents</>}
            subtitle="Don't just take our word for it. Hear from the students who achieved their dreams and the parents who trusted us."
            className="mb-0"
          />
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-100 p-1 rounded-full">
            <TabsTrigger value="students" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md py-3 font-semibold">Student Voices</TabsTrigger>
            <TabsTrigger value="parents" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md py-3 font-semibold">Parent Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="students">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentTestimonials.map((t, i) => (
                <CustomCard
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:shadow-2xl hover:shadow-blue-200/50 transition-all border border-slate-100 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{t.name}</h3>
                      <p className="text-sm text-blue-600 font-bold">{t.rank}</p>
                    </div>
                  </div>
                  {renderStars()}
                  <p className="text-slate-600 italic leading-relaxed">"{t.review}"</p>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {t.course}
                  </div>
                </CustomCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parents">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {parentTestimonials.map((t, i) => (
                <CustomCard
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 relative border-slate-200"
                >
                  <Quote className="absolute top-8 right-8 text-emerald-200 w-12 h-12 rotate-180" />
                  <div className="mb-6">
                    <h3 className="font-bold text-lg text-slate-900">{t.name}</h3>
                    <p className="text-sm text-emerald-600 font-medium">{t.profession}</p>
                  </div>
                  {renderStars()}
                  <p className="text-slate-600 leading-relaxed mb-6 relative z-10">"{t.review}"</p>
                  <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200 shadow-sm">
                    {t.child}
                  </div>
                </CustomCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA */}
      <section className="py-20 text-center container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-12 relative overflow-hidden">

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Join the league of achievers</h2>
            <Button className="px-10 py-4 h-auto text-lg hover:shadow-lg hover:shadow-emerald-500/30 bg-gradient-to-r from-blue-500 to-emerald-500 text-white" size="lg">
              Apply for Admission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;