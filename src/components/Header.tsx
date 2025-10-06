import brevlyckaLogo from "@/assets/brevlycka-logo.png";
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "#hem", label: "Hem" },
    { href: "#brevserier", label: "Brevserier" },
    // { href: "#hur-det-fungerar", label: "Så fungerar det" },
    // { href: "#recensioner", label: "Recensioner" },
    // { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Bara påverka opacity på skärmar mindre än 1024px (mobil/tablet)
      if (window.innerWidth < 1024) {
        const opacity = Math.max(0, 1 - scrollY / 300);
        setHeaderOpacity(opacity);
      } else {
        setHeaderOpacity(1); // Alltid synlig på desktop
      }
    };
    
    const handleResize = () => {
      // Återställ opacity vid skärmstorlek-ändring
      if (window.innerWidth >= 1024) {
        setHeaderOpacity(1);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-[#C6A77C]/20 sticky top-0 z-50 transition-opacity duration-100"
       style={{ opacity: headerOpacity }}
    >
      <div className="w-full sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <a href="#hem" className="flex items-center">
              <img
                src={brevlyckaLogo}
                alt="Brevlycka"
                className="h-40 w-auto -mt-7 -mb-7 hover:opacity-90 transition-opacity cursor-pointer"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl text-[#6E2E2A] hover:text-[#9AA57A] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* <button className="p-2 text-[#6E2E2A] hover:text-[#9AA57A]">
              <ShoppingCart className="h-6 w-6" />
            </button> */}
            <button
              className="lg:hidden p-2 text-[#6E2E2A] hover:text-[#9AA57A]"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Öppna meny"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-end lg:hidden transition-all">
              <button
                className="p-4 text-[#6E2E2A] hover:text-[#9AA57A] self-end"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Stäng meny"
              >
                <X className="h-8 w-8" />
              </button>
              <nav className="flex flex-col items-center justify-center flex-1 w-full gap-8">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-heading text-[#6E2E2A] hover:text-[#9AA57A] font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navLinks = [
//     { href: "#hem", label: "Hem" },
//     { href: "#brevserier", label: "Brevserier" },
//     // { href: "#hur-det-fungerar", label: "Så fungerar det" },
//     // { href: "#recensioner", label: "Recensioner" },
//     // { href: "#faq", label: "FAQ" },
//     { href: "#kontakt", label: "Kontakt" },
//   ];
//   return (
//     <header className="bg-white/90 backdrop-blur-sm border-b border-[#C6A77C]/20 sticky top-0 z-50">
//       <div className="w-full sm:px-6 lg:px-16">
//         <div className="flex flex-col md:flex-row justify-between items-center py-4">
//           <div className="flex items-center gap-4">
//             <a href="#hem" className="flex items-center">
//               <img
//                 src={brevlyckaLogo}
//                 alt="Brevlycka"
//                 className="h-40 w-auto -mt-7 -mb-7 hover:opacity-90 transition-opacity cursor-pointer"
//               />
//             </a>
//           </div>

//           <nav className="hidden lg:flex items-center space-x-8">
//             {navLinks.map(link => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-xl text-[#6E2E2A] hover:text-[#9AA57A] font-medium transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-4">
//             {/* <button className="p-2 text-[#6E2E2A] hover:text-[#9AA57A]">
//               <ShoppingCart className="h-6 w-6" />
//             </button> */}
//             <button
//               className="lg:hidden p-2 text-[#6E2E2A] hover:text-[#9AA57A]"
//               onClick={() => setMobileMenuOpen(true)}
//               aria-label="Öppna meny"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//       {/* Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-end lg:hidden transition-all">
//           <button
//             className="p-4 text-[#6E2E2A] hover:text-[#9AA57A] self-end"
//             onClick={() => setMobileMenuOpen(false)}
//             aria-label="Stäng meny"
//           >
//             <X className="h-8 w-8" />
//           </button>
//           <nav className="flex flex-col items-center justify-center flex-1 w-full gap-8">
//             {navLinks.map(link => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-2xl font-heading text-[#6E2E2A] hover:text-[#9AA57A] font-medium transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//         </div>
//       </div>
//     </header>
//   );
// };

export default Header;
