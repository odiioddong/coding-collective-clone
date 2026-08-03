import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Gambar.png";

const HERO_CONTENT = {
  brand: "Coding Collective",
  typingPhrases: ["360° Custom Digitalization", "IT Community"],
  headline: "Your Go-To Hub for Custom Software & Scalable Tech Teams",
  description:
    "We help businesses build reliable software and scale tech teams efficiently to support long-term growth.",
  primaryCta: { label: "View Work", href: "#works" },
  secondaryCta: { label: "Book Consultation", href: "#contact" },
} as const;

/* Hook typewriter — baru jalan setelah preloader selesai (enabled) */
const useTypewriter = (
  phrases: readonly string[],
  enabled: boolean,
  typeSpeed = 90,
  deleteSpeed = 45,
  pauseMs = 2000
) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const current = phrases[index % phrases.length];
    let timer: number | undefined;

    if (!deleting && text === current) {
      timer = window.setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timer = window.setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => window.clearTimeout(timer);
  }, [text, deleting, index, enabled, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return text;
};

const Hero = ({ ready = true }: { ready?: boolean }) => {
  const typedText = useTypewriter(HERO_CONTENT.typingPhrases, ready);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-background"
    >
      {/* Background foto: zoom-in cinematic saat ready */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-50 animate-[heroZoom_25s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />
      </motion.div>

      <div className="relative z-10 w-full px-5 pb-28 pt-36 sm:px-8 lg:px-10 lg:pb-32 lg:pt-40">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Judul: slide up pertama */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 text-[36px] font-extrabold leading-[1.05] tracking-tight text-text sm:text-[48px] lg:text-[64px] xl:text-[72px]"
          >
            {HERO_CONTENT.brand}
            <span className="align-super text-[0.42em] font-bold text-primary">®</span>
          </motion.h1>

          {/* Typewriter: muncul setelah judul */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 whitespace-nowrap text-[18px] font-bold text-text sm:text-[28px] lg:text-[36px] xl:text-[44px]"
            aria-label={HERO_CONTENT.typingPhrases[0]}
          >
            {typedText}
            <span
              aria-hidden="true"
              className="ml-2 inline-block h-[0.9em] w-[5px] translate-y-[0.12em] bg-primary animate-[blink_1s_step-end_infinite]"
            />
          </motion.p>
        </div>

        <div className="mt-12 max-w-3xl lg:mt-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="text-lg leading-snug text-text/90 md:text-xl"
          >
            {HERO_CONTENT.headline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
            className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-text backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-95"
            >
              {HERO_CONTENT.primaryCta.label}
            </a>
            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-background transition-all duration-300 hover:bg-primary-hover active:scale-95"
            >
              {HERO_CONTENT.secondaryCta.label}
            </a>
          </motion.div>
        </div>
      </div>

      <p className="absolute bottom-24 right-6 z-10 text-sm text-muted">
        © {new Date().getFullYear()} Coding Collective
      </p>

      {/* Tombol WhatsApp melayang */}
      <a
        href="https://wa.me/6596683807"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;