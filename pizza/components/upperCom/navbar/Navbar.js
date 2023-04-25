import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const [active , setActive] = React.useState(true)
  return (
    <div className='flex lg:text-[1.2rem] font-[600] text-white justify-center items-center h-[10vh] bg-[#03911f] w-[100%]'>
        <Link href='#' className={`active:bg-white active:text-[#03911f] h-full flex items-center md:px-8 px-2 ${active ? 'bg-white text-[#03911f]':null}`} >Delicious Delight Pizza</Link>
        <Link href='#' className='active:bg-white active:text-[#03911f] h-full flex items-center  md:px-8 px-2' >Deals</Link>
    </div>
  )
}

export default Navbar