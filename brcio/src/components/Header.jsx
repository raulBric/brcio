import Image from "next/image";
import Logo from "../../public/br_logo-black-lightback.png";

const Header = () => {
  return (
    <header className="flex justify-center">
    <Image
    src={Logo}
    alt="BRCIO"
    width={100}
    height={100}
    priority
    className="flex justify-center h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32"
  />
    </header>
  )
}

export default Header
