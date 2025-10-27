import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { createStripeCheckout } from "@/lib/stripe";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { EmailModal } from "./EmailModal";
import "./storycardflip.css";

interface StoryCardFlipProps {
    title: string;
    description: string;
    detailedDescription: string;
    totalLetters: number | string; // Antal brev i serien
    imageUrl: string;
    isActive: boolean;
    priceId?: string; // Stripe Price ID
    price?: string; // Display price (e.g., "59 kr" or "99 kr/mån")
    isSubscription?: boolean; // True för prenumeration, false för engångsbetalning
}

const StoryCardFlip: React.FC<StoryCardFlipProps> = ({
    title,
    description,
    detailedDescription,
    totalLetters,
    imageUrl,
    isActive,
    priceId,
    price,
    isSubscription = false,
}) => {
    const [flipped, setFlipped] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const { toast } = useToast();

    const handleBuyClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Förhindra att kortet flippar
        
        if (!priceId) {
            toast({
                title: "Fel",
                description: "Produkten är inte konfigurerad korrekt",
                variant: "destructive",
            });
            return;
        }

        // Öppna email-modal istället för att gå direkt till checkout
        setEmailModalOpen(true);
    };

    const handleEmailSubmit = async (email: string) => {
        if (!priceId) return;

        setLoading(true);
        
        try {
            await createStripeCheckout({
                priceId,
                productName: title,
                isSubscription,
                totalLetters: typeof totalLetters === 'number' ? totalLetters : undefined,
                customerEmail: email, // Skicka med email till checkout
            });
        } catch (error) {
            toast({
                title: "Ett fel uppstod",
                description: "Kunde inte starta betalningen. Försök igen.",
                variant: "destructive",
            });
            setLoading(false);
        }
        // Note: setLoading(false) hanteras inte här eftersom användaren redirectas till Stripe
    };

    const handleEmailModalClose = () => {
        setEmailModalOpen(false);
        setLoading(false);
    };

    return (
        <div
            className="relative w-full h-[600px] cursor-pointer perspective group"
            onClick={() => setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
            aria-label={`Klicka för att läsa mer om ${title}`}
        >
            {/* Hidden demo button for triggering checkout manually */}
            <button
                style={{ display: "none" }}
                id="demo-checkout-trigger"
                type="button"
                onClick={async (e) => {
                    e.stopPropagation();
                    if (!priceId) {
                        toast({
                            title: "Fel",
                            description: "Produkten är inte konfigurerad korrekt",
                            variant: "destructive",
                        });
                        return;
                    }
                    setLoading(true);
                    try {
                        await createStripeCheckout({
                            priceId: 'price_1SMxEtFlv6OlNKpK3xndobEZ',
                            productName: title,
                            isSubscription,
                            totalLetters: typeof totalLetters === 'number' ? totalLetters : undefined,
                            customerEmail: "info@brevlycka.se",
                        });
                    } catch (error) {
                        toast({
                            title: "Ett fel uppstod",
                            description: "Kunde inte starta demo-checkout.",
                            variant: "destructive",
                        });
                        setLoading(false);
                    }
                }}
            >
                Demo Checkout
            </button>
            <div
                className={`absolute inset-0 transition-transform duration-500 transform-gpu [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* Front Side */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow flex flex-col backface-hidden overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative h-[320px] overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={`${title} - Brevserie med romantiska brev från 1950-talets Skåne`}
                            className="w-full h-full object-cover"
                        />
                        {isActive && (
                            <div className="absolute inset-0 bg-wine-dark/60 flex items-center justify-center">
                                <h3 className="text-white text-2xl bg-wine/80 px-6 py-3 rounded-lg">
                                    Läs mer
                                </h3>
                            </div>
                        )}
                        {!isActive && (
                            <div className="absolute inset-0 bg-wine-dark/60 flex items-center justify-center">
                                <span className="text-white text-2xl bg-wine/80 px-6 py-3 rounded-lg">
                                    Kommer snart
                                </span>
                            </div>
                        )}
                    </div>
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        {/* Prova på badge - visas bara för prenumerationer */}
                        {/* {isSubscription && (
                            <div className="mb-3 -mt-2">
                                <span className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                                    🎁 Prova första månaden för 59 kr!
                                </span>
                            </div>
                        )} */}
                        <div className="flex-1 space-y-3">
                            <h3 className="text-2xl text-wine-dark group-hover:text-wine transition-colors">{title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed text-gray-700">{description}</p>
                            <div className="flex items-center gap-2 text-wine pt-2">
                                <Mail className="w-5 h-5" />
                                <span className="text-lg">{totalLetters} brev (2 brev/månad)</span>
                            </div>
                            {price && (
                                <div className="pt-3 space-y-1">
                                    <div className="text-2xl text-wine-dark">{price}</div>
                                    {isSubscription && (
                                        <div className="text-sm text-gray-600 font-medium">
                                            Ingen bindningstid • Avsluta när du vill
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* Click indicator */}
                        <div className="flex items-center justify-center gap-2 text-wine/70 text-base py-3 border-t border-wine/20 mt-4">
                            <span className="group-hover:text-wine transition-colors font-medium">Klicka för mer info</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        {/* CTA */}
                        {isActive ? (
                            <Button 
                                variant="wine" 
                                size="lg" 
                                className="w-full text-xl font-bold py-7"
                                onClick={handleBuyClick}
                                disabled={loading}
                            >
                                {loading ? 'Laddar...' : 'Beställ nu'}
                            </Button>
                        ) : (
                            <div/>
                        )} 
                    </div>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-warm-beige rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow backface-hidden rotate-y-180 h-full overflow-hidden">
                    <div className="p-6 h-full flex flex-col">
                        <h3 className="text-2xl text-wine-dark mb-4 flex-shrink-0">{title}</h3>
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-wine/30 scrollbar-track-transparent">
                            <p className="text-xl leading-relaxed text-muted-foreground text-left whitespace-pre-line">
                                {detailedDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Email Modal */}
            <EmailModal
                open={emailModalOpen}
                onClose={handleEmailModalClose}
                onSubmit={handleEmailSubmit}
                loading={loading}
                priceId={priceId}
                productName={title}
            />
        </div>
    );
};

export default StoryCardFlip;
