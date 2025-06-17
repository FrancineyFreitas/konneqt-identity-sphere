
interface KonneqtLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const KonneqtLogo = ({ className = '', width = 150, height = 40 }: KonneqtLogoProps) => {
  return (
    <img
      src="/logos/White-Konneqt.png"
      alt="Konneqt Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default KonneqtLogo;
