import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-[1.2rem] font-[600] text-white justify-center items-center h-[10vh] bg-[#03911f] w-[100%]'>
        <Link href='#' className='active:bg-white active:text-[#03911f] h-full flex items-center px-8' >Delicious Delight Pizza</Link>
        <Link href='#' className='active:bg-white active:text-[#03911f] h-full flex items-center px-8' >Mid Night Deals</Link>
        <Link href='#' className='active:bg-white active:text-[#03911f] h-full flex items-center px-8' >Deals</Link>
    </div>
  )
}

export default Navbar