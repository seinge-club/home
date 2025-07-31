import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}
const prefix = process.env.NODE_ENV === 'production' ? '/home' : '';

const Logo: React.FC<LogoProps> = ({ width = 180, height = 70, className }) => {
  return (
    <Link href="/" className={className}>
      <Image
        src={`${prefix}/images/logo/logo_Seinge.svg`}
        alt="logo"
        width={width}
        height={height}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
