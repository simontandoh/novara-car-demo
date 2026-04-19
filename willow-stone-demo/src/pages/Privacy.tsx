import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const Privacy = () => (
  <Layout>
    <PageSEO title="Privacy Policy | Willow & Stone Wellness" description="Privacy policy for Willow & Stone Wellness." />
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-8">
          <h1 className="font-display text-4xl font-medium">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>At Willow & Stone Wellness, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Information We Collect</h2>
            <p>We collect information you provide when booking appointments, submitting enquiries, or signing up for communications. This may include your name, email address, phone number, and treatment preferences.</p>
            <h2 className="font-display text-xl font-medium text-foreground">How We Use Your Information</h2>
            <p>Your information is used to manage bookings, respond to enquiries, improve our services, and send relevant communications with your consent.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal data. We do not sell or share your information with third parties for marketing purposes.</p>
            <h2 className="font-display text-xl font-medium text-foreground">Contact</h2>
            <p>For questions about this policy, contact us at hello@willowandstone.co.uk.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;