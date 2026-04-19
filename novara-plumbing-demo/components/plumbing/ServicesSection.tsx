import Image from "next/image";

import { services } from "./content";

export function ServicesSection() {
  return (
    <section id="services">
      <div className="section-header">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">
          Every Job.
          <br />
          Done Right.
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card reveal-on-scroll" key={service.name}>
            <div className="service-card-media">
              <Image
                className="service-card-img"
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <div className="service-card-body">
              <div className="service-num">{service.number}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
