import React, {  useState } from "react";
import Orders from "../../../adminComponent/Orders";
import History from "../../../adminComponent/History";
import MenuItems from "../../../adminComponent/MenuItems";

const admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("orders");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const activeTabHandler = (tab) => {
    setActiveTab(tab);
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    if (username === "" || password === "")
      return alert("Please fill in all fields");
    if (username !== "admin" || password !== "admin")
      return alert("Invalid credentials");
    setIsSubmitting(true);
  };

  return (
    <div className="flex w-screen min-h-screen items-center justify-center">
      {isSubmitting ? (
        <form
          onSubmit={submitHandler}
          className="flex rounded-lg flex-col items-center justify-center px-14 py-8 bg-slate-200"
        >
          <h2 className="text-2xl font-bold">Admin Login</h2>
          <div className="flex flex-col mt-10">
            <label className="font-bold" htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={onChangeUsername}
              className="border-2 border-gray-400 p-2 rounded-md mt-2"
              type="text"
              placeholder="Username"
              id="username"
            />
            <label className="font-bold mt-4" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={onChangePassword}
              className="border-2 border-gray-400 p-2 rounded-md mt-2"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <button className="bg-blue-500 text-white px-10 py-2 rounded-md mt-8 ">
            Login
          </button>
        </form>
      ) : (
        <div className="flex flex-col w-screen min-h-screen">
          <div className="md:text-[1.125rem] md:px-2 px-1 md:py-2 py-1 mx-auto mt-10 flex items-center text-white justify-center bg-[#023047]">
            <button
              className={`${
                activeTab === "orders" ? " text-white bg-[#ffb703]" : null
              }  md:px-6 px-3 md:py-2 py-2 h-full`}
              onClick={() => activeTabHandler("orders")}
            >
              Orders
            </button>
            <button
              className={`${
                activeTab === "Order_History" ? "bg-[#ffb703] text-white" : null
              }   md:px-6 px-3 md:py-2 py-2 h-full`}
              onClick={() => activeTabHandler("Order_History")}
            >
              Order History
            </button>
            <button
              className={`${
                activeTab === "menus" ? "bg-[#ffb703] text-white" : null
              }   md:px-6 px-3 md:py-2 py-2 h-full`}
              onClick={() => activeTabHandler("menus")}
            >
              Menu
            </button>
          </div>
          <div>{activeTab === "orders" ? <Orders /> : activeTab === "menus" ? <MenuItems />: <History />}</div>
        </div>
      )}
    </div>
  );
};

export default admin;
