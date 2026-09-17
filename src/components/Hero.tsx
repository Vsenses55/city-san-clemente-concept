export default function Hero() {
  return (
    <section
      className="relative flex items-end lg:items-center min-h-[420px] lg:min-h-[640px] overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, var(--color-primary-700) 0%, var(--color-primary-500) 38%, var(--color-accent-500) 72%, var(--surface-warm) 100%)',
      }}
    >
      {/* decorative placeholder pattern standing in for the hero photograph */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 220 Q100 180 200 210 T400 200 V300 H0 Z" fill="white" />
          <path d="M0 250 Q120 230 220 250 T400 240 V300 H0 Z" fill="white" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 px-6 sm:px-9 lg:px-24 pb-10 pt-20 lg:py-0 max-w-3xl">
        <h1 className="heading-h3 lg:heading-display text-white drop-shadow-sm">
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
    </section>
  );
}
