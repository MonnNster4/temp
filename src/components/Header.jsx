import React, {useContext} from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//icons
import { HiMenuAlt1 } from "react-icons/hi";


const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
    <header className='border p-4  md:ml-[296px] md:hidden '>
      {/* <div>Header</div> */}
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <HiMenuAlt1 className='text-2xl md:hidden'/>
      </div>
    </header>
  );
};

export default Header;
