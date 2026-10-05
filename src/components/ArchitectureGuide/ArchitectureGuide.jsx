import { useState } from "react";
import {
  ChevronDown,
  Info,
  Server,
  Database,
  Brain,
} from "lucide-react";

import "./ArchitectureGuide.css";

export default function ArchitectureGuide() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="architecture-guide">

      {/* =================================================
          HEADER
      ================================================= */}

      <button
        type="button"
        className="architecture-guide-header"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="architecture-guide-title">

          <ChevronDown
            size={19}
            className={`architecture-arrow ${
              isOpen ? "open" : ""
            }`}
          />

          <Info
            size={19}
            className="architecture-info-icon"
          />

          <span>
            Architecture &amp; Lab Guide
          </span>

        </div>
      </button>


      {/* =================================================
          CONTENT
      ================================================= */}

      {isOpen && (
        <div className="architecture-guide-content">

          <h2>
            Unified Suite Architecture
          </h2>


          <div className="architecture-points">

            {/* =================================================
                BACKEND
            ================================================= */}

            <div className="architecture-point">

              <div className="architecture-bullet">
                •
              </div>

              <div className="architecture-point-content">

                <p>
                  <strong>
                    Single Backend Engine:
                  </strong>{" "}

                  Powered by{" "}
                  <span className="tech-name">
                    FastAPI
                  </span>{" "}

                  on port{" "}

                  <code>
                    8000
                  </code>
                  . Handles ChromaDB vector indexing,
                  SQLite financial datasets
                  {" "}

                  <code>
                    adviser.db
                  </code>

                  {" "}and e-commerce catalogue{" "}

                  <code>
                    shopbot.db
                  </code>
                  .
                </p>

              </div>

            </div>


            {/* =================================================
                FRONTEND
            ================================================= */}

            <div className="architecture-point">

              <div className="architecture-bullet">
                •
              </div>

              <div className="architecture-point-content">

                <p>
                  <strong>
                    Single Frontend:
                  </strong>{" "}

                  Hosted on port{" "}

                  <code>
                    8501
                  </code>
                  . State-isolated navigation
                  allows seamless switching between
                  different target applications.
                </p>

              </div>

            </div>


            {/* =================================================
                LLM
            ================================================= */}

            <div className="architecture-point">

              <div className="architecture-bullet">
                •
              </div>

              <div className="architecture-point-content">

                <p>
                  <strong>
                    Local LLM Backend:
                  </strong>{" "}

                  Connected to a local/ngrok
                  OpenAI-compatible LLM endpoint
                  with conversation memory.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              ARCHITECTURE CARDS
          ================================================= */}

          <div className="architecture-mini-grid">

            <div className="architecture-mini-card">

              <Server size={20} />

              <div>
                <strong>
                  FastAPI Backend
                </strong>

                <span>
                  Port 8000
                </span>
              </div>

            </div>


            <div className="architecture-mini-card">

              <Database size={20} />

              <div>
                <strong>
                  Data Layer
                </strong>

                <span>
                  ChromaDB + SQLite
                </span>
              </div>

            </div>


            <div className="architecture-mini-card">

              <Brain size={20} />

              <div>
                <strong>
                  Local LLM
                </strong>

                <span>
                  OpenAI-compatible endpoint
                </span>
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}