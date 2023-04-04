import Image from "next/image";
import React, { useContext } from "react";
import { StoreProvider } from "../../data-utils/Store";

const CartItem = (props) => {
  const { img, title, amount, description, count, id } = props

  const ctx = useContext(StoreProvider)

  const updateItemHandler = (id) => {
    const cartItem = ctx.data.filter(current => current.id === id)[0]
    cartItem.count = 1
    ctx.addToCartHandler(cartItem)
  };

  return (
    <div className="flex gap-3 my-4">
      <div className="w-[80px] h-[80px] object-cover relative">
        <Image src={img} alt={title} fill />
      </div>
      <div className="flex flex-col w-[300px]">
        <div className="flex justify-between">
          <p className="text-[1.2rem] font-bold">{title}</p>
          <p className="font-bold">${parseInt(amount) * parseInt(count)}</p>
        </div>
        <p>{description}</p>
        <div className="ml-auto text-center">
          <div className="flex  mt-auto gap-3">
            <button onClick={() => updateItemHandler(id)}>+</button>
            <p>{count}</p>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
