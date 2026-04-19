"use client";

import { FormEvent, useState } from "react";

import { COMPANY_EMAIL_LINK, COMPANY_PHONE, COMPANY_PHONE_LINK } from "./content";

type ContactSectionProps = {
  formSubmitted: boolean;
  setFormSubmitted: (value: boolean) => void;
};

export function ContactSection({
  formSubmitted,
  setFormSubmitted,
}: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();

    data.forEach((value, key) => {
      params.append(key, String(value));
    });

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const action = form.getAttribute("action") || window.location.pathname || "/";
      const response = await fetch(action, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setFormSubmitted(true);
      window.setTimeout(() => {
        document
          .getElementById("enquiry-success")
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    } catch {
      setSubmitError(
        "We couldn't submit the form automatically. Please try again or call us now.",
      );
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-wrap">
        <div>
          <div className="contact-main-head">
            <h2 className="contact-section-title" id="contact-heading">
              Request a Free Quote
            </h2>
            <p className="contact-intro">
              Tell us what you need, we&apos;ll call back to confirm details and
              give you a straight price. No call-out fee. No obligation.
            </p>
          </div>

          <form
            id="enquiry-form"
            className="enquiry-form"
            name="ironside-enquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/api/lead"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="ironside-enquiry" />

            <p className="visually-hidden">
              <label>
                Do not fill this in:
                <input
                  type="text"
                  name="bot-field"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </label>
            </p>

            {!formSubmitted && (
              <div className="enquiry-form-fields" id="enquiry-form-fields">
                <div className="enquiry-field">
                  <label htmlFor="enq-name">Full name</label>
                  <input
                    type="text"
                    id="enq-name"
                    name="full_name"
                    required
                    minLength={2}
                    autoComplete="name"
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enq-phone">Phone number</label>
                  <input
                    type="tel"
                    id="enq-phone"
                    name="phone"
                    required
                    minLength={8}
                    autoComplete="tel"
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enq-email">Email address</label>
                  <input
                    type="email"
                    id="enq-email"
                    name="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enq-service">Service needed</label>
                  <select
                    id="enq-service"
                    name="service"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Emergency plumbing">Emergency plumbing</option>
                    <option value="Boiler & heating">Boiler & heating</option>
                    <option value="Bathroom & kitchen">Bathroom & kitchen</option>
                    <option value="Leak or drainage">Leak or drainage</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enq-postcode">Postcode</label>
                  <input
                    type="text"
                    id="enq-postcode"
                    name="postcode"
                    required
                    autoComplete="postal-code"
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enq-message">Message</label>
                  <textarea
                    id="enq-message"
                    name="message"
                    rows={4}
                    placeholder="Describe the job, urgency, and access"
                  />
                </div>

                <button type="submit" className="btn-send" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </div>
            )}
          </form>

          {submitError ? (
            <p className="form-error" role="alert">
              {submitError}
            </p>
          ) : null}

          {formSubmitted && (
            <div
              className="form-success-enquiry"
              id="enquiry-success"
              role="status"
              aria-live="polite"
            >
              <h3>Enquiry received</h3>
              <p>
                Thanks, we&apos;ll be in touch shortly. Emergency? Call{" "}
                <a href={COMPANY_PHONE_LINK}>{COMPANY_PHONE}</a> now.
              </p>
            </div>
          )}
        </div>

        <aside className="contact-aside" aria-label="Contact details">
          <p className="contact-aside-title">Call us</p>
          <p className="contact-aside-phone">
            <a href={COMPANY_PHONE_LINK}>{COMPANY_PHONE}</a>
          </p>
          <p className="contact-aside-email">
            <a href={COMPANY_EMAIL_LINK}>hello@ironsideplumbing.co.uk</a>
          </p>
          <div className="contact-aside-badge">24/7 emergency cover</div>
          <div className="contact-aside-areas">
            <strong>Areas we cover</strong>
            Liverpool, Wirral, Bootle, Crosby, Huyton, Wavertree, Mossley Hill
          </div>
        </aside>
      </div>
    </section>
  );
}
