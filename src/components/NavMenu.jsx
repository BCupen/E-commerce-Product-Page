import { useState } from "react"
import { Menu, Close } from "./Icons"

const NavMenu = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div>
        {/* Desktop */}
        <ul className="hidden md:flex gap-6 ml-8 text-neutral-blue-300 text-lg">
           <li className="cursor-pointer hover:text-neutral-blue-400 border-b-4 border-transparent hover:border-b-4 hover:border-primary-orange-200 py-10">Collections</li> 
           <li className="cursor-pointer hover:text-neutral-blue-400 border-b-4 border-transparent hover:border-b-4 hover:border-primary-orange-200 py-10">Men</li> 
           <li className="cursor-pointer hover:text-neutral-blue-400 border-b-4 border-transparent hover:border-b-4 hover:border-primary-orange-200 py-10">Women</li> 
           <li className="cursor-pointer hover:text-neutral-blue-400 border-b-4 border-transparent hover:border-b-4 hover:border-primary-orange-200 py-10">About</li>
           <li className="cursor-pointer hover:text-neutral-blue-400 border-b-4 border-transparent hover:border-b-4 hover:border-primary-orange-200 py-10">Contact</li> 
        </ul>

        {/* Mobile Hamburger*/}
        <span role="button" onClick={() => setToggle(!toggle)} className="w-full flex md:hidden items-start">
            <Menu />
        </span>

        {toggle && 
            <div id="overlay" className="w-full z-20 h-screen flex justify-start md:hidden fixed top-0 left-0 bg-black bg-opacity-75">
                <div className="h-screen w-2/3 flex flex-col items-start gap-12 bg-neutral-blue-100 p-6">
                    <span role="button" onClick={() => setToggle(false)}>
                        <Close />
                    </span>

                    <ul className="flex flex-col gap-4">
                        <li className="font-bold text-neutral-blue-400 text-xl">Collections</li> 
                        <li className="font-bold text-neutral-blue-400 text-xl">Men</li> 
                        <li className="font-bold text-neutral-blue-400 text-xl">Women</li> 
                        <li className="font-bold text-neutral-blue-400 text-xl">About</li>
                        <li className="font-bold text-neutral-blue-400 text-xl">Contact</li> 
                    </ul>
                </div>
            </div>
        }
        
    </div>
  )
}

export default NavMenu