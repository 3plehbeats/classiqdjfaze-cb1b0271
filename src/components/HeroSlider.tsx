import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/hero-3.jpeg";
import hero4 from "@/assets/hero-4.jpeg";

const slides = [
  { image: hero1, title: "ClassiQDjFaze", subtitle: "The Piper of Remix" },
  { image: hero2, title: "CDF ENTERTAINMENT", subtitle: "Music • Events • Production" },
  { image: hero3, title: "LIVE ON AIR", subtitle: "StarPlus 101.5FM & Konga 103.7FM" },
  { image: hero4, title: "BOOK NOW", subtitle: "Premium DJ Experience" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(0,0%,0%,0.4) 0%, hsla(0,0%,0%,0.8) 100%)" }} />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="animate-slide-in">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
            <span className="text-gold-gradient">{slides[current].title}</span>
          </h1>
          <p className="font-heading text-lg md:text-2xl tracking-[0.3em] uppercase text-foreground/80">
            {slides[current].subtitle}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
