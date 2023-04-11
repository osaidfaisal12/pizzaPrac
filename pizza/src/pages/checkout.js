import Image from "next/image";
import React, { useContext } from "react";
import CheckoutOverlay from "../../components/checkout/CheckoutOverlay";
import { OrdersStoreProvider } from "../../data-utils/OrdersStore";

const checkout = () => {

  const ctx = useContext(OrdersStoreProvider);

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
      {
        ctx.ordered === false ? (
          <div className="w-full min-h-[600px] px-[100px]">
        <CheckoutOverlay/>
      </div>
        ) : <p>Order</p>
      }
      
    </div>
  );
};

export default checkout;
