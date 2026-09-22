import { useState } from 'react';
import { IconWorld, IconMenu, IconClose } from './icons';
import logoSanClemente from '../assets/images/logo-san-clemente.png';

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

function Logo() {
  return (
    <a href="#" className="shrink-0">
      <img
        src={logoSanClemente}
        alt="City of San Clemente — The Spanish Village by the Sea"
        className="h-14 sm:h-16 lg:h-20 w-auto"
      />
    </a>
  );
}

/** Sits directly on top of the hero photo — intentionally transparent, no background of its own. */
export function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-30">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-6">
        <Logo />

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
        <div className="fixed inset-0 z-40 bg-[var(--surface-dark)] text-white lg:hidden overflow-y-auto flex flex-col">
          <div className="flex justify-end p-6 shrink-0">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <IconClose className="size-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <nav className="flex flex-col items-center gap-5 py-4 heading-h5">
              {UTILITY_LINKS.map((link) => (
                <a key={link} href="#" onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col items-center gap-5 py-4 heading-h5 border-t border-white/10 mx-8">
              {MAIN_NAV.map((link) => (
                <a key={link} href="#" onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              ))}
              <button onClick={() => setMenuOpen(false)}>Search</button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
