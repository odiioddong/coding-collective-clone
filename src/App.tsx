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
  return (
    <main className="bg-background text-text">
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