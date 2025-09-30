import brevlyckaLogo from "@/assets/brevlycka-logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerOpacity, setHeaderOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 300);
      setHeaderOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="bg-background/95 backdrop-blur-sm border-b border-sepia-gold/20 sticky top-0 z-50 transition-opacity duration-100"
      style={{ opacity: headerOpacity }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={brevlyckaLogo}
          alt="Brevlycka"
          className="h-72 w-auto -mb-8 m"
        />
        <p className="text-xl text-muted-foreground italic text-center ml-10 mr-10 -mt-5 mb-4 md:-ml-8">
          Upplev magin i historier som växer fram genom omsorgsfulla brev<br /> – levererade direkt till din brevlåda, två gånger i månaden!
        </p>
      </div>
    </header>
  );
};

export default Header;
