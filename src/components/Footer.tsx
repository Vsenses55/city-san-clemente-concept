import { IconInstagram, IconFacebook, IconX, IconTikTok } from './icons';
import logoCosc from '../assets/logo/cosc-seal.png';

const COL_1 = ['Residents', 'Business', 'Government', 'Visitors', 'Connect'];
const COL_2 = ['3-1-1', 'Animal Services', 'Muni-Code', 'Transparency', 'Homelessness Info'];
const SOCIAL = [
  { Icon: IconInstagram, label: 'Instagram' },
  { Icon: IconFacebook, label: 'Facebook' },
  { Icon: IconX, label: 'X' },
  { Icon: IconTikTok, label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-dark)' }} className="text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-9 py-12 sm:py-16 flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
          <img src={logoCosc} alt="City of San Clemente" className="size-[100px] sm:size-[206px] shrink-0" />

          <div className="grid grid-cols-2 gap-x-14 gap-y-2 body-body">
            <nav className="flex flex-col gap-2">
              {COL_1.map((l) => (
                <a key={l} href="#" className="hover:text-[var(--text-link)]">
                  {l}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-2">
              {COL_2.map((l) => (
                <a key={l} href="#" className="hover:text-[var(--text-link)]">
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="heading-h5">Follow Us</p>
            <div className="flex gap-4">
              {SOCIAL.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="hover:text-[var(--text-link)]">
                  <Icon className="size-9" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="body-caption text-white/60 text-center sm:text-left">
          © {new Date().getFullYear()} City of San Clemente, CA. All Rights Reserved. Connecting People and Government
        </p>
      </div>
    </footer>
  );
}
