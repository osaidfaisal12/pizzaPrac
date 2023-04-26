import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { StoreProvider } from '../../data-utils/Store'

const DetailedItems = (props) => {
    const ctx = useContext(StoreProvider)

    const [count, setCount] = useState(1)
    const [selectedValue, setSelectedValue] = useState(props.small.amount)
    const [selectedLabel, setSelectedLabel] = useState(props.small.size)

    function handleRadioClick(e) {
        setSelectedValue(e.target.value)
        setSelectedLabel(e.target.labels[0].innerText);
    }

    function addCountHandler() {
        setCount(count + 1)
    }

    function subCountHandler() {
        if (count > 1) {
            setCount(count - 1)
        }

    }


    function addItemHandler(id) {
        const cartItem = ctx.data.filter(current => current.id === id)[0]
        cartItem.count = count
        cartItem.amount = selectedValue
        cartItem.type = selectedLabel
        ctx.addToCartHandler(cartItem)
        setCount(0)
        props.onClose()
    }

    return (
        <div className='fixed inset-0 w-screen h-screen bg-black/50 overflow-hidden flex justify-center items-center z-30'>
            <div className='lg:w-[800px] md:w-[700px] w-[350px] flex flex-col md:flex-row lg:h-[500px] md:h-[400px] h-[650px] bg-white overflow-auto rounded-2xl'>
                <div className='md:w-[50%] h-[100%] flex justify-center items-center'>
                    <div className='overflow-hidden relative object-contain lg:w-[350px] w-[350px] lg:h-[350px] h-[350px]'>
                        <Image fill src={props.img} alt={props.title} />
                    </div>

                </div>
                <div className='flex flex-col md:w-[50%] h-full lg:px-4 md:px-2 lg:py-8 md:py-4 p-4' >
                    <div className='flex justify-between items-center'>
                        <h2 className='lg:text-[2rem] text-[1.5rem] font-bold h-full'>{props.title}</h2>
                        <button onClick={props.onClose} className='h-full font-bold'>X</button>
                    </div>

                    <p className='lg:text-[1.375rem] text-[1.25rem] mb-2 font-[700]' >${props.small.amount}</p>
                    <p className='mb-2'>{props.description}</p>
                    <div className='flex flex-col lg:gap-4 gap-2 text-[1.2rem] lg:mt-6 mt-4 mb-8'>
                        <div className='flex justify-between'> 
                            <div>
                                <input type='radio' name='radio' id='small' value={props.small.amount} onChange={handleRadioClick} defaultChecked={selectedValue === props.small.amount} className='mr-2' />
                                <label htmlFor='small' >{props.small.size}</label>
                            </div>
                            <p>{props.small.amount}$</p>

                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <div>
                                <input type='radio' name='radio' id='medium' value={props.medium.amount} onChange={handleRadioClick} defaultChecked={selectedValue === props.medium.amount} className='mr-2' />
                                <label htmlFor='medium' >{props.medium.size}</label>
                            </div>
                            <p>{props.medium.amount}$</p>

                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <div>
                                <input type='radio' name='radio' id='large' value={props.large.amount} onChange={handleRadioClick} defaultChecked={selectedValue === props.large.amount} className='mr-2' />
                                <label htmlFor='large' >{props.large.size}</label>
                            </div>
                            <p>{props.large.amount}$</p>

                        </div>
                        <hr />
                    </div>
                    <div className='flex gap-4 mt-auto'>
                        <div className='w-[30%] p-1 flex gap-4 text-[1.25rem] border-2 rounded-lg justify-center items-center border-gray-400'>
                            <button className='w-full h-full' onClick={subCountHandler}>-</button>
                            <p>{count}</p>
                            <button className='w-full h-full' onClick={addCountHandler} >+</button>
                        </div>
                        <button className='text-center w-[70%] bg-[#03911f] text-white rounded-lg' onClick={() => addItemHandler(props.id)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedItems