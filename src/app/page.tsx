import SequenceScroll from "@/components/SequenceScroll";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import BentoGrid from "@/components/BentoGrid";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Navbar />
      <main className="w-full min-h-screen bg-[#1a1110] text-[#f4eec7]">
        <SequenceScroll />
        
        <div className="relative z-10 -mt-[100vh] bg-[#1a1110] rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
           <AboutSection />
           <BentoGrid />
           <Stats />
           <Testimonials />
           <CTA />
           <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
