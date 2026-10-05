import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="cyber-background" aria-hidden="true">
      {/* Base grid */}
      <div className="cyber-grid"></div>

      {/* Glow lights */}
      <div className="cyber-glow cyber-glow-1"></div>
      <div className="cyber-glow cyber-glow-2"></div>
      <div className="cyber-glow cyber-glow-3"></div>

      {/* Floating particles */}
      <span className="cyber-particle particle-1"></span>
      <span className="cyber-particle particle-2"></span>
      <span className="cyber-particle particle-3"></span>
      <span className="cyber-particle particle-4"></span>
      <span className="cyber-particle particle-5"></span>
      <span className="cyber-particle particle-6"></span>
      <span className="cyber-particle particle-7"></span>
      <span className="cyber-particle particle-8"></span>
      <span className="cyber-particle particle-9"></span>
      <span className="cyber-particle particle-10"></span>

      {/* Moving scan line */}
      <div className="cyber-scan-line"></div>

      {/* Vignette */}
      <div className="cyber-vignette"></div>
    </div>
  );
}