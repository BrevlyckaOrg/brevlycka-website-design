import heroLetters from "@/assets/hero-letters.jpg";

const MainDescription = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-sepia-gold/10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroLetters})` }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          En kärlekshistoria i brev –
          <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-muted-foreground mt-2">
            direkt hem till din brevlåda
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Följ en berättelse från 1950-talets Skåne, utskickad i 16 exklusiva brev – två gånger i månaden.
        </p>
      </div>
    </section>

  );
};

export default MainDescription;