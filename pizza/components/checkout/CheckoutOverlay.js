import React from "react";
import Form from "./Form";

const CheckoutOverlay = () => {
  return (
    <div className="min-h-[600px] w-full flex gap-5 justify-center items-center">
      <div className="min-h-[600px] p-10 rounded-2xl w-[60%] bg-gray-100">
        <Form/>
      </div>
      <div className="min-h-[600px] rounded-2xl w-[40%] bg-gray-100">

      </div>
    </div>
  );
};

export default CheckoutOverlay;
