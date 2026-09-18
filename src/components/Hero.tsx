import { MainNav } from './Header';
import heroImage from '../assets/images/hero-marquee.jpg';

export default function Hero() {
  return (
    <section className="relative h-[480px] sm:h-[560px] lg:h-[680px] xl:h-[760px] overflow-hidden">
      <img
        src={heroImage}
        alt="Aerial view of the San Clemente coastline and pier"
        className="absolute inset-0 size-full object-cover"
      />
      {/* gradient scrim so the nav and headline stay legible over the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,8,14,0.55) 0%, rgba(3,8,14,0.05) 22%, rgba(3,8,14,0) 45%, rgba(3,8,14,0.55) 100%)',
        }}
      />

      <div className="relative flex flex-col h-full">
        <MainNav />

        <div className="mt-auto max-w-[1200px] w-full mx-auto px-6 pb-12 lg:pb-16">
          <h1 className="heading-h2 sm:heading-h1 lg:heading-display text-white drop-shadow-sm max-w-2xl">
            The Spanish Village
            <br />
            by the Sea
          </h1>
          <div className="flex items-center gap-2 mt-6" aria-hidden="true">
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
