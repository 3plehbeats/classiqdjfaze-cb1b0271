import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink } from "lucide-react";

const Mixtapes = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="MIXTAPES" subtitle="Official DJ mixes from ClassiQDjFAZE on Audiomack" />
        
        {/* Gospel Mixtapes */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="font-heading text-xl font-semibold text-accent mb-4 text-center">🙏 Gospel Mixtapes</h3>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://audiomack.com/embed/song/cdf/gospel-mix"
              title="ClassiQDjFAZE - Gospel Mixtapes"
              className="w-full border-0"
              style={{ minHeight: "400px" }}
              allow="autoplay"
            />
          </div>
        </div>

        {/* All Mixtapes */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-semibold text-accent mb-4 text-center">🎵 All Mixtapes</h3>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://audiomack.com/embed/artist/cdf"
              title="ClassiQDjFAZE - All Mixtapes on Audiomack"
              className="w-full border-0"
              style={{ minHeight: "600px" }}
              allow="autoplay"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://audiomack.com/CDF"
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
