import Image from 'next/image';
import React, { useState } from 'react'
import MenuItemDescription from './MenuItemDescription';

const MenuItemOverlay = (props) => {
    const [openDetails, setOpenDetails] = useState(false);
    const { img, title, description, small, medium, large, id } = props;

  return (
    <div className="shadow-lg shadow-gray-400 rounded-md cursor-pointer flex flex-col">
      <div
        className="flex justify-center lg:gap-4 md:gap-2 p-2 gap-1 "
        onClick={() => setOpenDetails(true)}
      >
        <div className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[125px] h-[125px] relative  rounded-md overflow-hidden">
          <Image src={img} alt={title} fill />
        </div>
        <div className="flex flex-col justify-between lg:py-4 ">
          <div>
            <h3 className="lg:text-[1.2rem] md:font-[700] font-[600]">{title}</h3>
            <p className="lg:pr-2 lg:w-[300px] md:w-[250px] w-[200px] lg:text-[1rem] text-[0.875rem]">{(description).toLowerCase().substring(0, 70) + ' ...'}</p>
          </div>
          <div className="flex flex-col">
            <p className="lg:font-[700] font-[600]">${small.amount}</p>
            <button className="bg-[#03911f] md:px-3 md:py-1 invisible md:visible ml-auto rounded-lg font-bold text-white">
              Edit Menu
            </button>
          </div>
        </div>
      </div>
      {openDetails && (
        <MenuItemDescription
          onClose={() => setOpenDetails(false)}
          key={id}
          id={id}
          img={img}
          title={title}
          description={description}
          small={small}
          medium={medium}
          large={large}
        />
      )}
    </div>
  )
}

export default MenuItemOverlay