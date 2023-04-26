import Image from "next/image";
import React, { useContext } from "react";
import CheckoutOverlay from "../../components/checkout/CheckoutOverlay";
import { StoreProvider } from "../../data-utils/Store";
import Link from "next/link";

const checkout = () => {
  const ctx = useContext(StoreProvider);

  return (
    <div className="min-h-screen w-full ">
      {ctx.ordered === false ? (
        <div>
          <div className="flex items-center justify-center lg:h-[200px] h-[150px] w-full">
            <Image
              className="object-cover"
              src="/headerImg/—Pngtree—cute pizza slice_6277584.png"
              width={100}
              height={100}
              alt="pizza"
            />
          </div>

          <div className="w-full md:min-h-[600px] md:px-[100px] px-[8px]">
            <CheckoutOverlay />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col h-screen">
          <Image src="/correct.png" alt="ordered" height={150} width={150} />
          <h2 className="font-bold text-[1.5rem] mt-6">Order Placed</h2>
          <p>Thank You for ordering</p>
          <Link href="/" className="mt-4 text-blue-700">
            Order more items
          </Link>
        </div>
      )}
    </div>
  );
};

export default checkout;
