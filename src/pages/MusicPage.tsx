import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Disc3 } from "lucide-react";

const MusicPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="MUSIC" subtitle="Tracks and productions by ClassiQDJFAZE on Audiomack" />
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-card rounded-lg border border-border p-12 text-center">
          <Disc3 className="w-16 h-16 text-primary mb-6" />
          <h3 className="font-heading text-2xl font-semibold mb-3">Music Coming Soon</h3>
          <p className="text-muted-foreground max-w-md">
            Audiomack music links will be added soon. Check back for the latest tracks!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default MusicPage;
