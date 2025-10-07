import { Mail } from "lucide-react";
import React, { useState } from "react";
import "./storycardflip.css";

interface StoryCardFlipProps {
    title: string;
    description: string;
    detailedDescription: string;
    letterCount: string;
    imageUrl: string;
    isActive: boolean;
}

const StoryCardFlip: React.FC<StoryCardFlipProps> = ({
    title,
    description,
    detailedDescription,
    letterCount,
    imageUrl,
    isActive,
}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[500px] cursor-pointer perspective group"
            onClick={() => setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
            aria-label={`Klicka för att läsa mer om ${title}`}
        >
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
                                <span className="text-white text-xl bg-wine/80 px-6 py-3 rounded-lg">
                                    Kommer snart
                                </span>
                            </div>
                        )}
                    </div>
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col space-y-4">
                        <div className="flex-1 space-y-3">
                            <h3 className="text-2xl text-wine-dark group-hover:text-wine transition-colors">{title}</h3>
                            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
                            <div className="flex items-center gap-2 text-wine pt-2">
                                <Mail className="w-5 h-5" />
                                <span className="font-medium">{letterCount} brev</span>
                            </div>
                        </div>
                        {/* Click indicator */}
                        <div className="flex items-center justify-center gap-2 text-wine/70 text-sm font-medium pt-2 border-t border-wine/10">
                            <span className="group-hover:text-wine transition-colors">Klicka för mer info</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        {/* CTA */}
                        {/* {isActive ? (
                            <Button variant="wine" size="lg" className="text-xl px-6 py-6 rounded-xl shadow-elegant">
                                Beställ dina två första brev – 59 kr
                            </Button>
                        ) : (
                            <Button size="lg" variant="outline" className="w-full border-2 border-wine text-wine hover:bg-wine hover:text-beige font-semibold">
                                <Bell className="mr-2 h-5 w-5" />
                                Tipsa mig när den kommer
                            </Button>
                        )} */}
                    </div>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-warm-beige rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow backface-hidden rotate-y-180 h-full overflow-hidden">
                    <div className="p-6 h-full flex flex-col">
                        <h3 className="text-2xl text-wine-dark mb-4 flex-shrink-0">{title}</h3>
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-wine/30 scrollbar-track-transparent">
                            <p className="text-base leading-relaxed text-muted-foreground text-left whitespace-pre-line">
                                {detailedDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryCardFlip;
