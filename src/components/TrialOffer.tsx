import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Heart } from "lucide-react";

const TrialOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-warm-beige/30 to-sepia-gold/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-background/95 shadow-elegant border-2 border-sepia-gold/30">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-wine-red" />
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              🌹 Prova på – två brev för 59 kr
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Beställ de två första breven till självkostnadspris (59 kr) och känn på formatet, känslan och stämningen innan du bestämmer dig.
            </p>
            <Button variant="wine" size="lg" className="text-xl px-12 py-6 rounded-xl shadow-elegant mb-4">
              Beställ dina två första brev – 59 kr
            </Button>
            <p className="text-sm text-muted-foreground">
              Fysiska brev skickas med vanlig post. Ingen digital ersättning. Betalning tas endast för de två första breven.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrialOffer;