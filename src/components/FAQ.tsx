import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "What does Coding Collective do?", a: "Coding Collective is a 360° digital solutions partner that helps organizations design, build, and optimize digital systems—from software development to technology operations." },
  { q: "Who do we work with?", a: "We work with startups, SMEs, enterprises, and government institutions seeking reliable digital solutions and long-term technology partners." },
  { q: "What services does Coding Collective provide?", a: "Our main service is end-to-end digital solutions, including custom software development, system integration, and digital platforms. IT recruitment and tech talent outsourcing are provided as a secondary service to support our clients' digital growth." },
  { q: "How does the collaboration process work?", a: "We start by understanding your business objectives, then propose the most suitable digital solution or team setup. Coding Collective supports the process with structured communication, execution, and quality control." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <h2 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">FAQ.</h2>
        <p className="mt-4 text-base text-muted md:text-lg">
          Curious about how we work? You'll find all the answers you need right here.
        </p>
        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-text hover:text-primary"
              >
                {f.q}
                <ChevronDown className={`shrink-0 transition-transform ${open === i ? "rotate-180 text-primary" : ""}`} />
              </button>
              {open === i && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted md:text-base">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;