import React, { useState } from "react";
import Link from "next/link";

const OrderDetailsOverlay = ({ order, index, tabIndex }) => {

  return (
    <div style={{background: '#023047'}} className="flex gap-8 justify-center text-white items-center px-4 py-4 rounded-lg">
      <div className={` text-white px-2 py-2 rounded-md ${tabIndex === "1" ? "bg-black" : (order.status === "Completed" ? "bg-[#03911f]" : "bg-red-500" )}`} >
        {tabIndex === '1' ? <p>Order # {index + 1}</p>: <p>{order.status}</p>}
      </div>
      <div>
        {order.time} {order.date}
      </div>
      <Link
        className="bg-[#03911f] text-white px-2 py-2 rounded-md ml-10"
        href={{pathname: `/admin/${order.id}`, query: {tabIndex, orderId: order.id}}}
      >
        Open Details &gt;
      </Link>
    </div>
  );
};

export default OrderDetailsOverlay;
