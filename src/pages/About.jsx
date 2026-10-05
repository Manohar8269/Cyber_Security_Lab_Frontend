import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Lock,
  Code2,
  Database,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./About.css";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "LLM Security",
    text: "Hands-on environments for understanding prompt injection, information disclosure, unsafe outputs, and AI application risks.",
  },
  {
    icon: Target,
    title: "Red Teaming",
    text: "Controlled security scenarios designed to help identify weak trust boundaries, authorization flaws, and attack surfaces.",
  },
  {
    icon: Lock,
    title: "Application Security",
    text: "Explore security weaknesses across authentication, authorization, data isolation, APIs, and AI-powered workflows.",
  },
  {
    icon: Code2,
    title: "Developer Focused",
    text: "Practical labs designed to help developers understand vulnerabilities from both implementation and attacker perspectives.",
  },
];

const technologies = [
  "React",
  "Vite",
  "FastAPI",
  "Python",
  "RAG",
  "ChromaDB",
  "SQLite",
  "LLM",
];

const principles = [
  "Learn vulnerabilities through practical scenarios",
  "Keep security testing inside controlled environments",
  "Understand the root cause, not only the exploit",
  "Connect offensive testing with defensive mitigation",
];

export default function About() {
  const goToLabs = () => {
    window.location.href = "/#labs";
  };

  return (
    <main className="about-page"id="about">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="about-hero">

        <div className="about-hero-glow about-glow-one" />
        <div className="about-hero-glow about-glow-two" />

        <div className="about-container">

          <motion.div
            className="about-kicker"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <ShieldCheck size={15} />

            ABOUT BYTESECRYPT

            <span />
            
            AI SECURITY LABS
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
          >
            Building safer AI
            <span>
              {" "}through hands-on security.
            </span>
          </motion.h1>


          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.14,
            }}
          >
            BytesEncrypt is a security-focused learning
            platform built around practical AI security,
            vulnerability research, and red-team training.
            Our goal is to make complex AI security concepts
            easier to understand through interactive labs.
          </motion.p>


          <motion.div
            className="about-hero-actions"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >

            <motion.button
              type="button"
              className="about-primary-button"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={goToLabs}
            >
              Explore Security Labs

              <ArrowRight size={17} />
            </motion.button>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          STORY
      ================================================= */}

      <section className="about-story">

        <div className="about-container">

          <div className="about-two-column">

            <motion.div
              className="about-story-content"
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
              }}
            >

              <span className="about-section-label">
                OUR MISSION
              </span>

              <h2>
                Security learning should be
                <span> practical.</span>
              </h2>

              <p>
                Modern applications increasingly depend on
                AI models, retrieval systems, agents, APIs,
                and automated decision-making. These systems
                introduce new security boundaries that are
                not always easy to understand from theory alone.
              </p>

              <p>
                BytesEncrypt focuses on turning those concepts
                into practical, reproducible scenarios where
                learners can inspect the application,
                understand its architecture, identify
                weaknesses, and learn how to harden it.
              </p>

            </motion.div>


            <motion.div
              className="about-mission-card"
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
              }}
            >

              <div className="mission-card-icon">
                <Brain size={28} />
              </div>

              <span>
                SECURITY-FIRST AI
              </span>

              <h3>
                Practice the attack.
                Understand the defense.
              </h3>

              <p>
                Every lab is designed to connect an
                offensive security scenario with the
                engineering decisions that prevent it.
              </p>

              <div className="mission-line">
                <span />
                Attack
                <span />
                Analyze
                <span />
                Harden
              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =================================================
          CAPABILITIES
      ================================================= */}

      <section className="about-capabilities">

        <div className="about-container">

          <div className="about-heading">

            <span className="about-section-label">
              WHAT WE BUILD
            </span>

            <h2>
              Security concepts turned into
              <span> interactive labs.</span>
            </h2>

            <p>
              Our platform combines AI application security,
              web security concepts, and red-team workflows
              into practical training environments.
            </p>

          </div>


          <div className="capabilities-grid">

            {capabilities.map(
              (
                capability,
                index
              ) => {
                const Icon =
                  capability.icon;

                return (
                  <motion.article
                    key={
                      capability.title
                    }
                    className="capability-card"
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay:
                        index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                  >

                    <div className="capability-icon">
                      <Icon size={22} />
                    </div>

                    <h3>
                      {capability.title}
                    </h3>

                    <p>
                      {capability.text}
                    </p>

                  </motion.article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =================================================
          TECHNOLOGY
      ================================================= */}

      <section className="about-technology">

        <div className="about-container">

          <div className="technology-panel">

            <div className="technology-copy">

              <span className="about-section-label">
                TECHNOLOGY
              </span>

              <h2>
                Built for modern
                <span> AI security workflows.</span>
              </h2>

              <p>
                The platform combines a modern React
                interface with API-driven lab infrastructure,
                data stores, retrieval systems, and AI model
                integrations.
              </p>

            </div>


            <div className="technology-stack">

              {technologies.map(
                (technology) => (
                  <motion.div
                    key={technology}
                    className="technology-tag"
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                  >
                    {technology}
                  </motion.div>
                )
              )}

            </div>


            <div className="technology-flow">

              <div>
                <Code2 size={18} />
                React + Vite
              </div>

              <span>→</span>

              <div>
                <Database size={18} />
                API + Data
              </div>

              <span>→</span>

              <div>
                <Brain size={18} />
                AI / LLM
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PRINCIPLES
      ================================================= */}

      <section className="about-principles">

        <div className="about-container">

          <div className="about-two-column">

            <div className="principles-title">

              <span className="about-section-label">
                OUR APPROACH
              </span>

              <h2>
                Learn.
                <span> Test.</span>
                Harden.
              </h2>

            </div>


            <div className="principles-list">

              {principles.map(
                (
                  principle,
                  index
                ) => (
                  <motion.div
                    key={principle}
                    className="principle-item"
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        index * 0.07,
                    }}
                  >

                    <CheckCircle2
                      size={19}
                    />

                    <span>
                      {principle}
                    </span>

                  </motion.div>
                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="about-cta">

        <div className="about-container">

          <motion.div
            className="about-cta-box"
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
          >

            <div>

              <span className="about-section-label">
                START EXPLORING
              </span>

              <h2>
                Ready to test an AI
                <span> attack surface?</span>
              </h2>

              <p>
                Explore the labs and start learning how
                modern AI applications can be attacked,
                analyzed, and secured.
              </p>

            </div>


            <motion.button
              type="button"
              className="about-primary-button"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={goToLabs}
            >
              View Labs
              <ArrowRight size={17} />
            </motion.button>

          </motion.div>

        </div>

      </section>

    </main>
  );
}