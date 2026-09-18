import { useState } from 'react';
import { IconWorld, IconMenu, IconClose } from './icons';

const UTILITY_LINKS = ['3-1-1', 'Animal Services', 'Campaign Disclosures', 'Homelessness Info', 'Muni-Code', 'Transparency'];
const MAIN_NAV = ['Residents', 'Business', 'Government', 'Visitors', 'Connect'];

export function UtilityBar() {
  return (
    <div className="hidden lg:block bg-[var(--surface-primary)] text-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
        <nav className="flex gap-6 body-caption">
          {UTILITY_LINKS.map((link) => (
            <a key={link} href="#" className="hover:text-[var(--surface-warm)] transition-colors">
              {link}
            </a>
          ))}
        </nav>
        <button className="flex items-center gap-2 body-caption">
          <IconWorld className="size-5" />
          Translate
        </button>
      </div>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="flex flex-col leading-none shrink-0">
      <span className={`logo-script text-4xl sm:text-5xl ${light ? 'text-white' : 'text-[var(--text-primary)]'}`}>
        San Clemente
      </span>
      <span className={`body-overline -mt-1 ${light ? 'text-white/90' : 'text-[var(--text-muted)]'}`}>
        The Spanish Village by the Sea
      </span>
    </a>
  );
}

/** Sits directly on top of the hero photo — intentionally transparent, no background of its own. */
export function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-30">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-6">
        <Logo light />

        <nav className="hidden lg:flex items-center gap-10 heading-h6 text-white">
          {MAIN_NAV.map((link) => (
            <a key={link} href="#" className="hover:text-[var(--surface-warm)] transition-colors">
              {link}
            </a>
          ))}
          <button className="hover:text-[var(--surface-warm)] transition-colors" aria-label="Search">
            Search
          </button>
        </nav>

        <button
          className="lg:hidden flex items-center justify-center size-10 text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu className="size-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--surface-dark)] text-white lg:hidden">
          <div className="flex justify-end p-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <IconClose className="size-7" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 py-8 heading-h4">
            {MAIN_NAV.map((link) => (
              <a key={link} href="#" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
            <button onClick={() => setMenuOpen(false)}>Search</button>
          </nav>
          <nav className="flex flex-col items-center gap-6 py-8 body-body border-t border-white/10 mx-8">
            {UTILITY_LINKS.map((link) => (
              <a key={link} href="#" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
