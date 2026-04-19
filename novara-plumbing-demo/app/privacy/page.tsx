import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-shell">
          <p className="section-label">Privacy</p>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-intro">
            This page explains how Ironside Plumbing Ltd handles personal data
            submitted through the website contact form and direct enquiries.
          </p>
          <Link href="/" className="privacy-back">
            Back to homepage
          </Link>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-shell privacy-grid">
          <article className="privacy-card">
            <h2>Company details</h2>
            <p>Ironside Plumbing Ltd</p>
            <p>
              Email:{" "}
              <a href="mailto:hello@ironsideplumbing.co.uk">
                hello@ironsideplumbing.co.uk
              </a>
            </p>
          </article>

          <article className="privacy-card">
            <h2>What we collect</h2>
            <p>
              When you submit the enquiry form, we collect the details you
              provide:
            </p>
            <ul>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Service requested</li>
              <li>Postcode</li>
              <li>Message content and job details</li>
            </ul>
          </article>

          <article className="privacy-card">
            <h2>How we use it</h2>
            <p>Your information is used only to respond to your enquiry and manage requested work, including:</p>
            <ul>
              <li>Contacting you about your quote or job</li>
              <li>Understanding the service you need</li>
              <li>Scheduling visits and follow-up communication</li>
              <li>Keeping a record of customer enquiries</li>
            </ul>
          </article>

          <article className="privacy-card">
            <h2>Your rights</h2>
            <p>
              You can contact us at{" "}
              <a href="mailto:hello@ironsideplumbing.co.uk">
                hello@ironsideplumbing.co.uk
              </a>{" "}
              to request access to, correction of, or deletion of the personal
              information you have shared with us.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
