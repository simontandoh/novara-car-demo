import { servicesStrip } from "./content";

export function ServicesStrip() {
  return (
    <div className="services-strip" aria-label="Service highlights">
      <div className="services-strip-inner">
        {servicesStrip.map((item) => (
          <div className="strip-item" key={item.label}>
            <span className="strip-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="strip-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
