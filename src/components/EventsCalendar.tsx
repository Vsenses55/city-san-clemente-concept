import { useMemo, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from './icons';

const DAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const MEETINGS = [
  { time: '1:00 p.m.', title: 'Zoning Administration Meeting' },
  { time: '3:30 p.m.', title: 'Design Review Subcommittee' },
];

const EVENTS = [
  { time: '6:00 p.m.', title: 'Planning Commission Meeting' },
  { time: '6:00 p.m.', title: 'Parks & Recreation Workshop' },
];

function buildMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function EventsCalendar() {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const cells = useMemo(() => buildMonthGrid(cursor.year, cursor.month), [cursor]);
  const monthLabel = new Date(cursor.year, cursor.month, 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const isCurrentMonth = cursor.year === today.getFullYear() && cursor.month === today.getMonth();

  function shiftMonth(delta: number) {
    setCursor((c) => {
      const d = new Date(c.year, c.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  return (
    <section
      className="grid lg:grid-cols-[minmax(0,420px)_1fr] rounded-[var(--radius-xl)] overflow-hidden"
      style={{ background: 'var(--surface-primary)' }}
    >
      {/* Calendar */}
      <div className="flex flex-col items-center gap-6 p-8 sm:p-10">
        <div className="flex items-center gap-4">
          <button onClick={() => shiftMonth(-1)} aria-label="Previous month" className="text-white/80 hover:text-white">
            <IconChevronLeft className="size-4" />
          </button>
          <p className="heading-h4 text-white whitespace-nowrap">{monthLabel}</p>
          <button onClick={() => shiftMonth(1)} aria-label="Next month" className="text-white/80 hover:text-white">
            <IconChevronRight className="size-4" />
          </button>
        </div>

        <table className="w-full max-w-[340px] border-separate border-spacing-y-2 text-center">
          <thead>
            <tr>
              {DAY_LABELS.map((d) => (
                <th key={d} className="heading-h6 text-white/70 font-semibold pb-2">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: cells.length / 7 }, (_, row) => (
              <tr key={row}>
                {cells.slice(row * 7, row * 7 + 7).map((day, i) => {
                  const isToday = isCurrentMonth && day === today.getDate();
                  return (
                    <td key={i} className="p-0">
                      {day && (
                        <span
                          className={`inline-flex items-center justify-center size-9 rounded-md body-body ${
                            isToday ? 'bg-[var(--surface-warm)] text-[var(--text-primary)] font-bold' : 'text-white'
                          }`}
                        >
                          {day}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Meetings & Events */}
      <div className="relative p-8 sm:p-10 lg:p-14" style={{ background: 'var(--color-primary-700)' }}>
        <div
          className="hidden sm:flex absolute top-0 right-8 lg:right-16 flex-col items-center justify-center rounded-b-[var(--radius-xl)] w-24 py-3 text-[var(--text-primary)]"
          style={{ background: 'var(--color-secondary-500)' }}
        >
          <p className="heading-h2 leading-none">{today.getDate()}</p>
          <p className="body-body-bold uppercase tracking-wide">{today.toLocaleDateString('en-US', { month: 'short' })}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <p className="heading-h4 text-white mb-4">Meetings</p>
            <ul className="flex flex-col gap-4">
              {MEETINGS.map((m) => (
                <li key={m.title} className="flex gap-3">
                  <span className="mt-2 size-2.5 rounded-full bg-[var(--surface-warm)] shrink-0" />
                  <p className="text-white">
                    <span className="body-event-time block">{m.time}</span>
                    <span className="body-event-description">{m.title}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="heading-h4 text-white mb-4">Events</p>
            <ul className="flex flex-col gap-4">
              {EVENTS.map((e) => (
                <li key={e.title} className="flex gap-3">
                  <span className="mt-2 size-2.5 rounded-full bg-[var(--surface-warm)] shrink-0" />
                  <p className="text-white">
                    <span className="body-event-time block">{e.time}</span>
                    <span className="body-event-description">{e.title}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
