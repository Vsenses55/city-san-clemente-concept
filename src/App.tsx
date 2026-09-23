import { UtilityBar } from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import VideoSection from './components/VideoSection';
import EventsCalendar from './components/EventsCalendar';
import NewsPromo from './components/NewsPromo';
import MiscLinks from './components/MiscLinks';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--surface-background)' }}>
      <UtilityBar />
      <Hero />
      <main className="relative z-10 flex flex-col gap-10 sm:gap-14 px-4 sm:px-8 pt-20 pb-10 sm:pb-14 max-w-[1200px] w-full mx-auto">
        <Reveal>
          <QuickLinks />
        </Reveal>
        <Reveal>
          <VideoSection />
        </Reveal>
        <Reveal>
          <div className="rounded-[var(--radius-xl)] overflow-hidden flex flex-col">
            <EventsCalendar />
            <NewsPromo />
          </div>
        </Reveal>
        <Reveal>
          <MiscLinks />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
