import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Heart, Camera, MapPin, Package, Clock } from "lucide-react";
import heroLetters from "@/assets/hero-letters.jpg";
import collectibles from "@/assets/collectibles.jpg";
import mailbox from "@/assets/mailbox.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-sepia-gold/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroLetters})` }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            En kärlekshistoria i brev
            <span className="block text-3xl md:text-4xl font-normal text-muted-foreground mt-2">
              direkt hem till din brevlåda
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Följ en berättelse från 1950-talets Skåne, utskickad i 16 exklusiva brev – två gånger i månaden.
          </p>
          <Button variant="wine" size="lg" className="text-lg px-8 py-4 rounded-xl">
            Beställ din brevserie
          </Button>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Vad får du?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-background shadow-soft border-sepia-gold/20">
              <Mail className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Fysiska brev</h3>
              <p className="text-muted-foreground">Handprintade brev i vacker kvalitet, levererade direkt till din brevlåda.</p>
            </Card>
            <Card className="p-8 text-center bg-background shadow-soft border-sepia-gold/20">
              <Clock className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Två gånger i månaden</h3>
              <p className="text-muted-foreground">Regelbunden glädje – få ett nytt brev var fjortonde dag i 8 månader.</p>
            </Card>
            <Card className="p-8 text-center bg-background shadow-soft border-sepia-gold/20">
              <Heart className="w-12 h-12 text-wine-red mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Komplett kärlekshistoria</h3>
              <p className="text-muted-foreground">16 brev som tillsammans berättar en hel romantisk historia från 1950-talet.</p>
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
                En upplevelse som väcker minnen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Samlarobjekt att bevara</h3>
                    <p className="text-muted-foreground">Varje brev innehåller unika bilagor – fotografier, kartor och andra tidsperiodstrogna inserts som gör berättelsen levande.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Camera className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Autentiska detaljer</h3>
                    <p className="text-muted-foreground">Gamla fotografier, handritade kartor över Skåne och brevpapper som får dig att känna doften av 1950-talet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Förankrat i Skåne</h3>
                    <p className="text-muted-foreground">Berättelsen utspelar sig i det pittoreska 1950-talets Skåne, med platser du kanske känner igen.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={collectibles} 
                alt="Vintage letters with photographs and maps"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="py-20 bg-gradient-to-r from-warm-beige/50 to-sepia-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">
            Varför prenumerera på Brevlycka?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-wine-red" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Exklusiva brev</h3>
              <p className="text-muted-foreground text-sm">Endast tillgängliga genom prenumeration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-wine-red" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Komplett kärlekshistoria</h3>
              <p className="text-muted-foreground text-sm">16 brev som berättar hela historien</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-wine-red" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Samlarobjekt</h3>
              <p className="text-muted-foreground text-sm">Fotografier, kartor och minnessaker</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-wine-red" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Nostalgi och glädje</h3>
              <p className="text-muted-foreground text-sm">I varje kuvert som kommer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={mailbox} 
                alt="Swedish mailbox with letters"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Praktisk information
              </h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-sepia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-wine-red font-bold">16</span>
                  </div>
                  <p className="text-muted-foreground">Totalt 16 brev som tillsammans bildar en komplett berättelse</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-sepia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-wine-red" />
                  </div>
                  <p className="text-muted-foreground">Utskickade två gånger i månaden under 8 månader</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-sepia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-wine-red" />
                  </div>
                  <p className="text-muted-foreground">Endast fysisk post – inget digitalt alternativ</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-sepia-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-wine-red" />
                  </div>
                  <p className="text-muted-foreground">Varje brev innehåller unika bilagor och samlarobjekt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-warm-beige to-sepia-gold/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Beställ idag och låt berättelsen börja
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Snart kommer det första brevet till din brevlåda. En kärlekshistoria från 1950-talets Skåne väntar på att upptäckas.
          </p>
          <Button variant="wine" size="lg" className="text-xl px-12 py-6 rounded-xl shadow-elegant">
            Prenumerera nu
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Säker betalning • Avboka när som helst • Fri frakt i Sverige
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;