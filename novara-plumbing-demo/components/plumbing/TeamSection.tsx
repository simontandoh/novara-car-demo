import Image from "next/image";

import { team } from "./content";

export function TeamSection() {
  return (
    <section id="team">
      <div className="team-inner">
        <p className="section-label">The Team</p>
        <h2 className="section-title">
          People You
          <br />
          Can Trust.
        </h2>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card reveal-on-scroll" key={member.name}>
              <div className="team-photo-wrap">
                <Image
                  className="team-photo"
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="team-overlay">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
