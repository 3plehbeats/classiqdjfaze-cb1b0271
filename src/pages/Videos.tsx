import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Film } from "lucide-react";

const Videos = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="VIDEOS" subtitle="Watch ClassiQDJFAZE in action on YouTube" />
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-card rounded-lg border border-border p-12 text-center">
          <Film className="w-16 h-16 text-primary mb-6" />
          <h3 className="font-heading text-2xl font-semibold mb-3">Videos Coming Soon</h3>
          <p className="text-muted-foreground max-w-md">
            YouTube video links will be added soon. Stay tuned for performances and behind-the-scenes content!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Videos;
