import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Rocket,
  Cloud,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Server,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

// Foto kota gelap (dig grayscale biar mirip wireframe web asli)
const SERVICES_IMAGE =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=70";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Modernisasi proses bisnis dengan solusi digital yang scalable dan siap mendukung pertumbuhan jangka panjang.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Management",
    description:
      "Pengelolaan cloud dan infrastruktur yang andal, efisien, dan aman untuk mendukung operasional bisnis.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Mengubah data mentah menjadi insight yang actionable untuk mendukung pengambilan keputusan bisnis.",
  },
  {
    icon: CreditCard,
    title: "Payment Automation Platform",
    description:
      "Otomatisasi sistem pembayaran yang cepat, aman, dan terintegrasi dengan berbagai channel bisnis.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Security Focused",
    description:
      "Quality assurance dan pendekatan security-first di setiap tahap pengembangan untuk software yang andal.",
  },
  {
    icon: Server,
    title: "Sysadmin as a Service",
    description:
      "Dukungan sysadmin profesional untuk menjaga sistem tetap stabil, aman, dan berjalan optimal 24/7.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax untuk foto intro & glow
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full overflow-hidden bg-[#050505] text-white"
    >
      {/* ============ INTRO HEADER (seperti /services asli) ============ */}
      <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        {/* Background kota gelap + parallax + slow zoom */}
        <motion.img
          src={SERVICES_IMAGE}
          alt=""
          aria-hidden="true"
          style={{ y: bgY }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-50 grayscale brightness-125 animate-[heroZoom_35s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/20 to-[#050505]" />

        {/* Teks intro di tengah */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Integrated Technology and IT Talent Services for Growing and
            Enterprise Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg"
          >
            Coding Collective provides structured technology services and
            flexible IT talent solutions to help organizations build digital
            products, operate stable infrastructure, and scale teams
            efficiently.
          </motion.p>
        </div>

        {/* Scroll indicator bouncing */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FFC107]"
          aria-hidden="true"
        >
          <ChevronDown size={28} />
        </motion.div>
      </div>

      {/* ============ ALL-IN-ONE TECH SOLUTION ============ */}
      <div className="relative">
        {/* Ambient glow parallax (tanpa -z-10 biar kelihatan) */}
        <motion.div
          aria-hidden="true"
          style={{ y: glowY }}
          className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#FFC107]/15 blur-[180px]"
        />
        <motion.div
          aria-hidden="true"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FFC107]/10 blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-[140px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
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
                Solutions
              </span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              All-In-One Tech Solution
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
              Kami membantu bisnis meningkatkan efisiensi dan produktivitas
              melalui solusi teknologi yang lengkap, mulai dari transformasi
              digital hingga keamanan sistem.
            </p>
          </motion.div>

          {/* Grid layanan */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-[#0c0c0c] to-[#0a0a0a] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#FFC107]/60 hover:shadow-[0_20px_60px_rgba(255,193,7,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="absolute right-6 top-6 text-6xl font-black text-white/5 transition-colors duration-500 group-hover:text-[#FFC107]/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-[#FFC107] transition-all duration-500 group-hover:from-[#FFC107] group-hover:to-[#FFB300] group-hover:text-black group-hover:shadow-[0_0_30px_rgba(255,193,7,0.5)]"
                >
                  <Icon size={32} strokeWidth={2.5} />
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#FFC107]/0 transition-all duration-500 group-hover:scale-125 group-hover:border-[#FFC107]/30" />
                </motion.div>

                <h3 className="relative mt-8 text-xl font-bold text-white transition-all duration-500 group-hover:text-[#FFC107]">
                  {title}
                </h3>
                <p className="relative mt-4 text-sm leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
                  {description}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-[#FFC107] opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;