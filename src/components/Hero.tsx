import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';

// The Figma reference is a 1440px-wide design — that's the scale the photo, nav, and
// headline were composed at, and it's what we treat as "actual size" for this hero.
const REFERENCE_WIDTH = 1440;

export default function Hero() {
  return (
    <section className="relative" style={{ background: 'var(--surface-background)' }}>
      {/*
        Capping at the reference width — rather than letting the image/aspect box grow
        with the viewport — is what stops this from "scaling." Below 1440px it still
        shrinks fluidly like any responsive layout (no crop, aspect ratio always matches).
        At 1440px and above it freezes at exactly the reference size: the photo and the
        headline sitting in the water never change size or position relative to each
        other again, no matter how wide the monitor is. The page background fills in on
        either side beyond that width, rather than the image stretching taller/wider,
        which is what was pushing the headline out of the water on big screens.
      */}
      <div className="relative w-full mx-auto" style={{ maxWidth: REFERENCE_WIDTH }}>
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
      </div>
    </section>
  );
}
