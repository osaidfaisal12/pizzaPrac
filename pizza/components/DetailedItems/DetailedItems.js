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
        <div className='fixed inset-0 z-10 w-screen h-screen bg-black/50 overflow-hidden flex justify-center items-center'>
            <div className='w-[800px] flex h-[500px] bg-white rounded-2xl'>
                <div className='w-[50%] h-[100%] flex justify-center items-center'>
                    <div className='overflow-hidden relative object-contain w-[350px] h-[350px]'>
                        <Image width={350} height={350} src={props.img} alt={props.title} />
                    </div>

                </div>
                <div className='flex flex-col w-[50%] h-full px-4 py-8' >
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[2rem] font-bold mb-2'>{props.title}</h2>
                        <button onClick={props.onClose} className='font-bold'>X</button>
                    </div>

                    <p className='text-[1.375rem] mb-2 font-[700]' >${props.small.amount}</p>
                    <p className='mb-2'>{props.description}</p>
                    <div className='flex flex-col gap-4 text-[1.2rem] mt-6'>
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
                            <button onClick={subCountHandler}>-</button>
                            <p>{count}</p>
                            <button onClick={addCountHandler} >+</button>
                        </div>
                        <button className='text-center w-[70%] bg-[#03911f] text-white rounded-lg' onClick={() => addItemHandler(props.id)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedItems