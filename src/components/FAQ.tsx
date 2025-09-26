import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Hur många brev ingår i serien?",
      answer: "16 brev totalt som tillsammans bildar en komplett kärlekshistoria från 1950-talets Skåne."
    },
    {
      question: "Hur ofta skickas breven?",
      answer: "Två gånger i månaden under 8 månader. Du får något att se fram emot i vardagen!"
    },
    {
      question: "Kan jag läsa historien digitalt?",
      answer: "Nej, denna berättelse finns endast i fysisk form. Det är en exklusiv upplevelse som bara finns för våra prenumeranter."
    },
    {
      question: "Vad innehåller breven förutom historien?",
      answer: "Varje brev kan innehålla fotografier, kartor över Skåne, eller andra tidstypiska överraskningar som gör berättelsen levande."
    },
    {
      question: "Hur fungerar leveransen?",
      answer: "Breven skickas med vanlig post direkt hem till din brevlåda. Fri frakt ingår i priset."
    },
    {
      question: "Kan jag avboka prenumerationen?",
      answer: "Ja, du kan avboka när som helst genom att kontakta oss. Inga dolda avgifter eller långtidskontrakt."
    },
    {
      question: "Vilka betalningsmetoder accepterar ni?",
      answer: "Vi accepterar alla vanliga kort samt Swish för enkel och säker betalning."
    },
    {
      question: "Hur lång tid tar leveransen?",
      answer: "Breven skickas från Sverige och når dig inom 2-4 arbetsdagar med vanlig post."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Praktisk information
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-sepia-gold/20 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:text-wine-red">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;