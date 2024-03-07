import React, { useContext, useState } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowBack } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//components
import CartItem from "../components/CartItem";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//import cart context
import { CartContext } from "../contexts/CartContext";
import { IoMdPeople } from "react-icons/io";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } w-[16.5rem] bg-white fixed top-0 h-full shadow-2xl transition-all duration-300 z-20 px-4  md:shadow-none  md:z-0 md:flex md:flex-col md:rounded-2xl md:my-3 md:h-[97%] md:left-4 `}
    >
      <div className="flex items-center justify-center py-6 border-b gap-4">
        <div className=" ">
          <img src="/src/assets/nbLogo.png" className="w-12" />
        </div>
        <div className="uppercase text-sm font-semibold">Temp </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowBack className="text-2xl md:hidden" />
        </div>
      </div>
      <div className="flex flex-col items-center text-primary">
        <ul className="flex flex-col gap-8 mt-8">
          <li>
            <a>
              <div className="flex mr-16 cursor-pointer  ">
                <div className="shadow-lg rounded-lg  me-2   w-8 h-8 bg-slate-100 flex justify-center items-center ">
                  <IoMdPeople className="" />
                </div>

                <span className="mt-[3.5px] ml-[8px] ">Candidate</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex mr-16 cursor-pointer">
                <div className="shadow-lg rounded-lg  me-2   w-8 h-8 bg-slate-100 flex justify-center items-center ">
                  <FaHandshake className="" />
                </div>

                <span className="mt-[3.5px] ml-[8px]">Client</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex mr-16 cursor-pointer">
                <div className="shadow-lg rounded-lg  me-2   w-8 h-8 bg-slate-100 flex justify-center items-center ">
                  <BsBriefcaseFill className="" />
                </div>

                <span className="mt-[3.5px] ml-[8px]">Jobs </span>
              </div>
            </a>
          </li>
        </ul>
        {/* {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })} */}
      </div>
    </div>
  );
};

export default Sidebar;
