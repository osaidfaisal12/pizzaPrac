import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pizza-b2e64-default-rtdb.firebaseio.com/pizza.json"
      );

      const menu = [];
      for (const key in response.data) {
        menu.push({
          id: key,
          ...response.data[key],
        });
      }
      setMenuItems(menu);
    };
    fetchData();
  }, []);


  return (
    <div>
      {
        menuItems.map((item) => {
          return (
            <div className='bg-white '>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              <h3>{item.amount}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Menu