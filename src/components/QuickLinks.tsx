import { IconAlert } from './icons';
import iconPayABill from '../assets/icons/pay-a-bill-tight.png';
import iconRecreation from '../assets/icons/recreation-tight.png';
import iconCompliance from '../assets/icons/compliance-tight.png';
import iconPermits from '../assets/icons/permits-tight.png';
import iconMeetings from '../assets/icons/meetings-tight.png';
import iconCurrentProjects from '../assets/icons/current-projects-tight.png';

const LINKS = [
  { icon: iconPayABill, label: 'Pay A Bill', shortLabel: 'Pay A Bill' },
  { icon: iconRecreation, label: 'Recreation Sign-up', shortLabel: 'Recreation' },
  { icon: iconCompliance, label: 'Code Compliance & Service Requests', shortLabel: 'Compliance' },
  { icon: iconPermits, label: 'Permits & Business Licensee', shortLabel: 'Permits' },
  { icon: iconMeetings, label: 'Meetings & Agendas', shortLabel: 'Meetings' },
  { icon: iconCurrentProjects, label: 'Current Projects', shortLabel: 'Projects' },
];

export default function QuickLinks() {
  return (
    <section className="rounded-[var(--radius-xl)] overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-11 py-5 bg-[var(--surface-primary)] text-white">
        <div className="flex items-center gap-3">
          <IconAlert className="w-10 h-[35px] shrink-0" />
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
        {LINKS.map(({ icon, label, shortLabel }, i) => (
          <a
            key={label}
            href="#"
            className="group flex flex-col items-center justify-center gap-[6.5px] lg:gap-[13px] h-[127px] sm:h-[251px] px-4 sm:px-10 border border-[#e8e2e2] transition-colors hover:bg-[var(--surface-accent-subtle)]"
            style={{ backgroundImage: `linear-gradient(to bottom, #ffffff, ${i < 3 ? '#f8f6f6' : '#f1e8e8'})` }}
          >
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="size-16 sm:size-[100px] object-contain object-bottom"
            />
            <p className="heading-h6 sm:heading-h5 text-[var(--text-primary)] text-center">
              <span className="sm:hidden">{shortLabel}</span>
              <span className="hidden sm:inline">{label}</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
