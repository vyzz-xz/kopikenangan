"use client";

import TextReveal from "./TextReveal";

export default function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black">
            <div className="max-w-5xl text-center">
                 <p className="text-white text-2xl md:text-5xl uppercase font-bold tracking-[-2] mb-10">Our <span className="text-amber-500">Story</span></p>
                 <TextReveal className="text-3xl md:text-6xl font-medium justify-center leading-7 tracking-[-2] text-white mb-20">
                    "Kopi Kenangan lahir dari sebuah misi sederhana, mengisi celah antara kopi instan pinggir jalan dan kopi mahal jaringan internasional. Filosofi kami adalah menyajikan kopi lokal berkualitas tinggi dengan harga yang terjangkau, agar kenangan manis di setiap tegukan bisa dinikmati oleh siapa saja, setiap hari."
                 </TextReveal>
            </div>
        </section>
    );
}
