
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-2 border-konneqt-blue/20 hover:border-konneqt-blue/40 transition-colors"
    >
      {language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
    </Button>
  );
};

export default LanguageToggle;
