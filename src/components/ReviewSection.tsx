import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Ingrid",
      age: 62,
      rating: 5,
      text: "Att öppna ett brev är något helt annat än att läsa i mobilen. Det känns personligt och levande."
    },
    {
      name: "Lars",
      age: 58,
      rating: 5,
      text: "Jag blev fast redan efter första utskicket. Stämningen från 50-talet fångade mig direkt."
    },
    {
      name: "Margareta",
      age: 67,
      rating: 5,
      text: "Vilken underbar upplevelse! Som att få brev från en vän. Jag längtar till varje utskick."
    },
    {
      name: "Bengt",
      age: 71,
      rating: 5,
      text: "Påminner mig om min ungdom. Fotografierna och kartorna gör historien så verklig."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-sepia-gold fill-current' : 'text-muted-foreground/30'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-warm-beige/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Vad våra läsare säger
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 bg-background shadow-soft border-sepia-gold/20 relative">
              <Quote className="w-8 h-8 text-sepia-gold/40 absolute top-6 right-6" />
              <div className="flex items-center gap-2 mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="text-sm text-muted-foreground">
                – {review.name}, {review.age}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="p-8 bg-background/80 shadow-soft border-sepia-gold/20 max-w-md mx-auto">
            <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
              Dela din upplevelse
            </h3>
            <p className="text-muted-foreground mb-6">
              Vad tyckte du? Dela din upplevelse – ditt omdöme hjälper andra.
            </p>
            <Button variant="outline" size="lg" className="w-full">
              Skicka omdöme
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Omdömen publiceras efter kort granskning
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;