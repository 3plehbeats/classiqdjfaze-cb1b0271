import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, Play } from "lucide-react";

type MixTape = {
  title: string;
  artist: string;
  feat?: string;
  thumbnail: string;
  url: string;
  duration: string;
  genre: string;
};

const gospelMixtapes: MixTape[] = [
  {
    title: "CDF GOSPEL GROOVEYY [VOL 2]",
    artist: "ClassiQDjFAZE",
    feat: "FT GOSPEL ARTISTS",
    thumbnail: "https://i.audiomack.com/CDF/83fc7dfdbc.webp?width=416",
    url: "https://audiomack.com/CDF/song/69d4f48a2307d",
    duration: "1:44:18",
    genre: "Gospel",
  },
  {
    title: "CDF GOSPEL GROOVEYY [VOL 1]",
    artist: "ClassiQDjFAZE",
    feat: "FT GOSPEL ARTISTS",
    thumbnail: "https://i.audiomack.com/CDF/567d25b005.webp?width=416",
    url: "https://audiomack.com/CDF/song/69ce8537a6836",
    duration: "1:57:55",
    genre: "Gospel",
  },
];

const otherMixtapes: MixTape[] = [
  {
    title: "460 MINUTES HIGHWAY URBAN MIXTAPE",
    artist: "ClassiQDjFAZE",
    feat: "URBAN ARTISTS",
    thumbnail: "https://i.audiomack.com/CDF/d00c064d8d.webp?width=416",
    url: "https://audiomack.com/CDF/song/460-minutes-highway-urban-mixtape",
    duration: "7:41:07",
    genre: "DJ Mix",
  },
  {
    title: "4 IN 1 BEST OF JOE",
    artist: "ClassiQDjFAZE",
    feat: "JOE THOMAS",
    thumbnail: "https://i.audiomack.com/classiqdjfaze/ce0407e8dc.webp?width=416",
    url: "https://audiomack.com/CDF/song/4-in-1-best-of-joe",
    duration: "2:26:02",
    genre: "DJ Mix",
  },
  {
    title: "BEST OF CRAIG DAVID MIX",
    artist: "ClassiQDjFAZE",
    feat: "CRAIG DAVID",
    thumbnail: "https://i.audiomack.com/CDF/61979d55d9.webp?width=416",
    url: "https://audiomack.com/CDF/song/best-of-craig-david-mix",
    duration: "2:19:09",
    genre: "DJ Mix / Slow Jam",
  },
  {
    title: "NA WE DEY HIA ...NATIVE IGBO MIX",
    artist: "ClassiQDjFAZE",
    feat: "Umu Obiligbo, Flavour, Phyno, Zoro etc",
    thumbnail: "https://i.audiomack.com/classiqdjfaze/7720721e46.webp?width=416",
    url: "https://audiomack.com/CDF/song/na-we-dey-hia-native-mix",
    duration: "1:40:32",
    genre: "DJ Mix",
  },
  {
    title: "OJU MI MANYA - THA MIXAPE",
    artist: "ClassiQDjFAZE",
    feat: "A LISTS ARTISTS",
    thumbnail: "https://i.audiomack.com/classiqdjfaze/604c7aa8f3.webp?width=416",
    url: "https://audiomack.com/CDF/song/oju-mi-manya-tha-mixape",
    duration: "1:19:51",
    genre: "Electronic",
  },
  {
    title: "DOUBLESOUNDMP3 MIXTAPE",
    artist: "ClassiQDjFAZE",
    thumbnail: "https://i.audiomack.com/classiqdjfaze/257588952e.webp?width=416",
    url: "https://audiomack.com/CDF/song/doublesoundmp3-mixtape",
    duration: "1:16:49",
    genre: "DJ Mix",
  },
];

const MixtapeCard = ({ mix }: { mix: MixTape }) => (
  <a
    href={mix.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
  >
    <div className="relative aspect-square overflow-hidden">
      <img
        src={mix.thumbnail}
        alt={mix.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Play className="w-12 h-12 text-accent fill-accent" />
      </div>
      <span className="absolute top-2 right-2 bg-black/70 text-foreground text-xs px-2 py-1 rounded font-mono">
        {mix.duration}
      </span>
    </div>
    <div className="p-4">
      <h3 className="font-heading text-sm font-semibold line-clamp-2 group-hover:text-accent transition-colors">
        {mix.title}
      </h3>
      {mix.feat && (
        <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
          ft. {mix.feat}
        </p>
      )}
      <span className="inline-block mt-2 text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">
        {mix.genre}
      </span>
    </div>
  </a>
);

const Mixtapes = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader title="MIXTAPES" subtitle="Official DJ mixes from ClassiQDjFAZE on Audiomack" />

        {/* Gospel Mixtapes */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold text-accent mb-6 text-center">🙏 Gospel Mixtapes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gospelMixtapes.map((mix) => (
              <MixtapeCard key={mix.url} mix={mix} />
            ))}
          </div>
        </div>

        {/* Other Mixtapes */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold text-accent mb-6 text-center">🎵 DJ Mixes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMixtapes.map((mix) => (
              <MixtapeCard key={mix.url} mix={mix} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://audiomack.com/CDF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            More on Audiomack
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Mixtapes;
