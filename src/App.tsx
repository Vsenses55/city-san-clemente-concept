import { UtilityBar } from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import VideoSection from './components/VideoSection';
import EventsCalendar from './components/EventsCalendar';
import NewsPromo from './components/NewsPromo';
import MiscLinks from './components/MiscLinks';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--surface-background)' }}>
      <UtilityBar />
      <Hero />
      <main className="flex flex-col gap-10 sm:gap-14 px-4 sm:px-8 py-10 sm:py-14 max-w-[1200px] w-full mx-auto">
        <QuickLinks />
        <VideoSection />
        <EventsCalendar />
        <NewsPromo />
        <MiscLinks />
      </main>
      <Footer />
    </div>
  );
}
