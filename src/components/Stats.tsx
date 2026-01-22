"use client";

import { useInView, useMotionValue, useSpring, motion } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-5xl md:text-9xl font-bold text-white" />;
}

export default function Stats() {
  const stats = [
    { label: "Gerai", value: 500, suffix: "+" },
    { label: "Tahun", value: 9 },
    { label: "Pencapaian", value: 10, suffix: "+" },
    { label: "Mitra Petani", value: 20, suffix: "K" },
  ];

  return (
    <section className="py-60 bg-black text-amber-500 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
             <Counter value={stat.value} suffix={stat.suffix} />
             <p className="text-sm md:text-lg font-bold uppercase tracking-[-1]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
