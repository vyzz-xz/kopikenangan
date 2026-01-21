"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden bg-[#c29e75] text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Siap Menyeduh Kenangan?
        </h2>
        <p className="text-xl md:text-2xl font-medium leading-tight mb-20 opacity-80">
            Langganan sekarang, agar biji kopi terbaik kami yang datang ke rumahmu. Nggak perlu ribet keluar rumah.
        </p>
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 mb-40 bg-[#1a1110] text-white text-2xl font-bold rounded-full shadow-2xl hover:bg-[#2a1d1c] transition-colors"
        >
            Mulai Langganan
        </motion.button>
      </div>
    </section>
  );
}
