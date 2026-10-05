import LabCard from "./LabCard";
import { labs } from "../data/labs";

export default function LabGrid() {
  return (
    <section className="labs-section" id="labs">
      <div className="labs-heading">
        <div>
          <span className="labs-kicker">ATTACK SURFACE CATALOG</span>
          <h2>Choose a vulnerability lab</h2>
          <p>Controlled environments built for safe security testing and hands-on experimentation.</p>
        </div>
        <span className="labs-count">{String(labs.length).padStart(2, "0")} LABS</span>
      </div>

      <div className="labs-grid">
        {labs.map((lab, index) => (
          <LabCard
            key={lab.id}
            lab={lab}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}