import brevlyckaLogo from "@/assets/brevlycka-logo.png";
import Upplevelsen from "@/components/Experience";
import FAQ from "@/components/FAQ";
import ReviewSection from "@/components/ReviewSection";
import StoryCatalogue from "@/components/StoryCatalogue";
import TrialOffer from "@/components/TrialOffer";
import { Button } from "@/components/ui/button";
import WhatYouGet from "@/components/WhatYouGet";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div id="hem" className="min-h-screen bg-background font-body">
      <Header />
      <Hero />
      <WhatYouGet />
      <Upplevelsen />
      <TrialOffer />
      <StoryCatalogue />

      {/* Review Section */}
      <ReviewSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-warm-beige to-sepia-gold/30 text-center">
  <div className="w-full sm:container sm:mx-auto sm:px-4">
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
  <div className="w-full sm:container sm:mx-auto sm:px-4">
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