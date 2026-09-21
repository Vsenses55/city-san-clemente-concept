import promoDesktop from '../assets/images/promo-san-clemente-desktop.jpg';
import promoMobile from '../assets/images/promo-san-clemente-mobile.jpg';

const NEWS = [
  'Ballot Measure BB, City Council Candidates, City of San Clemente General Municipal',
  'City of San Clemente Begins its Search for Offshore Sand',
  'First Approval Received in Effort to Restart the SCOUP Program',
  '3rd Annual Monster Dash 5K & Creepy Crawl Fun Run Set for October 26, 2024',
];

export default function NewsPromo() {
  return (
    <section className="grid lg:grid-cols-2 lg:h-[457px]">
      <div
        className="flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-14"
        style={{ background: '#0d4281' }}
      >
        <h2 className="heading-h3 text-white">Latest News</h2>
        <ul className="flex flex-col gap-3 body-body-sm text-white/90 list-disc pl-5 marker:text-white/50">
          {NEWS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="relative min-h-[320px] lg:min-h-0">
        <img
          src={promoMobile}
          alt="San Clemente"
          className="lg:hidden block w-full h-full object-cover"
        />
        <img
          src={promoDesktop}
          alt="San Clemente"
          className="hidden lg:block w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
