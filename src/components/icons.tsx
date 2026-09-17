type IconProps = { className?: string };

const base = "1.5" as const;

export function IconBill({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M16 16h16M16 24h16M16 32h10" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="34" cy="34" r="8" fill="var(--surface-warm)" stroke="currentColor" strokeWidth={base} />
      <path d="M34 30v8M31.5 32.5h5M31.5 35.5h5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconRecreation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth={base} />
      <path d="M10 40c2-10 8-16 14-16s12 6 14 16" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M16 28l-4 6M32 28l4 6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconCompliance({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 6l14 6v10c0 10-6 17-14 20-8-3-14-10-14-20V12l14-6z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M18 24l4 4 8-9" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPermit({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="5" width="30" height="38" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M16 14h16M16 21h16M16 28h10" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M17 36l4 4 8-8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMeeting({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="10" width="34" height="28" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M7 18h34" stroke="currentColor" strokeWidth={base} />
      <path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="17" cy="27" r="2" fill="currentColor" />
      <circle cx="24" cy="27" r="2" fill="currentColor" />
      <circle cx="31" cy="27" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconProjects({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 38V16l10-6 10 6v22" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M28 38V22l10-6 2 1.2V38" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M8 38h32" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M14 22h4M14 28h4M14 33h4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconADA({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth={base} />
      <circle cx="24" cy="15" r="3" fill="currentColor" />
      <path d="M24 19v8l8 4M24 27l-6 11M24 27l-3 4h-6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCamera({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="14" width="26" height="20" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M32 20l10-5v18l-10-5" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="19" cy="24" r="5" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function IconCityHall({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 6l17 10H7l17-10z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M9 20v16M17 20v16M24 20v16M31 20v16M39 20v16" stroke="currentColor" strokeWidth={base} />
      <path d="M6 40h36" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconEmail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="11" width="36" height="26" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M8 14l16 13 16-13" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWeather({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth={base} />
      <path d="M18 6v3M18 27v3M6 18h3M27 18h3M9.5 9.5l2 2M24.5 9.5l-2 2M9.5 26.5l2-2" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M18 34h16a6 6 0 0 0 1-11.9A9 9 0 0 0 18 26" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPress({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="12" width="26" height="24" rx="2" stroke="currentColor" strokeWidth={base} />
      <path d="M12 19h16M12 25h16M12 31h10" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M33 18h5a3 3 0 0 1 3 3v11a4 4 0 0 1-4 4H33" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWorld({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 10h16M10 2c2.5 2.2 2.5 13.8 0 16M10 2c-2.5 2.2-2.5 13.8 0 16" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill="var(--surface-warm)" />
      <path d="M20 12v10" stroke="var(--color-primary-700)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="27" r="1.6" fill="var(--color-primary-700)" />
    </svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <svg viewBox="0 0 76 53" fill="none" className={className} aria-hidden="true">
      <rect width="76" height="53" rx="14" fill="var(--interactive-primary)" />
      <path d="M30 16l22 10.5L30 37V16z" fill="white" />
    </svg>
  );
}

export function IconChevronLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 18" fill="none" className={className} aria-hidden="true">
      <path d="M10 2L3 9l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 18" fill="none" className={className} aria-hidden="true">
      <path d="M2 2l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 29 16" fill="none" className={className} aria-hidden="true">
      <path d="M0 8h26M19 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 18" fill="none" className={className} aria-hidden="true">
      <path d="M0 1h24M0 9h24M0 17h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="32" height="32" rx="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="7.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="29" cy="11" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M23 13h-3a3 3 0 0 0-3 3v3h-3v4h3v9h4v-9h3.2l.8-4H21v-2.4c0-.9.3-1.6 1.6-1.6H24z" fill="currentColor" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 34 35" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1.5" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 10l14 15M24 10L10 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconTikTok({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 38" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 2c1 4 3.5 6.5 7 7v5c-2.7 0-5-.8-7-2.2v11.7C22 29.5 17.7 33 12.6 33 7.4 33 3 28.9 3 23.7c0-5 4.2-9.2 9.4-9.2 1 0 1.9.1 2.8.4v5.4a4.7 4.7 0 0 0-2.8-.9 4.5 4.5 0 1 0 4.4 5.4V2h5.2z"
        fill="currentColor"
      />
    </svg>
  );
}
