import { IconADA, IconCamera, IconCityHall, IconEmail, IconWeather, IconPress } from './icons';

const LINKS = [
  { icon: IconADA, label: 'ADA' },
  { icon: IconCamera, label: 'Beach Camera' },
  { icon: IconCityHall, label: 'City Hall' },
  { icon: IconEmail, label: 'Contact Us' },
  { icon: IconWeather, label: 'Live Weather' },
  { icon: IconPress, label: 'Press Releases' },
];

export default function MiscLinks() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 rounded-[var(--radius-xl)] overflow-hidden">
      {LINKS.map(({ icon: Icon, label }) => (
        <a
          key={label}
          href="#"
          className="flex flex-col items-center justify-center gap-[6.5px] lg:gap-[13px] p-8 sm:p-10 border border-[#e5be7d] text-[var(--text-primary)] transition-colors hover:brightness-95"
          style={{ background: 'var(--surface-warm)' }}
        >
          <Icon className="size-[75px]" />
          <p className="heading-h5 uppercase text-center tracking-wide">{label}</p>
        </a>
      ))}
    </section>
  );
}
