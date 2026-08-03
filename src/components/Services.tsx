import {
  Rocket,
  Cloud,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Server,
  type LucideIcon,
} from "lucide-react";

// Data layanan disimpan sebagai konstanta di luar komponen supaya mudah
// ditambah/diubah tanpa menyentuh struktur JSX, dan tidak dibuat ulang
// setiap re-render.
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

const Services = () => {
  return (
    // id="services" -> target smooth scroll dari menu Navbar.
    <section
      id="services"
      className="relative w-full overflow-hidden bg-background"
    >
      {/* Ambient glow dekoratif, konsisten dengan efek di Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[160px]"
      />

      {/* Spacing section 120px di desktop, konsisten dengan Hero */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-[120px]">
        {/* Heading section */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Solutions
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
            All-In-One Tech Solution
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Kami membantu bisnis meningkatkan efisiensi dan produktivitas
            melalui solusi teknologi yang lengkap, mulai dari transformasi
            digital hingga keamanan sistem.
          </p>
        </div>

        {/* Grid layanan: 1 kolom di mobile, 2 di tablet, 3 di desktop */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-text/10 bg-text/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-text/10"
            >
              {/* Icon dalam lingkaran, warna berubah saat hover card */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                <Icon size={24} strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-text">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;