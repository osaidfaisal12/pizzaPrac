const { createContext, useState, useEffect } = require("react");

export const StoreProvider = createContext({
  items: [],
  checkCart: [],
  noOfItems: 0,
  forCart: [],
  itemsdata: [],
  setData: () => { },
  addItems: () => { },
  filteredItems: () => { },
  // removeItems: ()=>{}
});

export function Store(props) {
  const [cartItems, setCartItems] = useState([]); // items in the cart
  const [noOfItems, setNoOfItems] = useState(0);
  const [data, setdata] = useState([]) //list of all the items


  function setDataHandler(itemsList) {
    const newList = [...itemsList]
    setdata(newList)
  }

  function addItemsHandler(newItem) {
    setCartItems((prevItem) => [...prevItem, newItem]);
    setNoOfItems((prev) => prev + 1);
  }

  function addToCartHandler(newItem) {
    const existingItem = cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      setCartItems((prevItem) =>
        prevItem.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, count: item.count + newItem.count }
          } else {
            return item
          }
        }
        )
      );
    } else {
      setCartItems((prevItem) => [...prevItem, { ...newItem }]);
    }
  }

  useEffect(() => {
    const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0)
    setNoOfItems(totalCount)
  }, [cartItems])

  // const filteredItems = filteredItemsHandler(items);

  const value = {
    cartitems: cartItems,
    noOfItems: noOfItems,
    addToCartHandler: addToCartHandler,
    addItems: addItemsHandler,
    data: data,
    setData: setDataHandler
  };
  return (
    <StoreProvider.Provider value={value}>
      {props.children}
    </StoreProvider.Provider>
  );
}
