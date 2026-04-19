import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const Terms = () => (
  <Layout>
    <PageSEO title="Terms & Conditions | Willow & Stone Wellness" description="Terms and conditions for Willow & Stone Wellness services." />
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-8">
          <h1 className="font-display text-4xl font-medium">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-display text-xl font-medium text-foreground">Bookings</h2>
            <p>All appointments are subject to availability. We recommend booking in advance. Confirmation will be sent via email within 24 hours.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Cancellations</h2>
            <p>We require at least 24 hours' notice for cancellations. Late cancellations or no-shows may incur a charge of up to 50% of the treatment value.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Gift Vouchers</h2>
            <p>Gift vouchers are valid for 12 months from the date of purchase and are non-refundable. They may be used for any treatment or package.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Health & Safety</h2>
            <p>Please inform your therapist of any medical conditions, allergies, or concerns before your treatment. We reserve the right to modify or decline a treatment if we believe it may not be suitable.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Contact</h2>
            <p>For questions about these terms, contact us at hello@willowandstone.co.uk.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;