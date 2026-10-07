import { motion } from "framer-motion";
import { Shield, ArrowRight, Terminal } from "lucide-react";

const heroTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <motion.div
        className="hero-icon"
        initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ ...heroTransition, delay: 0.08 }}
      >
        <span className="hero-icon-glow" />
        <Shield size={52} strokeWidth={1.8} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...heroTransition, delay: 0.12 }}
      >
        AI Security &amp; Red-Teaming
        <span> Vulnerability Labs</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...heroTransition, delay: 0.18 }}
      >
        Interactive hands-on environments for exploring LLM vulnerabilities
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...heroTransition, delay: 0.24 }}
      >
        <motion.button
          type="button"
          className="hero-primary-btn"
          whileHover={{ y: -3, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollTo("labs")}
        >
          Explore Labs
          <ArrowRight size={17} />
        </motion.button>
      </motion.div>

      
    </section>
  );
}
