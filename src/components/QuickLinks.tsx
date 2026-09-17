import { IconAlert, IconBill, IconRecreation, IconCompliance, IconPermit, IconMeeting, IconProjects } from './icons';

const LINKS = [
  { icon: IconBill, label: 'Pay A Bill' },
  { icon: IconRecreation, label: 'Recreation Sign-up' },
  { icon: IconCompliance, label: 'Code Compliance & Service Requests' },
  { icon: IconPermit, label: 'Permits & Business Licensee' },
  { icon: IconMeeting, label: 'Meetings & Agendas' },
  { icon: IconProjects, label: 'Current Projects' },
];

export default function QuickLinks() {
  return (
    <section className="rounded-[var(--radius-xl)] overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-11 py-5 bg-[var(--surface-primary)] text-white">
        <div className="flex items-center gap-3">
          <IconAlert className="size-10 shrink-0" />
          <p className="heading-h4">City Alerts</p>
        </div>
        <p className="body-body-lg text-center">High Tide Report and Weather Statement</p>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-3.5 rounded-full bg-white/40" />
          <span className="size-3.5 rounded-full bg-white" />
          <span className="size-3.5 rounded-full bg-white/40" />
          <span className="size-3.5 rounded-full bg-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3">
        {LINKS.map(({ icon: Icon, label }, i) => (
          <a
            key={label}
            href="#"
            className="group flex flex-col items-center justify-center gap-3 p-6 sm:p-10 border border-[var(--border-subtle)] transition-colors hover:bg-[var(--surface-accent-subtle)]"
            style={{ background: i < 3 ? 'var(--surface-white)' : 'var(--color-secondary-100)' }}
          >
            <span className="flex items-center justify-center size-16 sm:size-20 rounded-full bg-[var(--surface-background)] text-[var(--interactive-primary)] group-hover:text-[var(--interactive-default)] transition-colors">
              <Icon className="size-8 sm:size-10" />
            </span>
            <p className="heading-h6 sm:heading-h5 text-[var(--text-primary)] text-center">{label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
