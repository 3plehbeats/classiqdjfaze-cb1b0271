import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import hero1 from "@/assets/hero-1.jpeg";

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="ABOUT" subtitle="ClassiQDJFAZE – Official Profile" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img src={hero1} alt="ClassiQDJFAZE" className="rounded-lg w-full object-cover max-h-[600px]" />
            <div className="absolute inset-0 rounded-lg border-2 border-primary/20" />
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
            <p>
              ClassiQ DjFAZE, born <strong className="text-foreground">Prince Adeniyi Joseph Babatunde</strong>, hails from Odogbolu Local Government, Aiyepe, Ogun State, Nigeria. Born on April 29th, 1980s, he grew up with a vibrant and memorable childhood that shaped his passion for creativity and entertainment.
            </p>
            <p>
              His educational journey began at St. John's Catholic School, followed by Okun-Owa Comprehensive High School, after which he obtained a Diploma in Computer Science from the University of Lagos (UNILAG) in 2001.
            </p>
            <p>
              His professional journey into Disc Jockeying began in 2004, when he started working with Grand Master Lee (GML) Entertainment. Since then, ClassiQ DjFAZE has grown into a respected and celebrated name within Nigeria's entertainment industry, performing across clubs, radio stations, and major event stages.
            </p>
            <p>
              Over the years, he has showcased his exceptional talent at world-class events, including the <strong className="text-foreground">Star Mega Jamz 2010</strong> in Abuja featuring international superstar R. Kelly alongside top Nigerian artistes such as Choc Boiz, Timaya, Juke Box, Faze, and Sound Sultan. He also performed at the MTN Fashion Show 2011, Lagos Carnival, Chat Buster Party, Sound Sultan's Album Launch, GML Awards, and many other notable events.
            </p>
            <p>
              ClassiQ DjFAZE is the CEO of <strong className="text-primary">CDF Entertainment (CDF ENT)</strong>—a dynamic entertainment company with expertise in music production, artist and event management, music promotion, entertainment consultancy, video production, editing, and graphic design. His remarkable creativity in producing remix versions of popular songs earned him the industry-recognized title <em className="text-primary">"Piper of Remix."</em>
            </p>
            <p>
              In addition to his DJ and entertainment services, ClassiQ DjFAZE operates a fully equipped recording studio dedicated to supporting both upcoming and established artists. The studio offers professional music recording, mixing and mastering, production of jingles, soundtracks, and other audio content. Strategically located in Alimosho Local Government Area on the Lagos Mainland.
            </p>
            <p>
              He has graced numerous events such as weddings, birthdays, album launches, corporate gatherings, and all celebrations where premium music delivery is essential. Known for his energetic stage presence and exceptional mixing skills, DjFAZE is a profiled and highly sought-after DJ.
            </p>
            <p>
              ClassiQ DjFAZE is currently an in-house and head DJ at <strong className="text-foreground">StarPlus 101.5FM</strong> and <strong className="text-foreground">Konga 103.7FM</strong>, where he continues to inspire, entertain, and elevate the art of Disc Jockeying.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
