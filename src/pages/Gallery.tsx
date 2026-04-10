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
import img10 from "@/assets/gallery-6.jpg";
import img11 from "@/assets/gallery-7.jpg";
import img12 from "@/assets/gallery-8.jpg";
import img13 from "@/assets/gallery-9.jpg";
import img14 from "@/assets/gallery-10.jpg";
import img15 from "@/assets/gallery-11.jpg";
import img16 from "@/assets/gallery-12.jpg";
import img17 from "@/assets/gallery-13.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader title="GALLERY" subtitle="ClassiQDjFAZE in pictures" />
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
