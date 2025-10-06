import { default as storyImage } from "@/assets/skane.jpg";
import { default as loveStoryImage } from "@/assets/story-love-1950s.jpg";
import StoryCardFlip from "./StoryCardFlip";

const stories = [
  {
    title: "Sanningen mellan raderna",
    description: "År 1956 möts studenten Karin från Lund och fiskarsonen Nils från Skillinge av en slump, och en brevväxling som börjar i oskyldig förälskelse växer till något större. Men bakom Karins ord döljer sig en hemlighet.",
    detailedDescription:
      "År 1956 möts studenten Karin Persson från Lund och fiskarsonen Nils Andersson från Skillinge – två unga människor från olika världar som förenas av en oväntad brevväxling.\n" +
      "Det som börjar som en spirande romans förvandlas snart till något mer komplicerat när Karin antyder att hon bär på en hemlighet, något som kan förändra allt mellan dem.\n" +
      "Genom tolv brev växer deras relation – fylld av längtan, tvekan och tidens oskrivna regler – medan sanningen långsamt avslöjas mellan raderna.\n" +
      "\n" +
      "Deras berättelse är fylld av tidstypiska detaljer, levande karaktärer och en atmosfär som tar dig tillbaka till 1950-talets Skåne.\n" +
      "Varje brev är noggrant utformat för att fånga känslan av tiden, med små överraskningar som illustrationer, fotografier och personliga anteckningar som gör historien ännu mer levande." +
      "När sista brevet skrivs återstår frågan: var deras kärlek ett öde – eller bara ett spel de båda förlorade?\n",
    letterCount: "12",
    imageUrl: loveStoryImage,
    isActive: false,
  },
  {
    title: "Kommande berättelser",
    description: "Fler berättelser är på väg! Låt oss tipsa dig när nästa breverie släpps. Varje serie är unik och tar dig med till en annan tid och plats.",
    detailedDescription: "Kommer snart!",
    letterCount: "12-16",
    imageUrl: storyImage,
    isActive: false,
  },
];

const StoryCatalogue = () => {
  return (
    <section id="brevserier" className="py-16 bg-sepia-gold/10">
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
