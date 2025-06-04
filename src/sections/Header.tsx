
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-konneqt-blue to-konneqt-purple rounded-lg"></div>
          <span className="text-xl font-bold gradient-text">Konneqt</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
