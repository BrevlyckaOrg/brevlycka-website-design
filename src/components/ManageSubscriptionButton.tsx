import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { openCustomerPortal } from "@/lib/customer-portal";
import { Settings } from "lucide-react";
import { useState } from "react";

interface ManageSubscriptionButtonProps {
  stripeCustomerId: string;
}

const ManageSubscriptionButton: React.FC<ManageSubscriptionButtonProps> = ({ stripeCustomerId }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleClick = async () => {
    setLoading(true);
    try {
      await openCustomerPortal(stripeCustomerId);
    } catch (error) {
      toast({
        title: "Ett fel uppstod",
        description: "Kunde inte öppna prenumerationshantering. Försök igen.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant="outline"
      className="gap-2"
    >
      <Settings className="w-4 h-4" />
      {loading ? "Laddar..." : "Hantera konto"}
    </Button>
  );
};

export default ManageSubscriptionButton;
