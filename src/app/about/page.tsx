import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our mission, values, and track record.",
};

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="rounded-lg border border-muted-2 bg-white p-8 shadow">
        <h1 className="text-2xl font-semibold text-foreground">About Reliance Realty</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/80">
          We are a boutique firm providing corporate-grade real estate services with a human
          touch. Our team combines deep market expertise with disciplined execution to deliver
          outcomes that stand the test of time.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-muted-2 bg-muted p-4">
            <div className="text-base font-semibold text-primary">Integrity</div>
            <p className="mt-1 text-sm text-foreground/80">
              Transparent process, clear communication, and consistent accountability.
            </p>
          </div>
          <div className="rounded-lg border border-muted-2 bg-muted p-4">
            <div className="text-base font-semibold text-primary">Discipline</div>
            <p className="mt-1 text-sm text-foreground/80">
              Data-driven decisions and premium marketing to maximize value.
            </p>
          </div>
          <div className="rounded-lg border border-muted-2 bg-muted p-4">
            <div className="text-base font-semibold text-primary">Service</div>
            <p className="mt-1 text-sm text-foreground/80">
              Senior advisors guiding you from first conversation to close.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
