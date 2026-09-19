import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--surface-background)' }}>
      {/*
        Below lg: the image is fluid (full width, aspect-locked, content-hugging), same
        as the mobile treatment approved earlier.
        At lg and up: the image is rendered at its true native pixel size (3840x1200) —
        no CSS scaling, ever, no matter how wide the monitor gets. It's centered
        horizontally and clipped by this section's overflow-hidden; the two edge-fade
        layers below blend that clipped edge into the page background instead of
        leaving a hard cut.
      */}
      <div className="grid w-full lg:min-h-[1200px]">
        <img
          src={heroImage}
          alt="Aerial view of the San Clemente coastline and pier"
          className="col-start-1 row-start-1 self-start w-full aspect-[16/5] object-cover
                     lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2
                     lg:w-[3840px] lg:h-[1200px] lg:max-w-none lg:aspect-auto"
          style={{
            // Fades the bottom of the photo into the page background instead of a
            // hard edge — unrelated to the left/right edge treatment below.
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          }}
        />

        {/* light scrim behind the nav only, so it stays legible over bright sky/water */}
        <div
          className="col-start-1 row-start-1 self-start w-full aspect-[16/5] pointer-events-none
                     lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2
                     lg:w-[3840px] lg:h-[1200px] lg:aspect-auto"
          style={{ background: 'linear-gradient(180deg, rgba(3,8,14,0.45) 0%, rgba(3,8,14,0) 20%)' }}
        />

        {/*
          Left/right edge blend — only needed at lg+, where the native-size image can be
          narrower or wider than the viewport and gets clipped by overflow-hidden. Fades
          the clipped edge into the page background so the cut isn't a hard line.
        */}
        <div
          className="hidden lg:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-40 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, var(--surface-background) 0%, transparent 100%)' }}
        />
        <div
          className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-40 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, var(--surface-background) 0%, transparent 100%)' }}
        />

        <div className="col-start-1 row-start-1 relative z-20 flex flex-col">
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
      </div>
    </section>
  );
}
