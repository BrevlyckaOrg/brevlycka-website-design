import Upplevelsen from "@/components/Experience";
import Footer from "@/components/Footer";
import StoryCatalogue from "@/components/StoryCatalogue";
import WhatYouGet from "@/components/WhatYouGet";
import CTA from "../components/CTA";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div id="hem" className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <CTA />
        <Upplevelsen />
        <StoryCatalogue />
        <WhatYouGet />
      </main>
      <Footer />
    </div>
  );
};

export default Index;