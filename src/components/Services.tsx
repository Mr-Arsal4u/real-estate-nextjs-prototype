const SERVICES = [
  {
    title: "Buyer Representation",
    desc: "End-to-end advisory for residential and commercial acquisitions.",
  },
  {
    title: "Listing & Marketing",
    desc: "Premium staging, media, and digital campaigns to maximize value.",
  },
  {
    title: "Leasing & Management",
    desc: "Tenant placement, contracts, and portfolio management services.",
  },
];

export default function Services() {
  return (
    <section className="mt-16 bg-charcoal py-16 text-offwhite">
      <div className="container">
        <h2 className="heading text-2xl font-semibold">Our Services</h2>
        <p className="mt-2 text-offwhite/80">
          Everything you need to buy, sell, or manage property
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-xl border-l-4 border-primary bg-charcoal p-8 shadow-md transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(201,169,110,0.25)]"
            >
              <div className="pointer-events-none absolute -left-0.5 top-0 h-full w-1 rounded-l bg-primary/0 opacity-0 transition group-hover:opacity-100 group-hover:shadow-[0_0_16px_4px_rgba(201,169,110,0.6)]" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-offwhite/5">
                {i === 0 && (
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.5L12 3l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10v9h14v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 19v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {i === 1 && (
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 15l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 19H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                {i === 2 && (
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M4 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6 11v8h12v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-offwhite/80 leading-7">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
