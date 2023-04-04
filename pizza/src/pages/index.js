import { useContext, useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import AllPizza from "../../components/pizza/AllPizza";
import Header from "../../components/upperCom/Header";
import Navbar from "../../components/upperCom/navbar/Navbar";
import UpperNav from "../../components/upperCom/UpperNav";
import { getData } from "../../data-utils/Getdata";
import { StoreProvider } from "../../data-utils/Store";

export default function Home(props) {
  const [cart, setCart] = useState(false)
  const cartCtx = useContext(StoreProvider);

  useEffect(()=>{
    cartCtx.setData(props.items)
  },[props.items])

  function showCartHandler(){
    setCart(true)
  }

  function closeCartHandler(){
    setCart(false)
  }

  

  return (
    <div className="pb-10">
    <div className="overflow-hidden">
      <UpperNav showCart={showCartHandler} noOfItems={cartCtx.noOfItems}/>
      <Header />
      <Navbar/>
      {
        cart && <Cart closeCart={closeCartHandler} />
      }
      </div>
      <AllPizza pizzaData = {props.items} />
    </div>
  )
}

export async function getStaticProps(context) {

  const data = await getData()

  return {
    props: {items:data},
  }
}
