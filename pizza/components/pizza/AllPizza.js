import React, { useContext, useState } from "react";
import { StoreProvider } from "../../data-utils/Store";
import ItemOverlay from "../items/ItemOverlay";
import MainTitle from "../MainTitle";

const AllPizza = (props) => {
  const { pizzaData } = props;

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <MainTitle distitle="Delicious Delight Pizza" />
      <div className="flex flex-wrap justify-center items-center md:gap-8 gap-4">
        {pizzaData.map((pizza) => {
          return <ItemOverlay key={pizza.id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default AllPizza;
