const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-wider">
      <span className="text-gold-gradient">{title}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="w-20 h-1 bg-gold-gradient mx-auto mt-4 rounded-full" />
  </div>
);

export default SectionHeader;
