"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    initial: { clipPath: "circle(0% at 100% 0%)" },
    animate: { 
        clipPath: "circle(150% at 100% 0%)", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any } 
    },
    exit: { 
        clipPath: "circle(0% at 100% 0%)", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any } 
    },
  };

  const navLinks = [
    { name: "Coffee", href: "#" },
    { name: "Subscription", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Locations", href: "#" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white">
        <div className="text-xl font-bold tracking-tighter relative z-50">Kopi Kenangan</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-black flex items-center justify-center text-[#1a1110]"
          >
             <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.1 * i + 0.3 } }}
                        exit={{ y: 80, opacity: 0, transition: { duration: 0.3 } }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </motion.a>
                ))}
             </nav>
             
             <div className="absolute bottom-10 w-full px-10 flex justify-between text-lg font-bold text-white">
                <div>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
                <div>
                    <p>Kopikenangan</p>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
