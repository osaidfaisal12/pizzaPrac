const { createContext, useState, useEffect } = require("react");

export const StoreProvider = createContext({
  ordered: false,
  setOrdered: () => {},
});

export function Store(props) {
  const [cartItems, setCartItems] = useState([]); // items in the cart
  const [noOfItems, setNoOfItems] = useState(0);
  const [data, setdata] = useState([]); //list of all the items
  const [ordered, setOrdered] = useState(false)


  function setDataHandler(itemsList) {
    const newList = [...itemsList];
    setdata(newList);
  }

  function addToCartHandler(newItem) {
    const existingItemID = cartItems.find(
      (item) => item.id === newItem.id && item.type === newItem.type
    );
    console.log("existingItemID", existingItemID);

    if (existingItemID) {
      setCartItems((prevItem) =>
        prevItem.map((item) => {
          if (item.id === newItem.id && item.type === newItem.type) {
            console.log("item", item);
            return { ...item, count: item.count + newItem.count };
          } else {
            return item;
          }
        })
      );
    } else {
      setCartItems((prevItem) => [...prevItem, { ...newItem }]);
    }
  }

  function removeItemHandler(newItem) {
    setCartItems((prevItem) =>
      prevItem
        .map((item) => {
          if (
            item.id === newItem.id &&
            item.count > 1 &&
            item.type === newItem.type
          ) {
            return { ...item, count: item.count - newItem.count };
          } else if (
            item.id === newItem.id &&
            item.count === 1 &&
            item.type === newItem.type
          ) {
            return null;
          } else {
            return item;
          }
        })
        .filter((item) => item !== null)
    );
  }

  useEffect(() => {
    const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
    setNoOfItems(totalCount);
    console.log("cartItems", cartItems);
  }, [cartItems]);

  const value = {
    cartitems: cartItems,
    noOfItems: noOfItems,
    addToCartHandler: addToCartHandler,
    removeToCartHandler: removeItemHandler,
    data: data,
    setData: setDataHandler,
    ordered: ordered,
    setOrdered: setOrdered,
  };
  return (
    <StoreProvider.Provider value={value}>
      {props.children}
    </StoreProvider.Provider>
  );
}
