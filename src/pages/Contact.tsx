import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the Twitter timeline anchor
    if (twitterRef.current) {
      twitterRef.current.innerHTML = '';
      const anchor = document.createElement('a');
      anchor.className = 'twitter-timeline';
      anchor.setAttribute('data-theme', 'dark');
      anchor.setAttribute('data-tweet-limit', '10');
      anchor.setAttribute('data-chrome', 'noheader nofooter noborders transparent');
      anchor.href = 'https://twitter.com/classiqdjfaze?ref_src=twsrc%5Etfw';
      anchor.textContent = 'Tweets by classiqdjfaze';
      twitterRef.current.appendChild(anchor);

      // Load Twitter widgets script
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        const existing = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
        if (existing) existing.remove();
      };
    }
  }, []);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader title="CONTACT" subtitle="Get in touch for bookings and enquiries" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold">Reach Out</h3>
              <div className="space-y-4">
                <a href="mailto:booking@clasiqdjfaze.ng" className="flex items-center gap-4 text-muted-foreground text-sm hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  booking@clasiqdjfaze.ng (for bookings)
                </a>
                <a href="mailto:info@classiqdjfaze.ng" className="flex items-center gap-4 text-muted-foreground text-sm hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  info@classiqdjfaze.ng (for enquiries)
                </a>
                <a href="tel:08034478512" className="flex items-center gap-4 text-muted-foreground text-sm hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  08034478512
                </a>
                <a href="tel:08087412512" className="flex items-center gap-4 text-muted-foreground text-sm hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  08087412512
                </a>
                <a href="https://classiqdjfaze.ng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground text-sm hover:text-accent transition-colors">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                  classiqdjfaze.ng
                </a>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  MiTV/StarFM Plaza, Obafemi Awolowo Way, Alausa Ikeja
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Live Twitter Timeline */}
          <div className="mt-16">
            <SectionHeader title="LIVE TWEETS" subtitle="Latest posts from @classiqdjfaze on X" />
            <div className="bg-card border border-border rounded-lg overflow-hidden p-4">
              <div ref={twitterRef} className="flex justify-center" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
