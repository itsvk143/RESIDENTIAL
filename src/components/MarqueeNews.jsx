"use client";

import { motion } from "framer-motion";

const newsItems = [
  <>
    📢 Admissions Open for <span className="text-emerald-400 font-bold">Session 2026-27</span> - Limited Seats Available!
  </>,
  <>
    <span className="text-emerald-400 font-bold">COE TRE</span> (Talent Recognition Exam) on 24th March. Register Now for up to 100% Scholarship (Session 2026-27).
  </>,
  <>
    🏆 NEET 2024 Result: <span className="text-emerald-400 font-bold">100% Selection Rate</span> in Drawer Batch.
  </>
];

const MarqueeNews = () => {
  return (
    <div className="w-full bg-black text-white py-1.5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {newsItems.map((news, index) => (
          <span key={index} className="mx-10 font-semibold text-lg">
            {news}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeNews;