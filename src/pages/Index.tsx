import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import SectionHeader from "@/components/SectionHeader";
import { Music, Radio, Disc3, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Disc3, title: "DJ Sets", desc: "Premium mixing for any event" },
  { icon: Radio, title: "Radio Shows", desc: "Live on StarPlus 101.5FM & Konga 103.7FM" },
  { icon: Music, title: "Music Production", desc: "Professional studio services" },
  { icon: Calendar, title: "Events", desc: "Weddings, corporate & more" },
];

const Index = () => (
  <Layout>
    <HeroSlider />

    {/* Highlights */}
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <SectionHeader title="WHAT I DO" subtitle="Delivering premium entertainment experiences" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-secondary rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300 group">
              <h.icon className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Ready to <span className="text-accent">Elevate</span> Your Event?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Book ClassiQDjFAZE for an unforgettable experience.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
