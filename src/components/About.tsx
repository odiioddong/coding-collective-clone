import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Background asap/gelombang gelap (grayscale biar mirip web asli)
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=70";

const STATS = [
  { end: 10, suffix: "+", label: "Years of Experience" },
  { end: 50, suffix: "+", label: "Total satisfied global clients" },
  { end: 6, suffix: "", label: "Countries business operation" },
  { end: 3, suffix: "", label: "Countries with established office locations" },
  { end: 100, suffix: "+", label: "Certified Developers" },
];

const PARAGRAPHS = [
  "Coding Collective is a technology partner supporting businesses in delivering software solutions and building scalable technology teams.",
  "We operate across six countries, including Singapore, Indonesia, Thailand, Taiwan, Hong Kong, and Dubai, with development centers in Indonesia enabling near-shore delivery and regional execution.",
  "Businesses across the Asia-Pacific region choose Coding Collective to improve efficiency, productivity, and innovation while supporting sustainable growth. Through future-ready technology, experienced professionals, and a strong cross-border delivery model, we help organizations establish resilient digital foundations and remain competitive in an evolving technology landscape.",
];

const Stat = ({ end, suffix, label, start }: { end: number; suffix: string; label: string; start: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1500, 1);
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end]);

  return (
    <div>
      <p className="text-4xl font-extrabold text-primary md:text-5xl">{val}{suffix}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="w-full bg-background">
      {/* ============ INTRO: JUDUL RAKSASA "ABOUT US" ============ */}
      <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Background asap + parallax + slow zoom */}
        <motion.img
          src={ABOUT_IMAGE}
          alt=""
          aria-hidden="true"
          style={{ y: bgY }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-40 grayscale animate-[heroZoom_35s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />

        {/* Judul raksasa muncul dengan scale + fade */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 px-6 text-center text-6xl font-black tracking-tight text-text sm:text-8xl lg:text-9xl"
        >
          ABOUT US
        </motion.h2>
      </div>

      {/* ============ WHO WE ARE (2 kolom seperti web asli) ============ */}
      <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Kiri: heading raksasa dengan titik kuning */}
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl font-black leading-[1.05] tracking-tight text-text sm:text-7xl"
          >
            Who
            <br />
            We Are<span className="text-primary">.</span>
          </motion.h3>

          {/* Kanan: sub + deskripsi (rata kanan seperti asli) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:text-right"
          >
            <h4 className="text-xl font-semibold text-text md:text-2xl">
              A Technology Ecosystem Company Built for Long-Term Impact
            </h4>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Coding Collective empowers organizations to scale through Digital
              Solutions, IT Recruitment, and Tech Community Building. We deliver
              high-value digital products, connect companies with exceptional
              tech talent, and cultivate a vibrant and forward-focused
              technology community.
            </p>
          </motion.div>
        </div>

        {/* ============ STATISTICS + PARAGRAF ============ */}
        <h2 className="mt-24 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Statistics.
        </h2>
        <div ref={ref} className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} start={start} />
          ))}
        </div>
        <div className="mt-16 max-w-4xl space-y-6 text-base leading-relaxed text-muted md:text-lg">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;