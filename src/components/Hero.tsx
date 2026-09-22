import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';
import heroImageTablet from '../assets/images/hero-marquee-tablet.jpg';
import heroImageMobile from '../assets/images/hero-marquee-mobile.jpg';

export default function Hero() {
  return (
    <section className="relative" style={{ background: 'var(--surface-background)' }}>
      {/*
        Decorative photo layer — absolutely positioned and fully decoupled from page
        layout. Its height never pushes the nav, headline, or the next section; only
        the content block below (in normal flow) determines where anything sits.

        Three tiers, each its own purpose-built, purpose-cropped photo:
          - Phone (below sm, <640px): a taller portrait-oriented crop
            (1024x1080) with its own baked-in fade to the page background at the
            bottom, so the headline lands over real water instead of a short,
            already-faded sliver.
          - Tablet (sm–lg, 640–1023px): a dedicated crop (2048x1000, 2x for
            retina at its ~1024x500 max on-screen size) composed specifically
            for this range, fluid and aspect-locked to its own native ratio,
            with a 500px height floor so it can't shrink so short that the
            headline's second line lands past the fade, floating on bare
            background. Below that floor the photo crops in slightly via
            object-cover rather than getting any shorter.
          - Desktop (lg+, 1024px+): the wide photo at true native size
            (3840x1200) — never scaled, no matter how wide the screen gets.
        If a photo is taller than the content below, the extra length simply
        extends behind whatever comes next rather than adding empty space.
      */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none h-[1080px] sm:h-auto sm:aspect-[2048/1000] sm:min-h-[500px] lg:aspect-auto lg:min-h-0 lg:h-[1200px]">
        {/* Phone tier — native size, center-cropped by this wrapper's overflow-hidden. */}
        <img
          src={heroImageMobile}
          alt="Aerial view of the San Clemente coastline and pier"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1024px] h-[1080px] max-w-none sm:hidden"
        />

        {/* Tablet tier — dedicated crop, fluid within its own aspect ratio + floor. */}
        <img
          src={heroImageTablet}
          alt="Aerial view of the San Clemente coastline and pier"
          className="hidden sm:block lg:hidden sm:w-full sm:h-full sm:object-cover"
          style={{
            // Fades the bottom of the photo into the page background instead of a
            // hard edge.
            maskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 82%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 82%)',
          }}
        />

        {/* Desktop tier — native size, never scaled. */}
        <img
          src={heroImage}
          alt="Aerial view of the San Clemente coastline and pier"
          className="hidden lg:block lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2
                     lg:w-[3840px] lg:h-[1200px] lg:max-w-none"
          style={{
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
