import Image from 'next/image'
import React, { useState } from 'react'
import DetailedItems from '../DetailedItems/DetailedItems'

const ItemOverlay = (props) => {

    const [openDetails, setOpenDetails] = useState(false)
    

  return (
    <div className='shadow-lg shadow-gray-400 rounded-md cursor-pointer'>
    <div className='flex justify-center gap-4  p-2 ' onClick={()=>setOpenDetails(true)}>
        <div className='w-[200px] h-[200px] relative  rounded-md overflow-hidden'>
            <Image src={props.img} alt={props.title} fill />
        </div>
        <div className='flex flex-col justify-between py-4'>
            <div>
                <h3 className='text-[1.2rem] font-[700]' >{props.title}</h3>
                <p className='pr-2 w-[300px]'>{props.description}</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-[700]' >${props.amount}</p>
                <button className='bg-[#03911f] px-2 w-[35px] ml-auto rounded-lg text-[1.5rem] font-bold text-white'>+</button>
            </div>
        </div>
    </div>
     {openDetails && <DetailedItems onClose={()=>setOpenDetails(false)} addItem={props.addItem} count={props.count} addCount={props.addCount} subCount={props.subCount} key={props.id} img={props.img} title={props.title} description={props.description} amount={props.amount}/>}
    </div>
    
  )
}

export default ItemOverlay