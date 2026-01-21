"use client";

import TextReveal from "./TextReveal";

export default function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black">
            <div className="max-w-5xl text-center">
                 <p className="text-[#c29e75] text-3xl md:text-5xl font-bold tracking-none mb-10">Filosofi</p>
                 <TextReveal className="text-3xl md:text-6xl font-medium justify-center leading-7 tracking-[-2] text-white mb-20">
                    "Kopi Kenangan lahir dari sebuah misi sederhana, mengisi celah antara kopi instan pinggir jalan dan kopi mahal jaringan internasional. Filosofi kami adalah menyajikan kopi lokal berkualitas tinggi dengan harga yang terjangkau, agar kenangan manis di setiap tegukan bisa dinikmati oleh siapa saja, setiap hari."
                 </TextReveal>
            </div>
        </section>
    );
}
