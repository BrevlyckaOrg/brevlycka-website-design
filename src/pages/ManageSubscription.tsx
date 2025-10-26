import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { openCustomerPortal } from "@/lib/customer-portal";
import { supabase } from "@/lib/supabase";
import { Mail } from "lucide-react";
import { useState } from "react";

const   ManageSubscription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Rensa tidigare fel

    try {
      const searchEmail = email.toLowerCase().trim();
      console.log("Searching for email:", searchEmail);

      // Use secure RPC function to lookup customer
      const { data, error: rpcError } = await supabase
        .rpc('get_customer_portal_id', {
          customer_email: searchEmail
        });

      if (rpcError) {
        console.error("Database error:", rpcError);
        throw rpcError;
      }

      if (!data || data.length === 0 || !data[0]?.stripe_customer_id) {
        console.log("No customers found for email:", searchEmail);
        setError("Vi kunde inte hitta någon prenumeration kopplad till den e-postadressen.");
        setLoading(false);
        return;
      }

      const stripeCustomerId = data[0].stripe_customer_id;

      // Öppna Customer Portal
      await openCustomerPortal(stripeCustomerId);
    } catch (error) {
      console.error("Error:", error);
      setError("Kunde inte öppna prenumerationshantering. Försök igen eller kontakta oss på info@brevlycka.se");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-beige">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-wine mx-auto mb-4" />
              <h1 className="font-heading text-3xl font-bold text-wine-dark mb-2">
                Hantera din prenumeration
              </h1>
              <p className="text-muted-foreground">
                Ange din e-postadress för att få tillgång till din prenumerationshantering
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-postadress
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(""); // Rensa fel när användaren börjar skriva
                  }}
                  placeholder="din@email.se"
                  required
                  className={`w-full ${error ? "border-red-500" : ""}`}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600 font-medium">
                    {error}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  disabled={loading}
                  variant="wine"
                  size="lg"
                  className="w-full"
                >
                  {loading ? "Söker..." : "Fortsätt"}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = '/'}
                >
                  Avbryt
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-center text-muted-foreground">
                Behöver du hjälp? Kontakta oss på{" "}
                <a href="mailto:info@brevlycka.se" className="text-wine hover:underline">
                  info@brevlycka.se
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscription;
