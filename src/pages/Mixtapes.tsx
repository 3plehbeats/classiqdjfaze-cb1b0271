import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Music, ExternalLink } from "lucide-react";

const Mixtapes = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="MIXTAPES" subtitle="Official DJ mixes from ClassiQDjFAZE on Audiomack" />
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://audiomack.com/embed/artist/cdf"
              title="ClassiQDjFAZE - Audiomack"
              className="w-full border-0"
              style={{ minHeight: "600px" }}
              allow="autoplay"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://audiomack.com/cdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Listen on Audiomack
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Mixtapes;
