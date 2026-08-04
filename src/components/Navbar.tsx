import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Community", href: "#community" },
  { label: "Contact Us", href: "#contact" },
] as const;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Efek Scroll (Transparan vs Solid)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek Scroll Spy (deteksi section yang sedang dilihat)
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 100;

      // Kalau sudah mentok di bawah halaman, aktifkan menu terakhir (Contact Us)
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(NAV_LINKS[NAV_LINKS.length - 1].href);
        return;
      }

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const sectionId = NAV_LINKS[i].href.substring(1);
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].href);
          return;
        }
      }
      setActiveSection("#home");
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setActiveSection(href); // langsung kuning saat diklik
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
      <nav className="mx-auto flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="shrink-0"
        >
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-12 lg:h-14" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-colors duration-300 xl:text-base ${
                    isActive ? "text-primary" : "text-text hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-text hover:text-primary lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden bg-background transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block rounded-md px-2 py-3 text-sm font-semibold transition-colors ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;