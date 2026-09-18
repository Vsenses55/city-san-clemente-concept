import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';

export default function Hero() {
  return (
    <section className="relative" style={{ background: 'var(--surface-background)' }}>
      <div className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Aerial view of the San Clemente coastline and pier"
          className="absolute inset-0 size-full object-cover"
          style={{
            objectPosition: 'center 30%',
            // Fades the photo to transparent toward the bottom of this (now content-hugging)
            // section so it dissolves into the page background instead of a hard edge.
            maskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
          }}
        />
        {/* light scrim behind the nav only, so it stays legible over bright sky/water */}
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(3,8,14,0.45) 0%, rgba(3,8,14,0) 100%)' }}
        />

        <div className="relative flex flex-col">
          <MainNav />

          <div className="max-w-[1200px] w-full mx-auto px-6 mt-6 sm:mt-10 lg:mt-20 xl:mt-24 pb-0">
            <h1 className="heading-h2 sm:heading-h1 lg:heading-display text-white drop-shadow-sm max-w-2xl">
              The Spanish Village
              <br />
              by the Sea
            </h1>
            <div className="flex items-center gap-2 mt-6 lg:mt-10" aria-hidden="true">
              <span className="size-3 rounded-full bg-white" />
              <span className="w-8 h-3 rounded-full bg-[var(--surface-warm)]" />
              <span className="size-3 rounded-full bg-white" />
              <span className="size-3 rounded-full bg-white" />
              <span className="size-3 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
