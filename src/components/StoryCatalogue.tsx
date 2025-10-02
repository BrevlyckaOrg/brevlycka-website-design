import StoryCard from "./StoryCard";
import storyImage from "@/assets/story-love-1950s.jpg";

const stories = [
  {
    title: "Kärlek på dansbanegolvet",
    description: "En kärlekshistoria från Skåne på 1950-talet. Följ Anna och Erik genom sommarens dansbanor, kafferep och hemliga möten i en tid när kärleken växte långsamt genom brev och förstulet möten.",
    letterCount: 16,
    imageUrl: storyImage,
    isActive: true,
  },
  {
    title: "Kommande berättelser",
    description: "Fler berättelser är på väg! Låt oss tipsa dig när nästa breverie släpps. Varje serie är unik och tar dig med till en annan tid och plats.",
    letterCount: 16,
    imageUrl: storyImage,
    isActive: false,
  },
];

const StoryCatalogue = () => {
  return (
    <section className="py-16 md:py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-wine-dark">
            Våra berättelser
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Varje breverie är en helt ny berättelse att upptäcka. Utforska våra berättelser och hitta din nästa favoritläsning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCatalogue;
