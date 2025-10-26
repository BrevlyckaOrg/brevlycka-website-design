import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { Star } from "lucide-react";
import { useState } from "react";

interface ReviewModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ReviewModal = ({ open, onOpenChange }: ReviewModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        postalCode: "",
        city: "",
        review: "",
        rating: 0
    });

    const [hoveredRating, setHoveredRating] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            // Skicka data till Supabase
            const { data, error } = await supabase
                .from('reviews') // Tabellnamn i Supabase
                .insert([
                    {
                        name: formData.name,
                        email: formData.email || null,
                        address: formData.address,
                        postal_code: formData.postalCode,
                        city: formData.city,
                        review: formData.review,
                        rating: formData.rating,
                        created_at: new Date().toISOString(),
                    }
                ]);

            if (error) {
                console.error('Error submitting order:', error);
                alert('Ett fel uppstod. Försök igen senare.');
                return;
            }

            console.log("Review submitted successfully:", data);
            onOpenChange(false);
            
            // Rensa formuläret
            setFormData({
                name: "",
                email: "",
                address: "",
                postalCode: "",
                city: "",
                review: "",
                rating: 0
            });
            
        } catch (error) {
            console.error('Unexpected error:', error);
            alert('Ett oväntat fel uppstod. Försök igen senare.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateWordCount = (text: string, minWords: number): boolean => {
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        return words.length >= minWords;
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-heading text-wine-dark mb-1">
                        Dina uppgifter
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-700">
                        Lämna ditt omdöme och få ditt nästa brev hem i brevlådan
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    <div className="space-y-2">
                        <Label className="text-lg font-semibold text-gray-900">Betyg * (Välj 1-5 stjärnor)</Label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-wine/50 rounded p-1"
                                >
                                    <Star
                                        className={`w-10 h-10 ${
                                            star <= (hoveredRating || formData.rating)
                                                ? 'fill-[#C6A77C] text-[#C6A77C]'
                                                : 'text-gray-400 stroke-[2px]'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                        {formData.rating === 0 && (
                            <p className="text-sm text-gray-600">Välj ett betyg mellan 1-5 stjärnor</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="review" className="text-lg font-semibold text-gray-900">Omdöme * (minst 10 ord)</Label>
                        <Textarea
                            id="review"
                            name="review"
                            placeholder="Dela med dig av dina tankar om breven... (minst 10 ord)"
                            value={formData.review}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="resize-none text-base p-3 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
                        />
                        {formData.review && !validateWordCount(formData.review, 10) && (
                            <p className="text-sm text-red-600 font-medium">Omdömet måste innehålla minst 10 ord.</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-lg font-semibold text-gray-900">Namn *</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Ditt fullständiga namn"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="text-base h-11 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
                        />
                        {formData.name && !validateWordCount(formData.name, 2) && (
                            <p className="text-sm text-red-600 font-medium">Ange förnamn och efternamn.</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-lg font-semibold text-gray-900">E-post (valfritt)</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="din.epost@exempel.se"
                            value={formData.email}
                            onChange={handleChange}
                            className="text-base h-11 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address" className="text-lg font-semibold text-gray-900">Gatuadress *</Label>
                        <Input
                            id="address"
                            name="address"
                            placeholder="Gatuadress och nummer"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="text-base h-11 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="postalCode" className="text-lg font-semibold text-gray-900">Postnummer *</Label>
                            <Input
                                id="postalCode"
                                name="postalCode"
                                placeholder="123 45"
                                value={formData.postalCode}
                                onChange={handleChange}
                                required
                                className="text-base h-11 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city" className="text-lg font-semibold text-gray-900">Ort *</Label>
                            <Input
                                id="city"
                                name="city"
                                placeholder="Stockholm"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="text-base h-11 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
                            />
                        </div>
                    </div>
                    <div className="pt-4 space-y-3">
                        <Button 
                            type="submit" 
                            variant="wine"
                            size="lg"
                            className="w-full h-12 text-lg font-semibold disabled:opacity-100 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:pointer-events-auto"
                            disabled={!validateWordCount(formData.review, 10) || !validateWordCount(formData.name, 2) || formData.rating === 0}
                        >
                            Skicka in ditt omdöme
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() => onOpenChange(false)}
                        >
                            Avbryt
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewModal;
