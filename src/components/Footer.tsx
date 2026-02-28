import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-muted-2 bg-charcoal text-offwhite">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-charcoal">
                <span className="text-sm font-semibold">RR</span>
              </div>
              <span className="text-base font-semibold">Reliance Realty</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-offwhite/80">
              Premium real estate advisory focused on outcomes and client experience.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-offwhite/90">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="text-offwhite/70 hover:text-primary">About</Link></li>
              <li><Link href="/agents" className="text-offwhite/70 hover:text-primary">Agents</Link></li>
              <li><Link href="/listings" className="text-offwhite/70 hover:text-primary">Listings</Link></li>
              <li><Link href="/contact" className="text-offwhite/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-offwhite/90">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-offwhite/70">
              <li>123 Market Street, San Francisco, CA</li>
              <li>(415) 555-0199</li>
              <li>info@reliancerealty.com</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-offwhite/90">Follow</div>
            <div className="mt-3 flex gap-3">
              <a aria-label="X" href="#" className="flex h-9 w-9 items-center justify-center rounded bg-offwhite/10 hover:bg-offwhite/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-offwhite"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
              <a aria-label="Instagram" href="#" className="flex h-9 w-9 items-center justify-center rounded bg-offwhite/10 hover:bg-offwhite/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-offwhite"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
              <a aria-label="LinkedIn" href="#" className="flex h-9 w-9 items-center justify-center rounded bg-offwhite/10 hover:bg-offwhite/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-offwhite"><path d="M6 9v9M6 6h.01M10 18v-5a3 3 0 016 0v5" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-offwhite/10 pt-6 text-xs text-offwhite/60">
          © {new Date().getFullYear()} Reliance Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
