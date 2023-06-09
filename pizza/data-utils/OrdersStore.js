const { createContext, useState } = require("react");

export const OrdersStoreProvider = createContext({
  orders: [],
  ordered: false,
  setOrdered: () => {},
});

export function OrdersStore(props) {
  const [orders, setOrders] = useState([]);
  const [ordered, setOrdered] = useState(false)

  const value = {
    orders: orders,
    setOrders: setOrders,
    ordered: ordered,
    setOrdered: setOrdered,
  };
  return (
    <OrdersStoreProvider.Provider value={value}>
      {props.children}
    </OrdersStoreProvider.Provider>
  );
}
