import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";

export function Contact() {
  const { contact } = siteConfig;
  return (
    <Section id={contact.id} variant="muted">
      <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {contact.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {contact.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{contact.body}</p>
      <p className="mt-8 text-sm text-muted">{contact.responseTime}</p>
      <p className="mt-2 text-lg font-medium">
        <Link className="text-accent underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
          {contact.email}
        </Link>
      </p>
    </Section>
  );
}
