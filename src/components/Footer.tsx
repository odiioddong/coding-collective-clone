import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import logo from "../assets/Logo.png";

const FOOTER_NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const LEGAL = ["Terms & Support", "Privacy Policy"];

const inputCls =
  "w-full rounded-lg border border-white/10 bg-[#0c0c0c] px-4 py-3 text-sm text-text placeholder:text-muted/50 transition-colors focus:border-primary focus:outline-none";

const Footer = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    setTimeout(()=>{
      setSent(false)
    },2500)
  };

  return (
    <footer id="contact" className="w-full border-t border-white/10 bg-background">
      {/* ========== FORM CONTACT (seperti halaman /contact asli) ========== */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Kiri: heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Contact Us
              </span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Let's build something great together.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Book a free consultation and find out how we can support your
              business growth.
            </p>
          </motion.div>

          {/* Kanan: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input required name="name" placeholder="Your Name" className={inputCls} />
              <input required type="email" name="email" placeholder="Email Address" className={inputCls} />
            </div>
            <input name="company" placeholder="Company (Optional)" className={inputCls} />
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 font-bold text-background transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(255,193,7,0.4)]"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} /> Submit
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      {/* ========== FOOTER KOLOOM (persis seperti screenshot) ========== */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Logo + alamat */}
            <div>
              <img src={logo} alt="Coding Collective" className="h-12 w-auto" />
              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-text">
                    <MapPin size={18} className="text-primary" /> Indonesia
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    Jl. Soga No.46 Tahunan, Kec.Umbulharjo, Kota Yogyakarta,
                    Daerah Istimewa Yogyakarta 55167
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-text">
                    <MapPin size={18} className="text-primary" /> Singapore
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    Level 08-09, The Metropolis Tower 2 11 North Buona Vista
                    Drive, Singapore 138589
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-bold text-text">Navigation</h3>
              <ul className="mt-6 space-y-4 text-sm">
                {FOOTER_NAV.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold text-text">Social</h3>
              <ul className="mt-6 space-y-4 text-sm">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted transition-colors duration-300 hover:text-primary"
                    >
                      {s.label} <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <ul className="space-y-4 text-sm">
                {LEGAL.map((item) => (
                  <li key={item}>
                    <a
                      href="#contact"
                      className="text-muted transition-colors duration-300 hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Coding Collective
      </div>
    </footer>
  );
};

export default Footer;