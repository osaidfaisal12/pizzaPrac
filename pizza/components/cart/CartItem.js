import Image from "next/image";
import React from "react";

const CartItem = (props) => {
  const {img, title, amount, description, count,addItem} = props
  
  return (
    <div className="flex gap-3 my-4">
      <div className="w-[80px] h-[80px] object-cover relative">
        <Image src={img} alt={title} fill />
      </div>
      <div className="flex flex-col w-[300px]">
        <div className="flex justify-between">
          <p className="text-[1.2rem] font-bold">{title}</p>
          <p className="font-bold">${parseInt(amount)*parseInt(count)}</p>
        </div>
        <p>{description}</p>
        <div className="ml-auto text-center">
          <div className="flex  mt-auto gap-3">
            <button onClick={addItem}>+</button>
            <p>{count}</p>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
