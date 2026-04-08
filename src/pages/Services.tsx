import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Music, Radio, Disc3, Calendar, Mic, Film, Palette, Users } from "lucide-react";

const services = [
  { icon: Disc3, title: "DJ Services", desc: "Professional DJ sets for clubs, events, weddings, corporate gatherings and all celebrations." },
  { icon: Music, title: "Music Production", desc: "Full music production including recording, mixing, mastering, jingles and soundtracks." },
  { icon: Mic, title: "Artist Management", desc: "Comprehensive artist management and development for upcoming and established artists." },
  { icon: Calendar, title: "Event Management", desc: "End-to-end event planning and management for concerts, launches and corporate events." },
  { icon: Radio, title: "Music Promotion", desc: "Strategic music promotion and marketing to amplify your reach across Nigeria." },
  { icon: Film, title: "Video Production", desc: "Professional music video production, editing and post-production services." },
  { icon: Palette, title: "Graphic Design", desc: "Creative visual design for album covers, flyers, branding and promotional materials." },
  { icon: Users, title: "Entertainment Consultancy", desc: "Expert guidance and consultancy for entertainment industry ventures." },
];

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="SERVICES" subtitle="CDF Entertainment – Full Service Entertainment Company" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:glow-gold transition-all duration-300 group">
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
