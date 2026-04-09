import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { X } from "lucide-react";

import img1 from "@/assets/hero-1.jpeg";
import img2 from "@/assets/hero-2.jpeg";
import img3 from "@/assets/hero-3.jpeg";
import img4 from "@/assets/hero-4.jpeg";
import img5 from "@/assets/gallery-1.jpeg";
import img6 from "@/assets/gallery-2.jpeg";
import img7 from "@/assets/gallery-3.jpeg";
import img8 from "@/assets/gallery-4.jpeg";
import img9 from "@/assets/gallery-5.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader title="GALLERY" subtitle="ClassiQDjFaze in pictures" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelected(src)}
                className="overflow-hidden rounded-lg aspect-[3/4] group"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-foreground" onClick={() => setSelected(null)}>
            <X size={32} />
          </button>
          <img src={selected} alt="Full view" className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
