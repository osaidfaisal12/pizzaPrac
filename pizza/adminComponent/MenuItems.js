import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItemOverlay from "./MenuItemOverlay";
import MenuItemDescription from "./MenuItemDescription";
import { v4 as uuidv4 } from "uuid";

const MenuItems = () => {
  const [orders, setOrders] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const uniqueId = uuidv4();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pizza-b2e64-default-rtdb.firebaseio.com/pizza.json"
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
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setOpenDetails(true)}
        className="md:w-[30%] w-[70%] font-bold text-[1.5rem] rounded-md border-2 py-1 bg-slate-200 md:mt-10 mt-6 "
      >
        +
      </button>
      <div className="flex flex-wrap justify-center items-center md:gap-8 gap-4 md:my-10 my-4">
        {orders.map((order) => {
          return (
            <MenuItemOverlay
              key={order.id}
              id={order.id}
              medium={order.medium}
              large={order.large}
              img={order.img}
              title={order.title}
              description={order.description}
              small={order.small}
            />
          );
        })}
      </div>
      {openDetails && (
        <MenuItemDescription
          onClose={() => setOpenDetails(false)}
          key={uniqueId}
          id={uniqueId}
          img="/pizza1.jpg"
          title=""
          description=""
          small=""
          medium=""
          large=""
        />
      )}
    </div>
  );
};

export default MenuItems;
