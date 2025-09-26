import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Heart, Camera, MapPin, Package, Clock, Calendar } from "lucide-react";
import heroLetters from "@/assets/hero-letters.jpg";
import collectibles from "@/assets/collectibles.jpg";
import mailbox from "@/assets/mailbox.jpg";
import brevlyckaLogo from "@/assets/brevlycka-logo.png";
import TrialOffer from "@/components/TrialOffer";
import ReviewSection from "@/components/ReviewSection";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header with Logo */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-sepia-gold/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={brevlyckaLogo} 
                alt="Brevlycka" 
                className="h-12 w-auto"
              />
              <div className="hidden md:block">
                <p className="text-sm text-muted-foreground italic">
                  Ett personligt brev i brevlådan. En hel berättelse i din hand.
                </p>
              </div>
            </div>
            <Button variant="wine" size="lg" className="hidden md:inline-flex">
              Beställ din brevserie
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wine" size="lg" className="text-xl px-12 py-6 rounded-xl shadow-elegant">
              Beställ dina två första brev – 59 kr
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl">
              Läs mer
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get - Key Facts */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Vad du får
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
              <Mail className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-3">16 brev på fint papper</h3>
              <p className="text-muted-foreground text-sm">Tryckta och skickade exklusivt till dig</p>
            </Card>
            <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
              <Calendar className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-3">Två utskick per månad</h3>
              <p className="text-muted-foreground text-sm">Något att se fram emot i vardagen</p>
            </Card>
            <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
              <Heart className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-3">Exklusiv berättelse</h3>
              <p className="text-muted-foreground text-sm">Finns bara här – inte på nätet eller i bokhandeln</p>
            </Card>
            <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
              <Package className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-3">Samlarobjekt</h3>
              <p className="text-muted-foreground text-sm">Spara och samla breven som en unik serie</p>
            </Card>
            <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
              <MapPin className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-3">Vanlig post</h3>
              <p className="text-muted-foreground text-sm">Utskick direkt hem till dig</p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Upplevelsen
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Att öppna kuvertet är som att stiga in i en annan tid. Breven är skrivna i klassisk brevstil och tar dig med till Skåne på 1950-talet – en tid av dansbanor, kafferep, cykelturer och hemliga möten. Utskick kan innehålla fotografier, kartor eller andra tidstypiska överraskningar. Det är mer än en historia – det är en samlarupplevelse.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Tidstypiska överraskningar</h3>
                    <p className="text-muted-foreground text-lg">Fotografier, kartor och andra autentiska detaljer som gör berättelsen levande.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Camera className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">1950-talets Skåne</h3>
                    <p className="text-muted-foreground text-lg">En tid av dansbanor, kafferep och hemliga möten på bekanta platser.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Klassisk brevstil</h3>
                    <p className="text-muted-foreground text-lg">Skrivna som riktiga brev från en annan tid – personligt och berörande.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={collectibles} 
                alt="Vintage letters with photographs and maps from 1950s Skåne"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trial Offer */}
      <TrialOffer />

      {/* Why Subscribe */}
      <section className="py-20 bg-gradient-to-r from-warm-beige/50 to-sepia-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">
            Varför prenumerera på Brevlycka?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Exklusivt samlarformat</h3>
              <p className="text-muted-foreground text-lg">Bara för prenumeranter</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">En tydlig början och ett slut</h3>
              <p className="text-muted-foreground text-lg">16 delar som bildar en hel berättelse</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">En känsla av nostalgi</h3>
              <p className="text-muted-foreground text-lg">Riktiga brev i din brevlåda, inte digitalt</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">En personlig gåva</h3>
              <p className="text-muted-foreground text-lg">Till dig själv eller någon du tycker om</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <ReviewSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-warm-beige to-sepia-gold/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Beställ idag och låt berättelsen börja
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Snart kommer det första brevet till din brevlåda. En kärlekshistoria från 1950-talets Skåne väntar på att upptäckas.
          </p>
          <Button variant="wine" size="lg" className="text-2xl px-16 py-8 rounded-xl shadow-elegant mb-8">
            Beställ dina två första brev – 59 kr
          </Button>
          <p className="text-lg text-muted-foreground">
            Säker betalning • Avboka när som helst • Fri frakt i Sverige
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-beige/40 py-16 border-t border-sepia-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src={brevlyckaLogo} 
                alt="Brevlycka" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-muted-foreground text-lg leading-relaxed">
                En kärlekshistoria från 1950-talets Skåne, berättad genom 16 exklusiva brev.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">Kontakt</h3>
              <div className="space-y-2 text-muted-foreground text-lg">
                <p>support@brevlycka.se</p>
                <p>08-123 456 78</p>
                <p>Måndag-fredag 9-17</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">Information</h3>
              <div className="space-y-2 text-muted-foreground text-lg">
                <p>Enkel retur och återbetalning</p>
                <p>Fri frakt i hela Sverige</p>
                <p>Säker betalning med kort eller Swish</p>
              </div>
            </div>
          </div>
          <div className="border-t border-sepia-gold/20 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground">© 2024 Brevlycka. Alla rättigheter förbehållna.</p>
              <div className="flex gap-6 text-muted-foreground">
                <a href="#" className="hover:text-wine-red transition-colors">Integritetspolicy</a>
                <a href="#" className="hover:text-wine-red transition-colors">Villkor</a>
                <a href="#" className="hover:text-wine-red transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;