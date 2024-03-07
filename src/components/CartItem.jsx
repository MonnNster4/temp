import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

const CartItem = ({ item }) => {
  //destructuring item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/*image*/}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/*title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/*remove icon*/}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex flex-1 max-w[100px] bg-blue-400 items-center h-full border text-primary font-medium">
            <div className="flex-1">
              <IoMdRemove />
            </div>
            <div className="h-full flex justify-center items-center px-2">
              {amount}
            </div>
            <div className=" h-full flex justify-center items-center cursor-pointer">
              <IoMdAdd />
            </div>
          </div>
          <div>
            <div>quantity</div>
            <div>item price</div>
            <div>final priceeee</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
