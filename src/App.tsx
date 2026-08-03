import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Works from "./components/Works";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Preloader tampil ±2.3 detik, lalu "tirai" naik
  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 2300);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="bg-background text-text">
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <Navbar />
      <Hero />
      <About />
      <Partners title="Our Partner" />
      <Works />
      <Services />
      <Industries />
      <Community />
      <Partners title="Our Partner & Clients." />
      <FAQ />
      <Footer />
    </main>
  );
}