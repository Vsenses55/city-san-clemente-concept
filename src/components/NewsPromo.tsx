import { IconArrowRight } from './icons';

const NEWS = [
  'Ballot Measure BB, City Council Candidates, City of San Clemente General Municipal',
  'City of San Clemente Begins its Search for Offshore Sand',
  'First Approval Received in Effort to Restart the SCOUP Program',
  '3rd Annual Monster Dash 5K & Creepy Crawl Fun Run Set for October 26, 2024',
];

export default function NewsPromo() {
  return (
    <section className="grid lg:grid-cols-2 rounded-[var(--radius-xl)] overflow-hidden">
      <div className="flex flex-col justify-center gap-6 p-8 sm:p-12" style={{ background: 'var(--color-primary-700)' }}>
        <h2 className="heading-h3 text-white">Latest News</h2>
        <ul className="flex flex-col gap-4 body-body-sm text-white/90">
          {NEWS.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 rounded-full bg-white/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="self-end flex items-center gap-2 body-body-bold text-[var(--text-link)] border-b border-[var(--text-link)] pb-1 w-fit">
          view more
          <IconArrowRight className="size-4" />
        </a>
      </div>

      <div
        className="relative flex flex-col items-center justify-center gap-6 p-10 min-h-[320px] text-white text-center"
        style={{
          background: 'linear-gradient(160deg, var(--color-accent-700), var(--color-accent-500) 60%, var(--surface-warm))',
        }}
      >
        <p className="body-overline">Get to know</p>
        <h2 className="heading-h2">San Clemente</h2>
        <a
          href="#"
          className="absolute bottom-0 right-0 flex items-center gap-3 px-8 py-6 rounded-tl-[var(--radius-xl)] text-white heading-h6"
          style={{ background: 'var(--color-accent-500)' }}
        >
          learn more
          <IconArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
