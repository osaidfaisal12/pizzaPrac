import axios from "axios";
import React, { useEffect, useState } from "react";
import Orders from "../../adminComponent/Orders";
import Menu from "../../adminComponent/Menu";

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
    <div className="flex w-screen h-screen items-center justify-center">
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
        <div className="w-[80%] flex flex-col min-h-[600px] border-2 bg-slate-200 p-8 rounded-2xl">
          <div className="text-[1.125rem] mx-auto flex items-center justify-center bg-slate-300 rounded-full">
            <button
              className={`${
                activeTab === "orders" ? "bg-slate-400 text-white" : null
              } border-8 border-slate-300 px-6 py-2 rounded-full h-full`}
              onClick={() => activeTabHandler("orders")}
            >
              Orders
            </button>
            <button
              className={`${
                activeTab === "menus" ? "bg-slate-400 text-white" : null
              } border-8 border-slate-300 px-7 py-2 rounded-full h-full`}
              onClick={() => activeTabHandler("menus")}
            >
              Menu
            </button>
          </div>
          <div>{activeTab === "orders" ? <Orders /> : <Menu />}</div>
        </div>
      )}
    </div>
  );
};

export default admin;
