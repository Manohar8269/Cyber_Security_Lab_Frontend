import { motion } from "framer-motion";
import { ArrowUpRight, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./LabCard.css";

export default function LabCard({ lab, index = 0 }) {
  const navigate = useNavigate();

  const handleLaunch = () => {
    navigate(lab.path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.article
      className={`lab-card lab-card-${lab.id}`}
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
      }}
    >
      {/* Animated border glow */}
      <div className="lab-card-glow" />

      {/* Inner card */}
      <div className="lab-card-inner">

        {/* Top */}
        <div className="lab-card-top">

          <div className="lab-card-icon">
            {lab.icon}
          </div>

          <span className="lab-card-status">
            ● READY
          </span>

        </div>


        {/* Category */}
        <span className="lab-card-category">
          {lab.category}
        </span>


        {/* Title */}
        <h3 className="lab-card-title">
          {lab.title}
        </h3>


        {/* Vulnerability */}
        <div className="lab-card-vulnerability">
          <span>
            VULNERABILITY
          </span>

          <strong>
            {lab.vulnerability}
          </strong>
        </div>


        {/* Description */}
        <p className="lab-card-description">
          {lab.description}
        </p>


        {/* Meta */}
        <div className="lab-card-meta">

          <span>
            SEVERITY:
            <strong>{lab.severity}</strong>
          </span>

          <span>
            LEVEL:
            <strong>{lab.level}</strong>
          </span>

        </div>


        {/* Stack */}
        <div className="lab-card-stack">
          {lab.stack?.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}
        </div>


        {/* Button */}
        <button
          type="button"
          className="lab-launch-button"
          onClick={handleLaunch}
        >
          <span className="lab-launch-left">
            <Rocket size={17} />
            {lab.buttonText}
          </span>

          <ArrowUpRight size={18} />
        </button>

      </div>

      {/* Shine */}
      <div className="lab-card-shine" />
    </motion.article>
  );
}