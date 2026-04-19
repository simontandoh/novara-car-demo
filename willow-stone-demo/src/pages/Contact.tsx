import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const Contact = () => (
  <Layout>
    <PageSEO
      title="Contact Us | Willow & Stone Wellness"
      description="Get in touch with Willow & Stone Wellness. Book your appointment or send an enquiry. Located in Liverpool, Wirral, Chester & Warrington."
    />

    <section className="bg-secondary py-24">
      <div className="container text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Get in Touch</p>
        <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          We'd love to hear from you. Whether you'd like to book or simply have a question, we're here to help.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium">Send an Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form below and we'll get back to you within 24 hours.
            </p>
            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="07000 000000" />
              </div>
              <div className="space-y-2">
                <Label>Treatment Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="massage">Massage Therapy</SelectItem>
                    <SelectItem value="facial">Facial Treatments</SelectItem>
                    <SelectItem value="body">Body Treatments</SelectItem>
                    <SelectItem value="holistic">Holistic Therapies</SelectItem>
                    <SelectItem value="package">Wellness Packages</SelectItem>
                    <SelectItem value="experience">Spa Experiences</SelectItem>
                    <SelectItem value="general">General Enquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your needs..." rows={4} />
              </div>
              <Button type="submit" className="w-full">Send Enquiry</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-medium">Get in Touch</h2>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>hello@willowandstone.co.uk</p>
                <p>0151 000 0000</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium">Our Locations</h3>
              <div className="mt-4 space-y-3">
                {["Liverpool", "Wirral", "Chester", "Warrington"].map((loc) => (
                  <div key={loc} className="rounded-lg bg-card p-4">
                    <p className="text-sm font-medium">{loc}</p>
                    <p className="text-xs text-muted-foreground">Appointments available</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h3 className="font-display text-lg font-medium">Response Times</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We aim to respond to all enquiries within 24 hours. For urgent bookings, 
                please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;