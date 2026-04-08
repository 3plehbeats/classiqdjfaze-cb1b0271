import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="CONTACT" subtitle="Get in touch for bookings and enquiries" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Reach Out</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Contact details coming soon</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Contact details coming soon</span>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">classiqdjfaze.ng</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Alimosho LGA, Lagos Mainland, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground font-heading text-sm uppercase tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Twitter Feed */}
        <div className="mt-16">
          <SectionHeader title="LIVE TWEETS" subtitle="Follow @ClassiQDjFAZE on X" />
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground text-sm">
              Twitter/X feed will be embedded here once the X handle is confirmed. Follow for live updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
