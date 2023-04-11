import "@/styles/globals.css";
import { Store } from "../../data-utils/Store";
import { OrdersStore } from "../../data-utils/OrdersStore";

export default function App({ Component, pageProps }) {
  return (
    <Store>
      <OrdersStore>
        <Component {...pageProps} />
      </OrdersStore>
    </Store>
  );
}
