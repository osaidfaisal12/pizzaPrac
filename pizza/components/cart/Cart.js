import React, { use, useContext, useEffect, useState } from "react";
import { StoreProvider } from "../../data-utils/Store";
import CartItem from "./CartItem";
import Link from "next/link";

const Cart = (props) => {
  const ctx = useContext(StoreProvider);

  return (
    <div className="fixed inline-block z-30 inset-0 bg-black/50 h-screen">
      <div className="fixed z-10 inset-0 bg-white px-4 py-4 md:w-[450px] w-[350px] ml-auto h-full">
        <div className="h-full flex flex-col">
          <div className="h-[10vh]">
            <div className="flex justify-between">
              <h2 className="text-black text-[1.5rem]">Your Cart</h2>
              <button
                className="text-black font-bold text-[1.5rem]"
                onClick={props.closeCart}
              >
                x
              </button>
            </div>
            <hr className="my-2 border-1 border-black" />
          </div>
          <div className=" flex flex-wrap  overflow-x-hidden">
            {ctx.cartitems.length > 0 ? (
              ctx.cartitems.map((current) => {
                return (
                  <CartItem
                    key={`${current.id}_${current.type}`}
                    id={current.id}
                    img={current.img}
                    title={current.title}
                    description={current.description}
                    amount={current.amount}
                    type={current.type}
                    count={current.count}
                  />
                );
              })
            ) : (
              <p>No items Found!</p>
            )}
          </div>
          {ctx.cartitems.length > 0 && (
            <Link
              href="/checkout"
              className="mt-auto w-full bg-[#03911f] text-white md:py-4 py-3 rounded-md text-center"
            >
              Proceed
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
