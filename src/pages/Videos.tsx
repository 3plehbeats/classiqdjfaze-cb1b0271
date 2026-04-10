import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Videos = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="VIDEOS" subtitle="Watch ClassiQDjFAZE in action on YouTube" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.youtube.com/embed/7fRv_syDs1w"
              title="ClassiQDjFAZE - YouTube"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@classiqdjfaze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Videos;
