import Image from "next/image";
import React from "react";

const UpperNav = (props) => {


  return (
    <div className="h-[8vh] sticky top-0 z-20 w-full bg-white flex justify-between px-[150px] items-center">
      <div className=" flex w-[60px] items-center">
        <Image
          className="object-cover"
          src="/headerImg/—Pngtree—cute pizza slice_6277584.png"
          width={300}
          height={300}
          alt="pizza"
        />
        <p className="font-bold text-[1.8rem] text-[#03911f]">Pizza</p>
      </div>
      <div className="flex justify-center items-center" onClick={props.showCart}> 
        <button className="font-bold">
          <Image src="/carts.png" alt="cart" width={30} height={30} />
        </button>
        <p className="bg-[#03911f] w-5 h-5 text-center flex items-center justify-center rounded-full text-white absolute top-2 ml-8">
          {props.noOfItems}
        </p>
      </div>

    </div>
  );
};

export default UpperNav;
