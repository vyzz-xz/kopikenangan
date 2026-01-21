"use client";

import { motion } from "motion/react";

export default function BentoGrid() {
  const cards = [
    { title: "Kopi Kenangan Mantan", subtitle: "Our Signature Blend", color: "bg-[#3b2f2f]", span: "col-span-12 md:col-span-8" },
    { title: "Kopi Kenangan Masa Lalu", subtitle: "Stronger & Bolder", color: "bg-[#1a1110]", span: "col-span-12 md:col-span-4" },
    { title: "Avocatto", subtitle: "Creamy Avocado Coffee", color: "bg-[#c29e75]", span: "col-span-12 md:col-span-4" },
    { title: "Sultan Boba", subtitle: "Premium Chewy Boba", color: "bg-[#3b2f2f]", span: "col-span-12 md:col-span-4" },
    { title: "Merchandise", subtitle: "Bring Memories Home", color: "bg-[#1a1110]", span: "col-span-12 md:col-span-4" },
  ];

  return (
    <section className="py-20 px-4 bg-black text-[#1a1110]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white">Produk</h2>
        <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${card.span} ${card.color} relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer`}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/60 to-transparent transition-opacity opacity-80 group-hover:opacity-100">
                 <h3 className="text-3xl font-bold">{card.title}</h3>
                 <p className="text-lg opacity-80">{card.subtitle}</p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-[#c29e75]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
