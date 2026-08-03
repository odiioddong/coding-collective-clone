const PROJECTS = [
  {
    title: "Payment Automation Platform",
    tag: "Fintech",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Hospital Management System",
    tag: "Healthcare",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "E-Commerce Platform",
    tag: "Retail",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Fleet Monitoring Dashboard",
    tag: "Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Data Analytics Pipeline",
    tag: "Enterprise",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "QA Automation Suite",
    tag: "SaaS",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
  },
];

const Works = () => (
  <section id="works" className="w-full bg-background py-24 lg:py-32">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <h2 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">WORKS.</h2>
      <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
        We've helped businesses across industries achieve their goals. Here are some of our recent projects.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]"
          >
            {/* Gambar project dengan efek zoom saat hover */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {p.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-text transition-colors group-hover:text-primary">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Works;