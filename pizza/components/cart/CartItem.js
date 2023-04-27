import Image from "next/image";
import React, { useContext } from "react";
import { StoreProvider } from "../../data-utils/Store";

const CartItem = (props) => {
  const { img, title, amount, description, count, id, type } = props

  const ctx = useContext(StoreProvider)

  const addItemHandler = (id,type) => {
    const cartItem = ctx.data.filter(current => (current.id === id) )[0]
    cartItem.count = 1
    cartItem.type = type
    ctx.addToCartHandler(cartItem)
  };

  const removeItemHandler = (id,type) => {
    const cartItem = ctx.data.filter(current => (current.id === id) )[0]
    cartItem.count = 1
    cartItem.type = type
    ctx.removeToCartHandler(cartItem)
  };

  return (
    <div className="flex md:gap-3 gap-2 md:my-4 my-3">
      <div className="w-[80px] h-[80px] object-cover relative">
        <Image src={img} alt={title} fill />
      </div>
      <div className="flex flex-col md:w-[300px] w-[225px]">
        <div className="flex justify-between">
          <p className="md:text-[1.2rem] font-bold">{title}<span className="text-[0.8rem] mx-[6px] font-[400]">({type})</span></p>
          <p className="font-bold">Rs.{parseInt(amount) * parseInt(count)}</p>
        </div>
        <p>{(description).toLowerCase().slice(0,40) + " ..."}</p>
        <div className="ml-auto text-center">
          <div className="flex  mt-auto gap-3">
            <button onClick={() => addItemHandler(id,type)}>+</button>
            <p>{count}</p>
            <button  onClick={() => removeItemHandler(id,type)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
