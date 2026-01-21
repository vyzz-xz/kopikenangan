"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Kopi Kenangan bukan sekadar tren, tapi soal rasa yang konsisten. Teman terbaik untuk break di tengah syuting.",
    author: "Nicholas Saputra",
    role: "Actor & Brand Ambassador",
  },
  {
    text: "Gula arennya itu lho, beda dari yang lain! 'Kopi Kenangan Mantan' selalu jadi mood booster andalan kalau lagi lembur di kantor.",
    author: "Sarah Amalia",
    role: "Pelanggan",
  },
  {
    text: "Akhirnya nemu juga kopi yang rasanya premium tapi nggak bikin kantong mahasiswa bolong. Tempatnya juga asik buat ngerjain tugas.",
    author: "Dimas Anggara",
    role: "Mahasiswa",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-5xl px-4 text-center z-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-3xl md:text-5xl font-medium leading-tight tracking-[-2] mb-10">"{testimonials[index].text}"</p>
                    <div className="text-xl font-bold tracking-none gap-2 flex flex-col">
                        <span>{testimonials[index].author}</span>
                        <span className="opacity-60 text-sm">{testimonials[index].role}</span>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 justify-center mt-20">
                <button onClick={prev} className="p-4 rounded-full border border-[#1a1110] hover:bg-[#1a1110] hover:text-white transition-colors"><ArrowLeft /></button>
                <button onClick={next} className="p-4 rounded-full border border-[#1a1110] hover:bg-[#1a1110] hover:text-white transition-colors"><ArrowRight /></button>
            </div>
        </div>
    </section>
  );
}
