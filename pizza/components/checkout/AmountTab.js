import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { StoreProvider } from "../../data-utils/Store";

const AmountTab = ({ handleOnSubmit }) => {
  const [isamount, setIsAmount] = useState(0);

  const ctx = useContext(StoreProvider);

  const calculateTotalAmount = () => {
    const newTotalAmount = ctx.cartitems.reduce((current, next) => {
      return current + parseInt(next.amount) * parseInt(next.count);
    }, 0);
    setIsAmount(newTotalAmount);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [ctx.cartitems]);

  const removeItemHandler = (id, type) => {
    const cartItem = ctx.data.filter((current) => current.id === id)[0];
    cartItem.count = 1;
    cartItem.type = type;
    ctx.removeToCartHandler(cartItem);
  };

  return (
    <div>
      {/** mapping products **/}
      <div className="my-4">
        <div>
          {ctx.cartitems.length > 0 ? (
            ctx.cartitems.map((current) => {
              return (
                <div key={`${current.id}_${current.type}`}>
                  <div className="flex justify-between lg:flex-row flex-col">
                    <p className="font-bold">
                      {current.count} x {current.title} ({current.type})
                    </p>
                    <p>Rs.{parseInt(current.amount) * parseInt(current.count)}</p>
                  </div>
                  <button
                    onClick={() => removeItemHandler(current.id, current.type)}
                    className="text-red-500 my-3"
                  >
                    remove
                  </button>
                </div>
              );
            })
          ) : (
            <p>No items Found!</p>
          )}
        </div>
        <hr className="border-1 border-gray-400" />
      </div>

      {/**Amount Calc**/}
      <div>
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p>Rs.{isamount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Tax 13%</p>
          <p>Rs.{(isamount * 0.13).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Delivery</p>
          <p>Rs.50.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Grand Total</p>
          <p>Rs.{(isamount * 0.13 + 50 + isamount).toFixed(2)}</p>
        </div>
      </div>

      {/**Checkout Button**/}
      <div className="mt-5 flex flex-col">
        {ctx.cartitems.length > 0 ? (
          <button
            form="my-form"
            type="submit"
            // onClick={handleOnSubmit}
            className="mt-auto font-bold w-full bg-[#03911f] text-white py-3 rounded-md "
          >
            Place Order
          </button>
        ) : null}

        <Link href="/" className="text-center text-blue-700 mt-2">
          Continue to add more items
        </Link>
      </div>
    </div>
  );
};

export default AmountTab;
