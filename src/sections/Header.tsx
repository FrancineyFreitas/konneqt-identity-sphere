import ThemeToggle from '../components/ThemeToggle';
import KonneqtLogo from '../components/KonneqtLogo';
import QSCIMLogo from '../components/QSCIMLogo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left side - Konneqt logo */}
          <div className="flex items-center">
            <a 
              href="https://konneqt.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <KonneqtLogo width={120} height={32} className="w-auto h-6 sm:h-8" />
            </a>
          </div>

          {/* Center - QSCIM logo */}
          <div className="flex justify-center">
            <a 
              href="https://konneqt.io/qscim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <QSCIMLogo width={120} height={32} className="w-auto h-6 sm:h-8" />
            </a>
          </div>

          {/* Right side - Theme toggle */}
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
