import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Landmark,
  Megaphone,
  TrendingUp,
  Plane,
  ShoppingBag,
  Code2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Konten sesuai web asli codingcollective.com/industries
const INDUSTRIES: Industry[] = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description:
      "Secure and compliant digital systems for public services and citizen platforms.",
  },
  {
    icon: Megaphone,
    title: "Agencies & Digital Businesses",
    description:
      "Scalable solutions for agencies and digital-first businesses to grow faster.",
  },
  {
    icon: TrendingUp,
    title: "Financial Services & Fintech",
    description:
      "Robust, secure platforms for banking, payments, and financial products.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description:
      "Seamless booking and customer experience systems for travel businesses.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Omnichannel Commerce",
    description:
      "Unified commerce experiences across online and offline channels.",
  },
  {
    icon: Code2,
    title: "Technology & Software Companies",
    description:
      "Extended engineering teams and reliable infrastructure for tech companies.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, mass: 0.8 },
  },
} as const;

/* Card dengan efek spotlight yang mengikuti kursor */
const IndustryCard = ({ icon: Icon, title, description, index }: Industry & { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

const handleMouseMove = (e: React.MouseEvent) => {
  const el = ref.current; 
  if (!el) return;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      variants={itemVariants}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFC107]/60 hover:shadow-[0_20px_60px_rgba(255,193,7,0.12)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(255,193,7,0.14), transparent 65%)",
        }}
      />

      {/* Garis glow atas saat hover */}
      <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      {/* Nomor urut watermark */}
      <span className="absolute right-6 top-6 text-5xl font-black text-white/5 transition-colors duration-500 group-hover:text-[#FFC107]/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon dengan animasi hover */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 text-[#FFC107] transition-all duration-500 group-hover:scale-110 group-hover:from-[#FFC107] group-hover:to-[#FFB300] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(255,193,7,0.5)]">
        <Icon size={28} strokeWidth={2.2} />
      </div>

      <h3 className="relative mt-6 text-lg font-bold text-white transition-colors duration-500 group-hover:text-[#FFC107] sm:text-xl">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
        {description}
      </p>

      {/* Panah muncul saat hover */}
      <div className="relative mt-6 flex items-center gap-1 text-[#FFC107] opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="text-xs font-bold uppercase tracking-widest">Explore</span>
        <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax glow background
  const glowY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full overflow-hidden bg-background py-24 lg:py-[140px]"
    >
      {/* Ambient glow dengan parallax */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#FFC107]/10 blur-[160px]"
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] w-8 origin-left bg-[#FFC107]"
            />
            <span className="text-sm font-bold uppercase tracking-widest text-[#FFC107]">
              Industries
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg font-semibold text-text/90 md:text-xl">
            Enterprise IT Solutions Tailored to Industry-Specific Challenges
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            We work across industries to deliver technology solutions that
            address operational complexity, regulatory requirements, and
            scalability needs.
          </p>
        </motion.div>

        {/* Grid industri dengan stagger + spotlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((item, i) => (
            <IndustryCard key={item.title} {...item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;