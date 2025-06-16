
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import KonneqtLogo from '../components/KonneqtLogo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a 
              href="https://konneqt.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <KonneqtLogo width={120} height={32} className="w-auto h-8" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {t('footer.rights')}
            </p>
            
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/konneqt.io/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 hover:from-konneqt-blue/20 hover:to-konneqt-purple/20 transition-all duration-300 group"
            >
              <Instagram size={20} className="text-muted-foreground group-hover:text-konneqt-blue transition-colors" />
            </a>
            <a 
              href="https://www.facebook.com/people/Konneqtio/61572554427000/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 hover:from-konneqt-blue/20 hover:to-konneqt-purple/20 transition-all duration-300 group"
            >
              <Facebook size={20} className="text-muted-foreground group-hover:text-konneqt-blue transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/company/konneqt-tech" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 hover:from-konneqt-blue/20 hover:to-konneqt-purple/20 transition-all duration-300 group"
            >
              <Linkedin size={20} className="text-muted-foreground group-hover:text-konneqt-blue transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
