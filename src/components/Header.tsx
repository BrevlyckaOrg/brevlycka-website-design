import brevlyckaLogo from "@/assets/brevlycka-logo.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';



// const Header = () => {
//   const [headerOpacity, setHeaderOpacity] = useState(1);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navLinks = [
//     { href: "#hem", label: "Hem" },
//     { href: "#brevserier", label: "Brevserier" },
//     // { href: "#hur-det-fungerar", label: "Så fungerar det" },
//     // { href: "#recensioner", label: "Recensioner" },
//     // { href: "#faq", label: "FAQ" },
//     { href: "#kontakt", label: "Kontakt" },
//   ];
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       // Bara påverka opacity på skärmar mindre än 1024px (mobil/tablet)
//       if (window.innerWidth < 1024) {
//         const opacity = Math.max(0, 1 - scrollY / 300);
//         setHeaderOpacity(opacity);
//       } else {
//         setHeaderOpacity(1); // Alltid synlig på desktop
//       }
//     };
    
//     const handleResize = () => {
//       // Återställ opacity vid skärmstorlek-ändring
//       if (window.innerWidth >= 1024) {
//         setHeaderOpacity(1);
//       }
//     };
    
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);
    
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <header className="bg-white/90 backdrop-blur-sm border-b border-[#C6A77C]/20 sticky top-0 z-50 transition-opacity duration-100"
//        style={{ opacity: headerOpacity }}
//     >
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
//           {/* Mobile Menu Overlay */}
//           {mobileMenuOpen && (
//             <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-end lg:hidden transition-all">
//               <button
//                 className="p-4 text-[#6E2E2A] hover:text-[#9AA57A] self-end"
//                 onClick={() => setMobileMenuOpen(false)}
//                 aria-label="Stäng meny"
//               >
//                 <X className="h-8 w-8" />
//               </button>
//               <nav className="flex flex-col items-center justify-center flex-1 w-full gap-8">
//                 {navLinks.map(link => (
//                   <a
//                     key={link.href}
//                     href={link.href}
//                     className="text-2xl font-heading text-[#6E2E2A] hover:text-[#9AA57A] font-medium transition-colors"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Hem" },
    { href: "#brevserier", label: "Brevserier" },
    // { href: "#hur-det-fungerar", label: "Så fungerar det" },
    // { href: "#recensioner", label: "Recensioner" },
    // { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
    { href: "/hantera-konto", label: "Mitt Konto" },
  ];
  return (
    <>
    <header className="bg-white/90 backdrop-blur-sm border-b border-[#C6A77C]/20 sticky top-0 z-50">
      <div className="w-full sm:px-6 lg:px-16">
        {/* Mobile layout - hamburger left, logo center */}
        <div className="flex lg:hidden justify-between items-center py-4 relative px-4 min-h-[120px]">
          <button
            className="p-2 text-[#6E2E2A] hover:text-[#9AA57A] z-10"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Öppna meny"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <a href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={brevlyckaLogo}
              alt="Brevlycka"
              className="h-40 w-auto -mt-7 -mb-7 hover:opacity-90 transition-opacity cursor-pointer"
            />
          </a>
          
          {/* Empty div for balance */}
          <div className="w-10"></div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center">
              <img
                src={brevlyckaLogo}
                alt="Brevlycka"
                className="h-40 w-auto -mt-7 -mb-7 hover:opacity-90 transition-opacity cursor-pointer"
              />
            </a>
          </div>

          <nav className="flex items-center space-x-8">
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
            {/* Space for future elements */}
          </div>
        </div>
      </div>
    </header>
    
    {/* Mobile Menu Overlay - Outside header */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden">
        <div className="flex justify-end p-4">
          <button
            className="p-2 text-[#6E2E2A] hover:text-[#9AA57A]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Stäng meny"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
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
    </>
  );
};

export default Header;
