import React, { useState } from "react";
import OrderDetails from "./OrderDetails";

const OrderDetailsOverlay = ({ order, index }) => {
    const [modal, setModal] = useState(false);

  return (
    <div className="flex gap-8 justify-center items-center">
      <div className="bg-black text-white px-2 py-2 rounded-lg ">
        Order # {index + 1}
      </div>
      <div>
        {order.time} {order.date}
      </div>
      <button
        onClick={() => setModal(true)}
        className="bg-[#03911f] text-white px-2 py-2 rounded-lg ml-10"
      >
        Open Details &gt;
      </button>
      {modal && <OrderDetails order={order} index={index} />}
    </div>
  );
};

export default OrderDetailsOverlay;
