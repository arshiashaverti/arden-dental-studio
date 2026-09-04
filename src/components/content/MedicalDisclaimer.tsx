import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MedicalDisclaimerProps {
  className?: string;
  id?: string;
}

export function MedicalDisclaimer({ className = '', id = 'medical-disclaimer-notice' }: MedicalDisclaimerProps) {
  const { t } = useLanguage();

  return (
    <div
      id={id}
      className={`rounded-xl border border-[#C2C6D3] bg-[#C2C6D3]/20 p-5 text-xs leading-relaxed text-[#48537B] flex items-start gap-3.5 ${className}`}
    >
      <AlertCircle size={20} className="shrink-0 text-[#48537B] mt-0.5" aria-hidden="true" />
      <div>
        <span className="font-bold text-[#0B194E] block mb-1">
          {t.footer.medicalDisclaimer}
        </span>
      </div>
    </div>
  );
}
