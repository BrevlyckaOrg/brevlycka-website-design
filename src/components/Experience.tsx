import collectibles from "@/assets/collectibles.jpg";
import { Camera, Heart, Package } from "lucide-react";

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
    );
}

export default Upplevelsen;
