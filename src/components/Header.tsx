import { useState } from 'react';
import { IconWorld, IconMenu, IconClose } from './icons';

const UTILITY_LINKS = ['3-1-1', 'Animal Services', 'Campaign Disclosures', 'Homelessness Info', 'Muni-Code', 'Transparency'];
const MAIN_NAV = ['Residents', 'Business', 'Government', 'Visitors', 'Connect'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30">
      {/* Utility bar */}
      <div className="hidden lg:flex items-center justify-between px-9 py-3 bg-[var(--surface-primary)] text-white">
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

      {/* Main header */}
      <div className="flex items-center justify-between px-6 lg:px-9 py-4 bg-[var(--surface-white)]">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <span
            className="flex items-center justify-center rounded-full size-12 lg:size-14 text-white heading-h6"
            style={{ background: 'var(--surface-primary)' }}
          >
            COSC
          </span>
          <span className="heading-h6 text-[var(--text-primary)] leading-tight hidden sm:block">
            City of
            <br />
            San Clemente
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 heading-h6 text-[var(--text-primary)]">
          {MAIN_NAV.map((link) => (
            <a key={link} href="#" className="hover:text-[var(--interactive-default)] transition-colors">
              {link}
            </a>
          ))}
          <button className="hover:text-[var(--interactive-default)] transition-colors" aria-label="Search">
            Search
          </button>
        </nav>

        <button
          className="lg:hidden flex items-center justify-center size-10 text-[var(--text-primary)]"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu className="size-6" />
        </button>
      </div>

      {/* Mobile menu overlay */}
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
    </header>
  );
}
