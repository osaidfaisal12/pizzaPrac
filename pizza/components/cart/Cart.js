import React, { use, useContext, useEffect, useState } from 'react'
import { StoreProvider } from '../../data-utils/Store'
import CartItem from './CartItem'

const Cart = (props) => {
    const ctx = useContext(StoreProvider)

    useEffect(()=>{
        console.log(ctx.withCount)
    },[ctx.withCount])
    
    function addItemHandler (id){
        const cartItem = ctx.withCount.filter(current => current.id === id)
        // setCartUpdate(cartItem)
        ctx.filteredItems(cartItem)
        // cartItemsCtx.filteredItems
    }



  return (
    <div className='fixed inline-block z-10 inset-0 bg-black/50 h-screen' >
        <div className='fixed z-10 inset-0 bg-white px-4 py-4 w-[450px] ml-auto h-full' >
            <div className='h-full flex flex-col'>
                <div className='hs-[10vh]'>
                <div className='flex justify-between' >
                    <h2 className='text-black text-[1.5rem]' >Your Cart</h2>
                    <button className='text-black font-bold text-[1.5rem]' onClick={props.closeCart} >x</button>
                </div>
                <hr className='my-2 border-1 border-black' />
                </div>
                <div className=' flex flex-wrap  overflow-x-hidden'>
                {ctx.withCount.map((current)=>{
                    return (<CartItem key={current.id} addItem={()=>addItemHandler(current.id)} img={current.img} title={current.title} description={current.description} amount={current.amount} count={current.count}/>)
                })}
                </div>
                <button className='mt-auto w-full bg-[#03911f] text-white py-4 rounded-md '>
                    Proceed
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart