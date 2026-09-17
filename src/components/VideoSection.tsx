import { IconPlay } from './icons';

export default function VideoSection() {
  return (
    <section className="rounded-[var(--radius-xl)] overflow-hidden bg-black relative">
      <button
        className="group relative flex items-center justify-center w-full aspect-video"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-900), var(--color-primary-500))',
        }}
        aria-label="Play San Clemente Beach Camera livestream"
      >
        <IconPlay className="w-16 sm:w-20 h-auto transition-transform group-hover:scale-110" />
        <p className="absolute bottom-6 sm:bottom-10 heading-h5 sm:heading-h3 text-white">San Clemente Beach Camera</p>
      </button>
    </section>
  );
}
