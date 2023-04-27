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
    <div className="flex md:flex-row flex-col justify-center md:w-screen md:h-screen lg:p-20 md:p-8">
      <div className="bg-[#023047] text-white lg:p-10 md:p-6 p-4 basis-2/4 flex flex-col gap-4 lg:rounded-l-3xl md:rounded-l-2xl ">
        <h2 className="font-bold md:text-[1.5rem] ">Order Details</h2>
        <div className="flex gap-4">
          <p>{order.date}</p>
          <p className="font-bold">{order.time}</p>
        </div>
        <div className="flex justify-between gap-2 lg:font-bold bg-[#ffb703] text-white p-2 rounded-md">
          <div className="flex gap-4">
            <p>Title</p>
          </div>
          <div className="flex md:gap-8 gap-5">
            <p>No of count</p>
            <p>Amount</p>
          </div>
        </div>
        <div className="flex lg:gap-4 md:gap-3 gap-8 text-[0.75rem] md:text-[1rem] flex-col md:h-[60%] flex-nowrap  overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {order.items.map((item, index) => {
          const itemAmount = parseInt(item.amount)*parseInt(item.count);
          totalAmount = totalAmount + itemAmount;
return (
            <div
              key={item.id}
              className="flex flex-nowrap justify-between gap-8 lg:p-3 md:p-2 text-white rounded-md"
            >
              <div className="flex lg:gap-4 md:gap-2 gap-1">
                <h2 className="md:font-bold">Item # {index + 1}</h2>
                <p>{item.title}</p>
                <p>({item.type})</p>
              </div>
              <div className="flex lg:gap-16 gap-14">
                <p>x{item.count}</p>
                <p>Rs.{parseInt(item.amount)*parseInt(item.count)}</p>
              </div>
            </div>
          );
        })}</div>
        <div className="flex flex-col justify-end  lg:p-3 md:p-2 lg:gap-4 gap-3 ">
          <hr className="border-1 border-white" />
          <p className="lg:font-bold flex justify-end ">Total Amount = {totalAmount}$</p>
        </div>
      </div>

      <div className="bg-slate-100 text-black gap-4 flex flex-col justify-between  basis-1/4 rounded-r-3xl p-10">
        <div className="flex lg:gap-4 gap-3 flex-col">
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
