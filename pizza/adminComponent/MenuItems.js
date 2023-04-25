import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MenuItemOverlay from './MenuItemOverlay';

const MenuItems = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(
            "https://pizza-b2e64-default-rtdb.firebaseio.com/pizza.json"
          );
    
          const orderItems = [];
          for (const key in response.data) {
            orderItems.push({
              id: key,
              ...response.data[key],
            });
          }
    
          setOrders(orderItems);
        };
        fetchData();
      }, []);
    

  return (
    <div className='flex flex-col items-center'>
      <button className='w-[30%] rounded-md border-2 py-2 bg-slate-200 mt-10 '>+</button>
    <div className='flex flex-wrap justify-center items-center md:gap-8 gap-4 my-10'>{orders.map((order)=>{
        return(
                <MenuItemOverlay key={order.id} id={order.id} medium={order.medium} large={order.large} img={order.img} title={order.title} description={order.description} small={order.small}/>
        )
    })}</div></div>
  )
}

export default MenuItems