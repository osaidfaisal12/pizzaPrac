import React from "react";

const OrderDetails = ({ order, index }) => {
  return (
    <div className="absolute inset-0 z-10 w-screen h-screen bg-black/50 overflow-hidden flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-2xl h-[600px] ">
        <div className="bg-black text-white px-2 py-2 rounded-lg ">
          Order # {index + 1}
        </div>
        {order.date}
        {order.time}
        {order.Title}
        {order.Full_Name}
        {order.Delivery_Address}
        {order.Delivery_Instruction}
        {order.Email}
        {order.Nearest_Landmark}
        {order.Payment_Method}
        {order.Mobile_Number}
        {order.Alternate_Number}
        {order.items.map((item) => {
          return (
            <div>
              {item.title}
              {item.description}
              {item.amount}
              {item.count}
              {item.type}
            </div>
          );
        })}
</div>
      </div>
  );
};

export default OrderDetails;
