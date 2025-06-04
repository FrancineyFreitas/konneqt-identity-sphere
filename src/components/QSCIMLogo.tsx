import { useEffect, useState } from 'react';

interface QSCIMLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const QSCIMLogo = ({ className = '', width = 150, height = 40 }: QSCIMLogoProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Initial theme check
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Create a mutation observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    // Start observing the document element for class changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={theme === 'dark' ? '/logos/qscim-white-color.svg' : '/logos/qscim-black-color.svg'}
      alt="QSCIM Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default QSCIMLogo; 