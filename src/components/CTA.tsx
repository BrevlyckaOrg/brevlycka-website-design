import OrderModal from "@/components/ReviewModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MailOpen } from "lucide-react";
import { useEffect, useState } from "react";

const CTA = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  useEffect(() => {
    // Check if URL contains ?order=true
    const params = new URLSearchParams(window.location.search);
    if (params.get('order') === 'true') {
      setOrderModalOpen(true);
      // Optional: Clean up URL by removing the parameter
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <>
      <section className="py-16 bg-sepia-gold/10">
        <Card className="max-w-lg mx-auto border-2 border-primary/20">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center mb-2">
              <MailOpen className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Har du läst det första brevet?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="text-1xl md:text-2xl lg:text-3xl font-normal text-muted-foreground mt-2">
              Lämna ditt omdöme så skickar vi ditt nästa brev
            </div>
            {/* <p className="text-muted-foreground">
          Få en smakstart på berättelsen med två introduktionsbrev
        </p> */}
            <Button
              size="lg"
              className="w-full text-lg py-6"
              onClick={() => setOrderModalOpen(true)}
            >
              Lämna ditt omdöme
            </Button>
          </CardContent>
        </Card>
      </section>
      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    </>
  );
}

export default CTA;