import React, { useState } from "react";
import Link from "next/link";

const OrderDetailsOverlay = ({ order, index, tabIndex }) => {

  return (
    <div style={{background: '#023047'}} className="flex md:gap-8 gap-2 text-[0.875rem] md:text-[1.125rem] justify-center text-white items-center md:px-4 px-2 md:py-4 py-2 rounded-lg">
      <div className={` text-white px-2 py-2 rounded-md text-[0.75rem] md:text-[1.125rem] ${tabIndex === "1" ? "bg-black" : (order.status === "Completed" ? "bg-[#03911f]" : "bg-red-500" )}`} >
        {tabIndex === '1' ? <p>Order # {index + 1}</p>: <p>{order.status}</p>}
      </div>
      
      <div>
        {order.time} {order.date}
      </div>
      <Link
        className="bg-[#03911f] text-white px-2 py-2 rounded-md md:ml-10 "
        href={{pathname: `/admin/${order.id}`, query: {tabIndex, orderId: order.id}}}
      >
        Open Details
      </Link>
    </div>
  );
};

export default OrderDetailsOverlay;
