
interface QSCIMLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const QSCIMLogo = ({ className = '', width = 150, height = 40 }: QSCIMLogoProps) => {
  return (
    <img
      src="/logos/qscim-white-color.svg"
      alt="QSCIM Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default QSCIMLogo;
