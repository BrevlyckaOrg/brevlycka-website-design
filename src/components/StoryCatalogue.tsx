import { default as storyImage } from "@/assets/skane.jpg";
import { default as loveStoryImage } from "@/assets/story-love-1950s.jpg";
import StoryCardFlip from "./StoryCardFlip";

const stories = [
  // {
  //   title: "Prova på - Sanningen mellan raderna",
  //   description: "Prova vår brevserie! Få de två första breven från serien och upplev magin själv. Perfekt för att se om våra brevserier är något för dig.",
  //   detailedDescription:
  //     "Prova på vårt koncept med de två första breven från \"Sanningen mellan raderna\".\n\n" +
  //     "År 1956 möts studenten Karin Persson från Lund och fiskarsonen Nils Andersson från Skillinge – två unga människor från olika världar som förenas av en oväntad brevväxling.\n\n" +
  //     "Med detta prova på-erbjudande får du:\n" +
  //     "✉️ Brev 1 & 2 från serien\n" +
  //     "📬 Levererat direkt i din brevlåda\n" +
  //     "🎨 Autentiskt 1950-tals utseende\n" +
  //     "💝 Perfekt present eller själv-unna\n\n" +
  //     "Engångsbetalning - inga återkommande avgifter.",
  //   totalLetters: 2,
  //   imageUrl: loveStoryImage,
  //   isActive: true,
  //   priceId: import.meta.env.VITE_STRIPE_TRIAL_PRICE_ID,
  //   price: "59 kr",
  //   isSubscription: false,
  // },
  {
    title: "Sanningen mellan raderna",
    description: "År 1956 möts studenten Karin från Lund och fiskarsonen Nils från Skillinge av en slump, och en brevväxling som börjar i oskyldig förälskelse växer till något större. Men bakom Karins ord döljer sig en hemlighet.",
    detailedDescription:
      "År 1956 möts studenten Karin Persson från Lund och fiskarsonen Nils Andersson från Skillinge – två unga människor från olika världar som förenas av en oväntad brevväxling.\n" +
      "Det som börjar som en spirande romans förvandlas snart till något mer komplicerat när Karin antyder att hon bär på en hemlighet, något som kan förändra allt mellan dem.\n\n" +
      "Genom tolv brev växer deras relation – fylld av längtan, tvekan och tidens oskrivna regler – medan sanningen långsamt avslöjas mellan raderna.\n\n" +
      "Deras berättelse är fylld av tidstypiska detaljer, levande karaktärer och en atmosfär som tar dig tillbaka till 1950-talets Skåne.\n" +
      "Varje brev är noggrant utformat för att fånga känslan av tiden, med små överraskningar som illustrationer, fotografier och personliga anteckningar som gör historien ännu mer levande.\n\n" +
      "📬 12 brev totalt\n" +
      "📅 2 brev varje månad i 6 månader\n" +
      "🚫 Ingen bindningstid – avsluta när du vill\n" +
      "📬 Levererat direkt i din brevlåda\n" +
      "🎨 Autentiskt 1950-tals utseende\n" +
      "💝 Perfekt som present till någon du tycker om",
    totalLetters: 12,
    imageUrl: loveStoryImage,
    isActive: true,
    priceId: import.meta.env.VITE_STRIPE_SUBSCRIPTION_PRICE_ID,
    price: "Prova 2 brev för 59 kr, därefter 109 kr/mån",
    isSubscription: true,
  },
  {
    title: "Kommande berättelser",
    description: "Fler berättelser är på väg! Låt oss tipsa dig när nästa breverie släpps. Varje serie är unik och tar dig med till en annan tid och plats.",
    detailedDescription: "Kommer snart!",
    totalLetters: "12-16",
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <StoryCardFlip key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCatalogue;
