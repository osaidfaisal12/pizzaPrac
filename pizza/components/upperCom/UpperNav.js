import Image from "next/image";
import React from "react";

const UpperNav = (props) => {


  return (
    <div className="h-[8vh] sticky top-0 z-20 w-full bg-white flex justify-between lg:px-[150px] md:px-[50px] px-[30px] items-center">
      <div className=" flex lg:w-[60px] w-[40px] items-center">
        <Image
          className="object-cover"
          src="/headerImg/—Pngtree—cute pizza slice_6277584.png"
          width={300}
          height={300}
          alt="pizza"
        />
        <p className="font-bold lg:text-[1.8rem] text-[1.5rem] text-[#03911f]">Pizza</p>
      </div>
      <div className="flex justify-center items-center" onClick={props.showCart}> 
        <button className="font-bold">
          <Image src="/carts.png" alt="cart" width={30} height={30} />
        </button>
        <p className="bg-[#03911f] text-[0.75rem] lg:text-[1rem] lg:w-5 w-4 lg:h-5 h-4 text-center flex items-center justify-center rounded-full text-white absolute top-2 ml-8">
          {props.noOfItems}
        </p>
      </div>

    </div>
  );
};

export default UpperNav;
