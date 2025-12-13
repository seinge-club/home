import Image from "next/image";
import Link from "next/link";

import { getAssetPath } from "@/utils/getPath";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ width = 180, height = 70, className }) => {
  return (
    <Link href="/" className={className}>
      <Image
        src={getAssetPath("/images/logo/Logo_Seinge.svg")}
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
