"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "motion/react";

export default function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Define total frames based on available files (001 to 241)
  const frameCount = 241;

  // Load images on mount
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          const frameIndex = i.toString().padStart(3, "0");
          img.src = `/sequence/ezgif-frame-${frameIndex}.jpg`;
          img.onload = () => {
            loadedImages[i - 1] = img;
            resolve();
          };
          img.onerror = () => {
             // For missing end frames, just resolve to avoid blocking
             console.warn(`Frame ${i} missing`);
             resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Render loop
  useMotionValueEvent(currentIndex, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    // Draw image to cover canvas while maintaining aspect ratio
    // Similar to object-fit: cover
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const imgAspect = img.width / img.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgAspect < canvasAspect) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle Resize
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame
        renderFrame(Math.round(currentIndex.get()));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial size

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images, isLoaded]); // Re-bind when images load

  // Initial draw when loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#1a1110]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover"
        />
        
        {/* Overlay Content */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1110] text-[#f4eec7] z-50">
             <p className="text-xl font-light animate-pulse">Brewing Kenangan...</p>
          </div>
        )}
        
        {/* Text Overlays */}
        <OverlayContent scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function OverlayContent({ scrollYProgress }: { scrollYProgress: any }) {
    // Fade in/out text at specific ranges
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);

    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);

    const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
    const scale4 = useTransform(scrollYProgress, [0.75, 1], [0.8, 1]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center items-center h-full w-full">
            {/* Title */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center max-w-5xl px-4">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4 uppercase">Kopi Kenangan</h1>
                <p className="text-xl md:text-2xl font-light text-white/80">Memories in Every Cup</p>
            </motion.div>

            {/* Slogan Left */}
            <motion.div style={{ opacity: opacity2, x: 0 }} className="absolute left-10 md:left-32 max-w-lg">
                 <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    Sourced from <span className="text-[#c29e75]">Origins</span>.
                 </h2>
            </motion.div>

            {/* Slogan Right */}
             <motion.div style={{ opacity: opacity3, x: 0 }} className="absolute right-10 md:right-32 max-w-lg text-right">
                 <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    Roasted to <span className="text-[#c29e75]">Perfection</span>.
                 </h2>
            </motion.div>

            {/* CTA */}
             <motion.div style={{ opacity: opacity4, scale: scale4 }} className="absolute text-center pointer-events-auto">
                 <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Taste the Difference</h2>
                 <button className="px-10 py-4 bg-[#c29e75] text-[#1a1110] text-xl font-bold rounded-full hover:bg-[#d4b088] transition-colors transform hover:scale-105 active:scale-95 shadow-xl">
                    Order Now
                 </button>
            </motion.div>
        </div>
    )
}
