import collectibles from "@/assets/hero-envelope.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
                        <img
                            src={collectibles}
                            alt="Vintage letters with photographs and maps from 1950s Skåne"
                            className="rounded-2xl shadow-elegant w-full"
                        />
                    </div>
                    <div>
                        <div className="relative z-10 container mx-auto px-4 text-left">
                            <h1 className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                                Upplev magin i historier som växer fram genom omsorgsfulla brev –
                                <span className="block text-1xl md:text-2xl lg:text-3xl font-normal text-muted-foreground mt-2">
                                    levererade direkt till din brevlåda, två gånger i månaden!
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Upptäck en helt ny sorts läsupplevelse – en berättelse berättad i brevform. Två gånger i månaden landar ett nytt brev i din brevlåda, med vackra ord, tidstypiska detaljer och känslan av att öppna något unikt bara för dig.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="wine" size="lg" className="text-xl px-6 py-6 rounded-xl shadow-elegant">
                                    Beställ dina två första brev – 59 kr
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
