const { createContext, useState } = require("react");

export const StoreProvider = createContext({
  items: [],
  checkCart: [],
  noOfItems: 0,
  forCart:[],
  itemsdata: [],
  setData : ()=>{},
  addItems: () => {},
  filteredItems: () => {},
  // removeItems: ()=>{}
});

export function Store(props) {
  const [items, setItems] = useState([]);
  const [inCartCount, setInCart] = useState([]);
  const [noOfItems, setNoOfItems] = useState(0);
   const [withCount, setWithCount] = useState([]);
    // const withCount = []
    const[data,setdata] = useState([])


  function setDataHandler(itemsList){
    const newList = [...itemsList]
    setdata(newList)
  }

  function addItemsHandler(newItem) {
    setItems((prevItem) => [...prevItem, newItem]);
    setNoOfItems((prev) => prev + 1);
  }

  function filteredItemsHandler(newitems) {
    const items = [...newitems];
    // const withCount = [];

    // if (newItem){
    //     setWithCount({ ...currentItem, count: 1 })
    //     return
    // }

    // setWithCount(prev => (
    //     prev[existingItemIndex].count++
    // ))
    
    for (const ids in items) {
      const currentItem = items[ids];
      const existingItemIndex = withCount.findIndex(
        (item) => item.id === currentItem.id
      );

      if (existingItemIndex === -1) {
        // withCount.push({ ...currentItem, count: 1 });
        setWithCount({ ...currentItem, count: 1 })
      } else {
        // withCount[existingItemIndex].count++;
        setWithCount(prev => (
            prev[existingItemIndex].count++
        ))
      }}

      console.log("count")
      console.log(withCount)
      console.log("count")
     
    return withCount;
  }

  const filteredItems = filteredItemsHandler(items);

  const value = {
    items: items,
    withCount: withCount,
    noOfItems: noOfItems,
    filteredItems: filteredItemsHandler,
    addItems: addItemsHandler,
 checkCart: filteredItems,
    itemsdata : data,
    setData: setDataHandler
  };
  return (
    <StoreProvider.Provider value={value}>
      {props.children}
    </StoreProvider.Provider>
  );
}
