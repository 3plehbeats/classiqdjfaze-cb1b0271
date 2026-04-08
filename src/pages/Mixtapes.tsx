import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Music } from "lucide-react";

const Mixtapes = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="MIXTAPES" subtitle="Official DJ mixes from ClassiQ DjFAZE on Audiomack" />
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-card rounded-lg border border-border p-12 text-center">
          <Music className="w-16 h-16 text-primary mb-6" />
          <h3 className="font-heading text-2xl font-semibold mb-3">Mixtapes Coming Soon</h3>
          <p className="text-muted-foreground max-w-md">
            Audiomack links will be added soon. Stay tuned for fire mixes from the Piper of Remix!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Mixtapes;
