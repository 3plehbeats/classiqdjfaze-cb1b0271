import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const MusicPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="MUSIC" subtitle="Tracks and productions by ClassiQDjFAZE" />
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://ditto.fm/ijo-galala"
              title="Ijo Galala - ClassiQDjFAZE"
              className="w-full border-0"
              style={{ minHeight: "600px" }}
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default MusicPage;
