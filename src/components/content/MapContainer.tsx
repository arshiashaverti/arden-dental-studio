import { MapPin, Navigation, Compass } from 'lucide-react';
import { clinicData } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

interface MapContainerProps {
  className?: string;
  id?: string;
}

export function MapContainer({ className = '', id = 'clinic-map-container' }: MapContainerProps) {
  const { locale, t } = useLanguage();

  // Provider-neutral external navigation link using verified address query
  const navigationUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('تهران، پاسداران، بوستان 7');

  return (
    <div
      id={id}
      className={`overflow-hidden rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] shadow-sm flex flex-col justify-between ${className}`}
    >
      {/* Visual Map Canvas Representation */}
      <div className="relative min-h-[260px] sm:min-h-[300px] w-full bg-[#C2C6D3]/20 flex items-center justify-center p-6 border-b border-[#C2C6D3]">
        {/* Abstract road/district grid pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="street-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#48537B" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#street-grid)" />
            {/* Stylized main avenue */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#48537B" strokeWidth="3" />
            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#48537B" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Location Pin Badge */}
        <div className="relative z-10 flex flex-col items-center text-center p-5 rounded-xl bg-[#FFFFFF]/95 border border-[#C2C6D3] shadow-md max-w-xs">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B194E] text-[#FFFFFF] mb-3 shadow-sm">
            <MapPin size={24} aria-hidden="true" />
          </div>
          <span className="font-bold text-sm sm:text-base text-[#0B194E]">
            {clinicData.name}
          </span>
          <span className="text-xs text-[#48537B] mt-1">
            {clinicData.address[locale]}
          </span>
          <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-medium text-[#48537B]">
            <Compass size={12} aria-hidden="true" />
            {locale === 'fa' ? 'منطقه پاسداران تهران' : 'Pasdaran District, Tehran'}
          </span>
        </div>
      </div>

      {/* Map Action Bar */}
      <div className="p-5 sm:p-6 bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#48537B]">
            {t.contact.addressCardTitle}
          </span>
          <p className="text-sm font-bold text-[#0B194E] mt-0.5">
            {clinicData.address[locale]}
          </p>
        </div>

        <a
          id="open-navigation-maps-button"
          href={navigationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-btn inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0B194E] px-5 py-2.5 text-xs font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors focus-visible:outline-2 focus-visible:outline-[#48537B]"
        >
          <Navigation size={15} aria-hidden="true" />
          <span>{t.contact.openInMapsButton}</span>
        </a>
      </div>
    </div>
  );
}
