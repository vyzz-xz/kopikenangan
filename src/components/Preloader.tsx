"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
        >
            <div className="relative overflow-hidden">
                <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] } }}
                    className="text-3xl md:text-8xl font-bold italic tracking-tighter"
                >
                    Collecting memories... 
                </motion.h1>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
