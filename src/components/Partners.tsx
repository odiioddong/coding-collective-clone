const PARTNERS = ["AlphaPay", "MediCare+", "ShopSphere", "LogiTrack", "EduNet", "FinCore", "CloudNine", "GovTech"];

const Partners = ({ title }: { title: string }) => (
  <section className="w-full overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-16">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{title}</h2>
    </div>
    <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-16 px-8 animate-[marquee_25s_linear_infinite]">
        {[...PARTNERS, ...PARTNERS].map((name, i) => (
          <span key={i} className="whitespace-nowrap text-xl font-bold text-white/40 transition-colors hover:text-primary">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;