import Image from "next/image";
import React from "react";
import CheckoutOverlay from "../../components/checkout/CheckoutOverlay";

const checkout = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="flex items-center justify-center h-[200px] w-full">
        <Image
          className="object-cover"
          src="/headerImg/—Pngtree—cute pizza slice_6277584.png"
          width={100}
          height={100}
          alt="pizza"
        />
      </div>
      <div className="w-full min-h-[600px] px-[100px]">
        <CheckoutOverlay/>
      </div>
    </div>
  );
};

export default checkout;
