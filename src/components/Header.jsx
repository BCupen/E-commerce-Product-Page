import { Logo } from "./Icons";
import NavMenu from "./NavMenu";
import Avatar from "../assets/image-avatar.png";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="w-full relative bg-white px-6 py-4 md:py-0 md:border-b-2 border-neutral-blue-100 flex justify-between">
        <div className="flex flex-row-reverse md:flex-row items-center justify-end md:justify-start gap-4">
            <Logo />
            <NavMenu />
        </div>
        <div className="flex items-center gap-6 md:gap-10">
            <Cart />
            <img src={Avatar} alt="avatar" className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer hover:border-2 hover:border-primary-orange-200"/>
        </div>
    </div>
  )
}

export default Header