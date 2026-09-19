import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';

export default function Hero() {
  return (
    <section className="relative" style={{ background: 'var(--surface-background)' }}>
      {/*
        Decorative photo layer — absolutely positioned and fully decoupled from page
        layout. Its height never pushes the nav, headline, or the next section; only
        the content block below (in normal flow) determines where anything sits.
        Below lg: fluid, full width, aspect-locked to the photo's own ratio.
        At lg+: rendered at true native size (3840x1200) — never scaled, no matter how
        wide the screen gets — centered and clipped by this layer's own overflow-hidden
        box. If the photo is taller than the content below, the extra length simply
        extends behind whatever comes next rather than adding empty space.
      */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none aspect-[16/5] lg:aspect-auto lg:h-[1200px]">
        <img
          src={heroImage}
          alt="Aerial view of the San Clemente coastline and pier"
          className="w-full h-full object-cover
                     lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2
                     lg:w-[3840px] lg:h-[1200px] lg:max-w-none"
          style={{
            // Fades the bottom of the photo into the page background instead of a
            // hard edge.
            maskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 82%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 82%)',
          }}
        />
        {/* light scrim behind the nav only, so it stays legible over bright sky/water */}
        <div
          className="absolute inset-x-0 top-0 h-40 lg:h-64"
          style={{ background: 'linear-gradient(180deg, rgba(3,8,14,0.45) 0%, rgba(3,8,14,0) 100%)' }}
        />
      </div>

      {/* Actual content flow — this, and only this, determines the section's height. */}
      <div className="relative z-20 flex flex-col">
        <MainNav />

        <div className="max-w-[1200px] w-full mx-auto px-6 mt-6 sm:mt-10 lg:mt-[210px] xl:mt-[256px]">
          <h1 className="heading-h2 sm:heading-h1 lg:heading-display text-white drop-shadow-sm max-w-2xl">
            The Spanish Village
            <br />
            by the Sea
          </h1>
          <div className="flex items-center gap-2 mt-6 lg:mt-[105px]" aria-hidden="true">
            <span className="size-3 rounded-full bg-white" />
            <span className="w-8 h-3 rounded-full bg-[var(--surface-warm)]" />
            <span className="size-3 rounded-full bg-white" />
            <span className="size-3 rounded-full bg-white" />
            <span className="size-3 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
