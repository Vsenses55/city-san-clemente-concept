import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';

export default function Hero() {
  return (
    <section className="relative" style={{ background: 'var(--surface-background)' }}>
      {/*
        Grid "stack": the image and the nav/content overlay share the same cell, so the
        row's height is the larger of the two — the photo's own aspect ratio (never
        cropped or repositioned) versus whatever room the nav + headline actually need.
        On tall/narrow screens where the content needs more room than the photo's
        native ratio provides, the section simply grows and the extra space is the
        page background color (which the photo already fades into), so nothing looks cut.
      */}
      <div className="grid w-full">
        <img
          src={heroImage}
          alt="Aerial view of the San Clemente coastline and pier"
          className="col-start-1 row-start-1 self-start w-full aspect-[16/5] object-cover"
          style={{
            // No objectPosition offset — the image's full frame is shown at its native
            // aspect ratio, so nothing is cropped or shifted.
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          }}
        />
        {/* light scrim behind the nav only, so it stays legible over bright sky/water */}
        <div
          className="col-start-1 row-start-1 self-start w-full aspect-[16/5] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(3,8,14,0.45) 0%, rgba(3,8,14,0) 45%)' }}
        />

        <div className="col-start-1 row-start-1 relative flex flex-col">
          <MainNav />

          <div className="max-w-[1200px] w-full mx-auto px-6 mt-6 sm:mt-10 lg:mt-20 xl:mt-24">
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
