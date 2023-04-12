import React, { useContext } from "react";
import Form from "./Form";
import AmountTab from "./AmountTab";


const CheckoutOverlay = () => {

  return (
    <div className="min-h-[600px] w-full mb-[80px] flex gap-5 justify-center items-stretch">
      <div className="p-10 rounded-2xl w-[60%] bg-gray-100">
        <Form />
      </div>
      <div className="flex-1 p-10 rounded-2xl w-[40%] bg-gray-100">
        <AmountTab/>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
