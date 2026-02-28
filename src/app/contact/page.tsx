import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our advisory team.",
};

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-muted-2 bg-white p-8 shadow">
          <h1 className="text-2xl font-semibold text-foreground">Contact us</h1>
          <p className="mt-1 text-sm text-foreground/70">
            Tell us about your goals and a senior advisor will reach out.
          </p>
          <ContactForm />
        </div>
        <div className="rounded-lg border border-muted-2 bg-white p-8 shadow">
          <div className="text-base font-semibold text-foreground">Headquarters</div>
          <p className="mt-1 text-sm text-foreground/70">123 Market Street, Suite 500, San Francisco, CA</p>
          <div className="mt-4 text-sm text-foreground/70">(415) 555-0199</div>
          <div className="text-sm text-foreground/70">info@reliancerealty.com</div>
          <div className="mt-6 h-[260px] overflow-hidden rounded border border-muted-2">
            <iframe
              title="HQ map"
              src="https://www.google.com/maps?q=123%20Market%20Street,%20San%20Francisco&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
