import { useContext, useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import AllPizza from "../../components/pizza/AllPizza";
import Header from "../../components/upperCom/Header";
import Navbar from "../../components/upperCom/navbar/Navbar";
import UpperNav from "../../components/upperCom/UpperNav";
import { getData } from "../../data-utils/Getdata";
import { StoreProvider } from "../../data-utils/Store";
import Footer from "../../components/upperCom/navbar/Footer";

export default function Home(props) {
  const [cart, setCart] = useState(false);
  const cartCtx = useContext(StoreProvider);

  useEffect(() => {
    cartCtx.setData(props.items);
  }, [props.items]);

  function showCartHandler() {
    setCart(true);
  }

  function closeCartHandler() {
    setCart(false);
  }

  return (
    <div className="min-h-screen">
      <UpperNav showCart={showCartHandler} noOfItems={cartCtx.noOfItems} />
      <div>
        
        <Header />
        <Navbar />
        {cart && <Cart closeCart={closeCartHandler} />}
      </div>
      <AllPizza pizzaData={props.items} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await getData();
  return {
    props: { items: data },
    revalidate: 10,
  };
}
