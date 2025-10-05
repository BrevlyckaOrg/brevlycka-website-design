import collectibles from "@/assets/collectibles.jpg";
import { Image, PenLine, ScrollText } from "lucide-react";

const Upplevelsen = () => {
    {/* The Experience */ }
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-8">
                            Upplevelsen
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Att öppna ett brev från Brevlycka är som att kliva in i en annan värld. Varje utskick är skrivet i klassisk brevstil och låter dig följa en berättelse som växer fram steg för steg, med ord som känns personliga och äkta. Ibland döljer sig dessutom små överraskningar i kuvertet – som illustrationer, fotografier eller detaljer som gör historien ännu mer levande. Det är mer än en bok – det är en samlarupplevelse.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Image className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-heading text-xl font-semibold mb-2">Levande detaljer</h3>
                                    <p className="text-muted-foreground text-lg">Illustrationer, fotografier eller andra små överraskningar fördjupar upplevelsen.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ScrollText className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-heading text-xl font-semibold mb-2">En resa i brevform</h3>
                                    <p className="text-muted-foreground text-lg">En berättelse som når dig i små kapitel – ett brev i taget – direkt till brevlådan.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <PenLine className="w-8 h-8 text-wine-red mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-heading text-xl font-semibold mb-2">Personligt och berörande</h3>
                                    <p className="text-muted-foreground text-lg">Skrivna som riktiga brev mellan människor, fyllda av känslor, relationer och tidstypiska detaljer.</p>
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
    );
}

export default Upplevelsen;
