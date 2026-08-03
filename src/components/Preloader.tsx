import { motion } from "framer-motion";
import logo from "../assets/Logo.png";

const Preloader = () => (
  <motion.div
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    exit={{ y: "-100%" }}
    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
  >
    {/* Logo muncul membesar */}
    <motion.img
      src={logo}
      alt="Coding Collective"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-16 w-auto md:h-20"
    />

    {/* Garis loading kuning */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 160 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
      className="mt-6 h-[3px] rounded-full bg-primary"
    />

    {/* Tagline fade-in */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-4 text-xs uppercase tracking-[0.3em] text-muted"
    >
      360° Custom Digitalization
    </motion.p>
  </motion.div>
);

export default Preloader;