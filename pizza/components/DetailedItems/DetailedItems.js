import Image from 'next/image'
import React, { useState } from 'react'

const DetailedItems = (props) => {


  return (
    <div className='fixed inset-0 z-10 w-screen h-screen bg-black/50 overflow-hidden flex justify-center items-center'>
    <div className='w-[800px] flex h-[500px] bg-white rounded-2xl'>
        <div className='w-[50%] h-[100%] flex justify-center items-center'>
            <div className='overflow-hidden relative object-contain w-[350px] h-[350px]'>
            <Image fill src={props.img} alt={props.title} />
            </div>
            
        </div>
        <div className='flex flex-col w-[50%] h-full px-4 py-8' >
                <div className='flex justify-between items-center'>
                <h2 className='text-[2rem] font-bold mb-2'>{props.title}</h2>
                <button onClick={props.onClose} className='font-bold'>X</button>
                    </div>
                    
                <p className='text-[1.375rem] mb-2 font-[700]' >${props.amount}</p>
                <p className='mb-2'>{props.description}</p>
                <div className='flex flex-col gap-4 text-[1.2rem] mt-6'>
                    <div className='flex justify-between'>
                        <div>
                        <input type='radio' name='radio' id='small' value='small' className='mr-2'/>
                        <label htmlFor='small' >Small</label>
                        </div>
                        <p>12$</p>
                        
                    </div>
                    <hr/>
                    <div className='flex justify-between'>
                        <div>
                        <input type='radio' name='radio' id='medium' value='medium' className='mr-2'/>
                        <label htmlFor='medium' >medium</label>
                        </div>
                        <p>16$</p>
                        
                    </div>
                    <hr/>
                    <div className='flex justify-between'>
                        <div>
                        <input type='radio' name='radio' id='large' value='large' className='mr-2'/>
                        <label htmlFor='large' >large</label>
                        </div>
                        <p>20$</p>
                        
                    </div>
                    <hr/>
                </div>
                <div className='flex gap-4 mt-auto'>
                    <div className='w-[30%] p-1 flex gap-4 text-[1.25rem] border-2 rounded-lg justify-center items-center border-gray-400'>
                        <button onClick={props.subCount}>-</button>
                        <p>{props.count}</p>
                        <button onClick={props.addCount} >+</button>
                    </div>
                    <button className='text-center w-[70%] bg-[#03911f] text-white rounded-lg'  onClick={props.addItem}>Add To Cart</button>
                </div>
            </div>
    </div>
  </div>
  )
}

export default DetailedItems