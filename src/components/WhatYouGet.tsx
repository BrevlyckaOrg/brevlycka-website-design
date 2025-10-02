import { Calendar, Heart, Mail, Star } from "lucide-react";

const WhatYouGet = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-warm-beige/50 to-sepia-gold/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-12">
            Varför prenumerera på Brevlycka?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Bara för prenumeranter</h3>
              <p className="text-muted-foreground text-lg">Brev tryckta och skickade exklusivt till dig</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Två utskick per månad</h3>
              <p className="text-muted-foreground text-lg">Något att se fram emot i vardagen</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Exklusiv berättelse</h3>
              <p className="text-muted-foreground text-lg">Finns bara här – inte på nätet eller i bokhandeln</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-wine-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-wine-red" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">En personlig gåva</h3>
              <p className="text-muted-foreground text-lg">Till dig själv eller någon du tycker om</p>
            </div>
          </div>
        </div>
      </section>
        // <section className="py-20 bg-warm-beige/30">
        //     <div className="container mx-auto px-4">
        //         <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
        //             Vad du får
        //         </h2>
        //         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        //             <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
        //                 <Mail className="w-12 h-12 text-wine-red mx-auto mb-4" />
        //                 <h3 className="font-heading text-lg font-semibold mb-3">16 brev på fint papper</h3>
        //                 <p className="text-muted-foreground text-sm">Tryckta och skickade exklusivt till dig</p>
        //             </Card>
        //             <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
        //                 <Calendar className="w-12 h-12 text-wine-red mx-auto mb-4" />
        //                 <h3 className="font-heading text-lg font-semibold mb-3">Två utskick per månad</h3>
        //                 <p className="text-muted-foreground text-sm">Något att se fram emot i vardagen</p>
        //             </Card>
        //             <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
        //                 <Heart className="w-12 h-12 text-wine-red mx-auto mb-4" />
        //                 <h3 className="font-heading text-lg font-semibold mb-3">Exklusiv berättelse</h3>
        //                 <p className="text-muted-foreground text-sm">Finns bara här – inte på nätet eller i bokhandeln</p>
        //             </Card>
        //             <Card className="p-6 text-center bg-background shadow-soft border-sepia-gold/20">
        //                 <Package className="w-12 h-12 text-wine-red mx-auto mb-4" />
        //                 <h3 className="font-heading text-lg font-semibold mb-3">Samlarobjekt</h3>
        //                 <p className="text-muted-foreground text-sm">Spara och samla breven som en unik serie</p>
        //             </Card>
        //         </div>
        //     </div>
        // </section>
    );
}

export default WhatYouGet;