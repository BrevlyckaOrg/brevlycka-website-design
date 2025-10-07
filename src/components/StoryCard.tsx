import { Button } from "@/components/ui/button";
import { Bell, Mail } from "lucide-react";

interface StoryCardProps {
  title: string;
  description: string;
  letterCount: number;
  imageUrl: string;
  isActive: boolean;
}

const StoryCard = ({ title, description, letterCount, imageUrl, isActive }: StoryCardProps) => {
  return (
    <section className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} - Brevserie med ${letterCount} kärleksbrev från 1950-talet`}
          className="w-full h-full object-cover"
        />
        {!isActive && (
          <div className="absolute inset-0 bg-wine-dark/60 flex items-center justify-center">
            <span className="text-white text-xl font-serif bg-wine/80 px-6 py-3 rounded-lg">
              Kommer snart
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col space-y-4">
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl text-wine-dark">
            {title}
          </h3>
          
          <p className="text-base leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="flex items-center gap-2 text-wine pt-2">
            <Mail className="w-5 h-5" />
            <span className="font-medium">{letterCount} brev</span>
          </div>
        </div>

        {/* CTA */}
        {isActive ? (
          <Button 
            size="lg" 
            className="w-full bg-wine hover:bg-wine-light text-beige font-semibold"
          >
            <Mail className="mr-2 h-5 w-5" />
            Beställ dina två första brev – 59 kr
          </Button>
        ) : (
          <Button 
            size="lg" 
            variant="outline"
            className="w-full border-2 border-wine text-wine hover:bg-wine hover:text-beige font-semibold"
          >
            <Bell className="mr-2 h-5 w-5" />
            Tipsa mig när den kommer
          </Button>
        )}
      </div>
    </section>
  );
};

export default StoryCard;
