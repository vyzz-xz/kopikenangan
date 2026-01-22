"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function BentoGrid() {
  const cards = [
    {
      title: "All Variant Coffee",
      description: "Our signature blend with fresh milk and organic palm sugar.",
      image: "/images/products/allvariants.jpeg", 
      span: "col-span-12 md:col-span-8",
      color: "bg-black",
      textColor: "text-white",
      imageClass: "object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110"
    },
    {
      title: "Caffe Latte",
      description: "Smooth espresso with steamed milk.",
      image: "/images/products/caffe late.png",
      span: "col-span-12 md:col-span-4",
      color: "bg-black",
      textColor: "text-white",
      imageClass: "object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110"
    },
    {
      title: "Cappuccino",
      description: "A classic cappuccino with a Kenangan twist.",
      image: "/images/products/cappuccino.jpeg",
      span: "col-span-12 md:col-span-4",
      color: "bg-black",
      textColor: "text-white",
      imageClass: "object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110"
    },
    {
      title: "Black Coffee",
      description: "Bold and authentic Indonesian black coffee.",
      image: "/images/products/biji kopi.jpg",
      span: "col-span-12 md:col-span-8",
      color: "bg-black",
      textColor: "text-white",
      imageClass: "object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110"
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4">
              Produk <span className="text-amber-500">Favorit</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-5xl mx-auto">
              Nikmati rasa kenangan yang tak terlupakan dengan pilihan menu terbaik kami.
            </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[400px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${card.span} ${card.color} relative rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5 cursor-pointer`}
            >
              <div className={`absolute inset-0 flex flex-col justify-end p-8 z-20 ${card.textColor}`}>
                 <div className="max-w-[100%] md:max-w-[100%]">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-[-2] mb-2 drop-shadow-md">{card.title}</h3>
                    <p className="text-sm md:text-base opacity-90 leading-relaxed font-medium drop-shadow-sm">
                        {card.description}
                    </p>
                 </div>
              </div>

              {/* Product Image */}
              <div className="absolute inset-0 flex items-center justify-end z-10 overflow-hidden">
                 <div className="relative w-full h-full transform transition-transform duration-700 ease-out">
                    <Image 
                        src={card.image} 
                        alt={card.title}
                        fill
                        className={`transition-all duration-700 ease-out ${card.imageClass}`}
                    />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
