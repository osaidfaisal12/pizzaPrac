import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";
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
    <div className="flex items-center justify-center gap-4 flex-col my-10">
      {orders.map((order, index) => {
        return (
          <div
            key={order.id}
            className="bg-white px-2 flex justify-center items-center py-2 rounded-2xl"
          >
            <OrderDetailsOverlay order={order} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
