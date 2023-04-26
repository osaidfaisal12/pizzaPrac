import React, { useContext } from "react";
import Form from "./Form";
import AmountTab from "./AmountTab";


const CheckoutOverlay = () => {

  return (
    <div className="lg:min-h-[600px] w-full lg:mb-[80px] mb-[50px] flex md:flex-row flex-col md:gap-5 gap-2 justify-center items-stretch">
      <div className="lg:p-10 p-6 rounded-2xl md:w-[60%] bg-gray-100">
        <Form />
      </div>
      <div className="flex-1 p-6 rounded-2xl md:w-[40%] bg-gray-100">
        <AmountTab/>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
