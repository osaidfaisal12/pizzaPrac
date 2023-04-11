import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import AmountTab from "./AmountTab";
import { OrdersStoreProvider } from "../../data-utils/OrdersStore";
import axios from "axios";

const CheckoutOverlay = () => {
  const [latestOrder, setLatestOrder] = useState(null);

  const ctx = useContext(OrdersStoreProvider);

  useEffect(() => {
    console.log(ctx.orders[0])
    setLatestOrder(ctx.orders[0]);
  }, [ctx.orders]);

  async function submitHandler (){
    axios
          .post(`https://pizza-b2e64-default-rtdb.firebaseio.com//orders.json`, {
            ...latestOrder,
          })
          .then((response) => {
            // ctx.setOrdered(true);
            console.log("form submitted");
          })
          .catch((error) => {
            console.error(error);
          });
  }

  return (
    <div className="min-h-[600px] w-full mb-[80px] flex gap-5 justify-center items-stretch">
      <div className="p-10 rounded-2xl w-[60%] bg-gray-100">
        <Form />
      </div>
      <div className="flex-1 p-10 rounded-2xl w-[40%] bg-gray-100">
        <AmountTab handleOnSubmit={submitHandler}/>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
