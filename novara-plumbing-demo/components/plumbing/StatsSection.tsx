import { stats } from "./content";

export function StatsSection() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="stats-inner">
        {stats.map((stat) => (
          <div className="stat reveal-on-scroll" key={stat.label}>
            <div className="stat-num">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
