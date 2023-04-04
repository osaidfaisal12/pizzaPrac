import React, { useContext, useState } from 'react'
import { StoreProvider } from '../../data-utils/Store'
import ItemOverlay from '../items/ItemOverlay'
import MainTitle from '../MainTitle'

const AllPizza = (props) => {
  const {pizzaData} = props
  const ctx = useContext(StoreProvider)

    const [count, setCount] = useState(0)

    function addCountHandler () {
        setCount(count + 1)
    }

    function subCountHandler () {
        if(count >= 1){
        setCount(count - 1)}
        
    }


  function addItemHandler(id){
    const cartItem = ctx.itemsdata.filter(current => current.id === id)
    //const cartItem =pizzaData.filter(current => current.id === id)
    
      let lastCart = [...cartItem]
      for (let i=0; i<count-1;i++ ){
        lastCart= [...lastCart,...cartItem]
      }
      for (let item of lastCart) {
        setCount(0)
        ctx.addItems(item)
      }
      
    
  }

  return (
    <div className='flex flex-col items-center justify-center'>
        <MainTitle distitle='Delicious Delight Pizza' />
        <div className='flex flex-wrap justify-center items-center gap-8'>
          {pizzaData.map((pizza) => {
            return(
              <ItemOverlay key={pizza.id} img={pizza.img} title={pizza.title} description={pizza.description} amount={pizza.amount} addItem={()=>addItemHandler(pizza.id)} count={count} addCount={addCountHandler} subCount={subCountHandler} />
            )
          })}
        
        </div>

        
    </div>
  )
}

export default AllPizza