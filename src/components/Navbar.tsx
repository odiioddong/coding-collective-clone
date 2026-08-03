import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

// Daftar menu navigasi. Disimpan sebagai konstanta di luar komponen
// agar tidak dibuat ulang setiap kali komponen melakukan re-render,
// dan memudahkan penambahan/pengurangan menu di masa depan.
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// Batas scroll (dalam px) sebelum navbar berubah menjadi solid.
const SCROLL_THRESHOLD = 50;

const Navbar = () => {
  // Menandai apakah halaman sudah di-scroll melewati threshold.
  const [isScrolled, setIsScrolled] = useState(false);
  // Menandai apakah menu mobile sedang terbuka.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mendengarkan event scroll untuk mengubah tampilan navbar.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    // Jalankan sekali di awal, untuk menangani kasus halaman
    // yang sudah dalam posisi ter-scroll saat pertama kali dimuat.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menangani klik pada menu: melakukan smooth scroll ke section
  // yang dituju, lalu menutup menu mobile (jika sedang terbuka).
  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();

      const targetElement = document.querySelector(href);
      targetElement?.scrollIntoView({ behavior: "smooth" });

      setIsMenuOpen(false);
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo di sisi kiri */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold tracking-tight text-text transition-colors duration-300 hover:text-muted"
        >
          Coding<span className="text-primary">Collective</span>
        </a>

        {/* Menu desktop, tersembunyi di layar kecil */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-text transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol hamburger, hanya tampil di layar kecil (mobile & tablet) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-text transition-colors duration-300 hover:text-primary md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu mobile: animasi buka/tutup menggunakan transisi max-height + opacity */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-background transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block rounded-md px-2 py-3 text-sm font-medium text-text transition-colors duration-300 hover:text-primary"
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