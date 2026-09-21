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
  const [weekOffset, setWeekOffset] = useState(0);

  const cells = useMemo(() => buildMonthGrid(cursor.year, cursor.month), [cursor]);
  const monthLabel = new Date(cursor.year, cursor.month, 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const isCurrentMonth = cursor.year === today.getFullYear() && cursor.month === today.getMonth();

  const weekDates = useMemo(() => {
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + weekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
  }, [today, weekOffset]);
  const weekMonthLabel = `${weekDates[3].toLocaleDateString('en-US', { month: 'long' })}, ${weekDates[3].getFullYear()}`;

  function shiftMonth(delta: number) {
    setCursor((c) => {
      const d = new Date(c.year, c.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  return (
    <>
      {/* Mobile: week strip + card list (per Figma Make mobile design) */}
      <div className="lg:hidden flex flex-col w-full" style={{ background: 'var(--surface-primary)' }}>
        <div className="flex items-center justify-center gap-4 pt-5 pb-4 px-4">
          <button onClick={() => setWeekOffset((w) => w - 1)} aria-label="Previous week" className="text-white/80 hover:text-white">
            <IconChevronLeft className="size-4" />
          </button>
          <p className="heading-h3 text-white whitespace-nowrap">{weekMonthLabel}</p>
          <button onClick={() => setWeekOffset((w) => w + 1)} aria-label="Next week" className="text-white/80 hover:text-white">
            <IconChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex items-start justify-between px-3 pb-6">
          {weekDates.map((d) => {
            const isToday = d.toDateString() === today.toDateString();
            return (
              <div
                key={d.toISOString()}
                className={`flex flex-col items-center gap-1.5 px-2.5 py-2 rounded-xl ${isToday ? 'font-bold' : 'text-white/50'}`}
                style={isToday ? { background: 'var(--surface-warm)', color: 'var(--text-primary)' } : undefined}
              >
                <p className="text-[11px] uppercase">{d.toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <p className="text-[15px]">{d.getDate()}</p>
              </div>
            );
          })}
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col px-4 py-5" style={{ background: '#0d4281' }}>
          <div className="flex flex-col gap-2.5 w-full">
            <p className="heading-h4 text-white">Meetings</p>
            {MEETINGS.map((m, i) => (
              <div key={m.title} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/7 border border-white/10">
                <span
                  className="w-[3px] h-9 rounded-sm shrink-0"
                  style={{ background: i === 0 ? 'var(--color-accent-500)' : 'var(--surface-warm)' }}
                />
                <div className="flex flex-col gap-[3px] text-[13px]">
                  <p className="font-bold text-white">{m.time}</p>
                  <p className="text-white/65">{m.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-5" />

          <div className="flex flex-col gap-2.5 w-full">
            <p className="heading-h4 text-white">Events</p>
            {EVENTS.map((e) => (
              <div key={e.title} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/7 border border-white/10">
                <span className="w-[3px] h-9 rounded-sm shrink-0" style={{ background: 'var(--color-secondary-500)' }} />
                <div className="flex flex-col gap-[3px] text-[13px]">
                  <p className="font-bold text-white">{e.time}</p>
                  <p className="text-white/65">{e.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-6" />
        </div>
      </div>

      {/* Desktop: full month grid + panel */}
      <section
        className="hidden lg:grid lg:grid-cols-[520fr_680fr] lg:h-[457px]"
        style={{ background: 'var(--surface-primary)' }}
      >
      {/* Calendar */}
      <div className="flex flex-col items-center justify-center gap-6 p-8 sm:p-10 lg:h-full">
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
      <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-14 lg:h-full" style={{ background: '#0d4281' }}>
        <div
          className="hidden sm:flex absolute top-0 right-0 flex-col items-center justify-center rounded-bl-[40px] size-20 sm:size-24 lg:size-[110px] text-white"
          style={{ background: 'var(--color-secondary-500)' }}
        >
          <p className="body-body-bold uppercase tracking-wide leading-none">{today.toLocaleDateString('en-US', { month: 'short' })}</p>
          <p className="heading-display text-[32px] sm:text-[44px] lg:text-[72px] leading-none">{today.getDate()}</p>
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
    </>
  );
}
