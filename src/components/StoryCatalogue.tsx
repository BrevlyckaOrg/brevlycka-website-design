import storyImage from "@/assets/story-love-1950s.jpg";
import StoryCardFlip from "./StoryCardFlip";

const stories = [
  {
    title: "Kärlek på dansbanegolvet",
    description: "En kärlekshistoria från Skåne på 1950-talet. Följ Anna och Erik genom sommarens dansbanor, kafferep och hemliga möten i en tid när kärleken växte långsamt genom brev och förstulet möten.",
    detailedDescription: "Följ Anna och Erik genom sommarens dansbanor, kafferep och hemliga möten i en tid när kärleken växte långsamt genom brev och förstulet möten. Deras berättelse är fylld av tidstypiska detaljer, levande karaktärer och en atmosfär som tar dig tillbaka till 1950-talets Skåne. Varje brev är noggrant utformat för att fånga känslan av den tiden, med små överraskningar som illustrationer och fotografier som gör historien ännu mer levande.",
    letterCount: 16,
    imageUrl: storyImage,
    isActive: true,
  },
  {
    title: "Kommande berättelser",
    description: "Fler berättelser är på väg! Låt oss tipsa dig när nästa breverie släpps. Varje serie är unik och tar dig med till en annan tid och plats.",
    detailedDescription: "Kommer snart!",
    letterCount: 16,
    imageUrl: storyImage,
    isActive: false,
  },
];

const StoryCatalogue = () => {
  return (
    <section id="brevserier" className="py-16 bg-gradient-to-r from-warm-beige/50 to-sepia-gold/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-8">
            Våra brevserier
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Varje breverie är en helt ny berättelse att upptäcka. Utforska våra berättelser och hitta din nästa favoritläsning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <StoryCardFlip key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCatalogue;
