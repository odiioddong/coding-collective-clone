import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Mic,
  Briefcase,
  CalendarDays,
  Users,
  Fingerprint,
  Presentation,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Foto background komunitas (bisa diganti import lokal: import communityImage from "../assets/hero.png")
const COMMUNITY_IMAGE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=70";

type Activity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Konten sesuai web asli codingcollective.com/community
const ACTIVITIES: Activity[] = [
  {
    icon: GraduationCap,
    title: "Talent Development",
    description: "Structured programs to develop technical and professional competencies.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    description: "Curated resources for continuous learning and knowledge sharing.",
  },
  {
    icon: Mic,
    title: "Career Talk",
    description: "Industry-led discussions on career paths and workforce readiness.",
  },
  {
    icon: Briefcase,
    title: "Internship Program",
    description: "Practical internship opportunities with real-world project exposure.",
  },
  {
    icon: CalendarDays,
    title: "Events Calendar",
    description: "Centralized information on upcoming community and educational events.",
  },
  {
    icon: Users,
    title: "Learning & Development",
    description: "Collaborative environment for ongoing skill development and mentorship.",
  },
  {
    icon: Fingerprint,
    title: "Personal Branding Workshops",
    description: "Workshops focused on building professional identity in the digital industry.",
  },
  {
    icon: Presentation,
    title: "Show Case Event",
    description: "Public presentations of projects, innovations, and community.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, mass: 0.8 },
  },
} as const;

/* Card dengan spotlight mengikuti kursor */
const ActivityCard = ({ icon: Icon, title, description, index }: Activity & { index: number }) => {
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
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#FFC107]/60 hover:shadow-[0_20px_60px_rgba(255,193,7,0.12)]"
    >
      {/* Spotlight mengikuti kursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), rgba(255,193,7,0.14), transparent 65%)",
        }}
      />

      {/* Garis glow atas */}
      <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      {/* Nomor watermark */}
      <span className="absolute right-4 top-4 text-4xl font-black text-white/5 transition-colors duration-500 group-hover:text-[#FFC107]/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 text-[#FFC107] transition-all duration-500 group-hover:scale-110 group-hover:from-[#FFC107] group-hover:to-[#FFB300] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(255,193,7,0.5)]">
        <Icon size={24} strokeWidth={2.2} />
      </div>

      <h3 className="relative mt-5 text-base font-bold text-white transition-colors duration-500 group-hover:text-[#FFC107] sm:text-lg">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

const Community = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: background foto bergerak pelan saat scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="community"
      className="relative w-full overflow-hidden bg-background py-24 lg:py-[140px]"
    >
<div className="absolute inset-0 overflow-hidden">
  <motion.img
    src={COMMUNITY_IMAGE}
    alt=""
    aria-hidden="true"
    style={{ y: bgY }}
    className="h-[125%] w-full object-cover opacity-50 animate-[heroZoom_30s_ease-in-out_infinite_alternate]"
  />
  {/* Overlay ditipiskan: tengah cuma 40% biar foto tembus */}
  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
</div>

      {/* Ambient glow parallax */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#FFC107]/10 blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
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
              Community
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            Powered by a Growing Tech Ecosystem
          </h2>
          <p className="mt-4 text-xl font-extrabold text-primary md:text-2xl">
            We Connect, Collaborate, and Grow
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Behind every solution we deliver is a growing network of tech talent
            powered by <span className="font-semibold text-text">Jogja Coding House</span>.
            We continuously nurture and develop this ecosystem, giving you access
            to skilled and up-to-date professionals. Not just talent for today,
            but a foundation for long-term scalability.
          </p>

          {/* CTA */}
          <motion.a
            href="https://wa.me/6596683807"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-background shadow-[0_0_30px_rgba(255,193,7,0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(255,193,7,0.5)]"
          >
            Join Our Community
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Sub-heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-2xl font-extrabold text-text sm:text-3xl"
        >
          What We Do in the Community
        </motion.h3>

        {/* Grid 8 card dengan stagger + spotlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ACTIVITIES.map((item, i) => (
            <ActivityCard key={item.title} {...item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Community;