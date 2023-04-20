import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const OrderId = () => {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  let totalAmount = 0 ;
  const orderId = router.query.orderId;
  const tabIndex = router.query.tabIndex || 1;

  useEffect(() => {
    const fetchData = async () => {
      const apiURL =
        tabIndex === '1'
          ? "https://pizza-b2e64-default-rtdb.firebaseio.com/orders.json"
          : "https://pizza-b2e64-default-rtdb.firebaseio.com/orderHistory.json";
      const res = await axios.get(apiURL);
      console.log(res.data)
      const ordered = [];
      for (const key in res.data) {
        ordered.push({
          id: key,
          ...res.data[key],
        });
      }

      const orderItem = ordered.find((order) => order.id === orderId);
      
      setOrder(orderItem);
    };

    fetchData();
  }, [tabIndex]);

  if (!order) {
    return <div>Loading...</div>;
  }

  const orderCompleteHandler = async (status) => {
    try {
      const response = await axios.post(
        "https://pizza-b2e64-default-rtdb.firebaseio.com/orderHistory.json",
        { ...order, status: status }
      );
      const responsedel = await axios.delete(
        `https://pizza-b2e64-default-rtdb.firebaseio.com/orders/${order.id}.json`
      );
      console.log("Order deleted successfully!");
      router.back();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="flex justify-center  w-screen h-screen p-20">
      <div className="bg-[#023047] text-white p-10 basis-2/4 flex flex-col gap-4 rounded-l-3xl ">
        <h2 className="font-bold text-[1.5rem] ">Order Details</h2>
        <div className="flex gap-4">
          <p>{order.date}</p>
          <p className="font-bold">{order.time}</p>
        </div>
        <div className="flex justify-between gap-2 font-bold bg-[#ffb703] text-white p-2 rounded-md">
          <div className="flex gap-4">
            <p>Title</p>
          </div>
          <div className="flex gap-8">
            <p>No of count</p>
            <p>Amount</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col h-[60%] flex-nowrap  overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {order.items.map((item, index) => {
          const itemAmount = parseInt(item.amount)*parseInt(item.count);
          totalAmount = totalAmount + itemAmount;
return (
            <div
              key={item.id}
              className="flex flex-nowrap justify-between gap-2 p-3 text-white rounded-md"
            >
              <div className="flex gap-4">
                <h2 className="font-bold">Item # {index + 1}</h2>
                <p>{item.title}</p>
                <p>({item.type})</p>
              </div>
              <div className="flex gap-16">
                <p>x{item.count}</p>
                <p>{parseInt(item.amount)*parseInt(item.count)}$</p>
              </div>
            </div>
          );
        })}</div>
        <div className="flex flex-col justify-end  p-3 gap-4 ">
          <hr className="border-1 border-white" />
          <p className="font-bold flex justify-end ">Total Amount = {totalAmount}$</p>
        </div>
      </div>

      <div className="bg-[#8ecae6] text-white gap-4 flex flex-col justify-between  basis-1/4 rounded-r-3xl p-10">
        <div className="flex gap-4 flex-col">
          <h2 className="font-bold text-[1.5rem] text-[#41337A]">
            Customers Details
          </h2>
          <p className="font-bold -[#ffb703]">
            {order.Title} {order.Full_Name.toUpperCase()}
          </p>
          <p>Address : {order.Delivery_Address}</p>
          <p>Instruction : {order.Delivery_Instruction}</p>
          <p>Email : {order.Email}</p>
          <p>Nearest Landmark : {order.Nearest_Landmark}</p>
          <p>
            Payment Method :{" "}
            <span className="font-bold">
              {order.Payment_Method.toUpperCase()}
            </span>
          </p>
          <p>Mobile Number : 0{order.Mobile_Number}</p>
          <p>Alternate Number : 0{order.Alternate_Number}</p>
        </div>
        {tabIndex === "1" ?
          <div className="flex gap-2">
          <button
            onClick={() => orderCompleteHandler("Cancelled")}
            className="px-2 py-2 w-full bg-red-500"
          >
            Cancelled
          </button>
          <button
            onClick={() => orderCompleteHandler("Completed")}
            className="px-2 py-2 w-full bg-green-500"
          >
            Completed
          </button>
        </div> : null }
      </div>
    </div>
  );
};

export default OrderId;
