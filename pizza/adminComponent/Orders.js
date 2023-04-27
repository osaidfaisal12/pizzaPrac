import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import OrderDetailsOverlay from "./OrderDetailsOverlay";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pizza-b2e64-default-rtdb.firebaseio.com/orders.json"
      );

      const orderItems = [];
      for (const key in response.data) {
        orderItems.push({
          id: key,
          ...response.data[key],
        });
      }

      setOrders(orderItems);
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center md:gap-4 gap-2 flex-col my-10">
      {orders.map((order, index) => {
        return (
          <div
            key={order.id}
            className="bg-white md:px-2 px-1 flex justify-center items-center md:py-2 py-1 md:rounded-2xl rounded-xl"
          >
            <OrderDetailsOverlay order={order} index={index} tabIndex = '1'/>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
