import heroImage from "../assets/hero.png";

// Konten hero disimpan sebagai konstanta agar mudah diubah tanpa
// menyentuh struktur JSX.
const HERO_CONTENT = {
  eyebrow: "Coding Collective®",
  headline: "Your Go-To Hub for Custom Software & Scalable Tech Teams",
  description:
    "We help businesses build reliable software and scale tech teams efficiently to support long-term growth.",
  // Urutan & style tombol mengikuti referensi: "View Work" outline,
  // "Book Consultation" solid (jadi CTA utama).
  primaryCta: { label: "View Work", href: "#services" },
  secondaryCta: { label: "Book Consultation", href: "#contact" },
};

const Hero = () => {
  return (
    // id="home" -> target smooth scroll dari menu Navbar.
    // min-h-screen + flex items-center: konten vertically-centered,
    // sama seperti referensi.
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-background"
    >
      {/* Background image full-bleed (bukan kolom terpisah), meniru
          layout referensi yang pakai video/graphic di seluruh lebar section. */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        {/* Overlay gradient agar teks tetap kontras di atas background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Ambient glow dekoratif di belakang teks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[160px]"
      />

      {/* Padding section: pt diberi tambahan untuk offset tinggi Navbar
          fixed (+/- 32px), py mengikuti spacing 120px seperti referensi. */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-[120px] lg:pt-[152px]">
        {/* Teks rata kiri, tidak dibagi kolom -- sesuai referensi yang
            memakai full-width background, bukan split text/image. */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {HERO_CONTENT.eyebrow}
          </span>

          {/* Font size minimal 64px, dijaga tetap besar di semua breakpoint */}
          <h1 className="mt-4 text-[40px] font-extrabold leading-[1.1] tracking-tight text-text sm:text-[52px] lg:text-[64px]">
            {HERO_CONTENT.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {HERO_CONTENT.description}
          </p>

          {/* CTA buttons: "View Work" outline, "Book Consultation" solid
              -- urutan & style disamakan dengan referensi. */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-text/40 px-8 py-3 text-sm font-semibold text-text transition-colors duration-300 hover:border-text hover:bg-text hover:text-background"
            >
              {HERO_CONTENT.primaryCta.label}
            </a>

            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background transition-colors duration-300 hover:bg-primary-hover"
            >
              {HERO_CONTENT.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;