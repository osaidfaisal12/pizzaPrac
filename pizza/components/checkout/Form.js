import React from "react";

const Form = () => {
  return (
    <div>
      <div>
        <h2>
          This is a <span className="font-bold">Deliver Order</span>
        </h2>
        <p>Just a last step, please enter your details:</p>
      </div>
      {/* Title and FullName */}
      <div className="mt-[24px] flex justify-start gap-5 items-center w-full">
        <div className="flex flex-col justify-start">
          <label htmlFor="title">Title</label>
          <select
            name="title"
            id="title"
            form="title"
            className="px-3 py-4 drop-shadow-md mt-1 rounded-md"
          >
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            placeholder="Enter Your Full Name"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
      </div>

      {/* Number*/}
      <div className="mt-[24px] flex justify-start gap-5 items-center w-full">
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Mobile_Number">Mobile Number</label>
          <input
            type="number"
            name="Mobile_Number"
            id="Mobile_Number"
            placeholder="03xx-xxxxxxx"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Alternate_Number">Alternate Number</label>
          <input
            type="number"
            name="Alternate_Number"
            id="Alternate_Number"
            placeholder="03xx-xxxxxxx"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
      </div>

      {/* Address and instructions*/}
      <div className="mt-[24px] flex justify-start flex-col gap-5 items-center w-full">
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Delivery_Address">Delivery Address</label>
          <input
            type="text"
            name="Delivery_Address"
            id="Delivery_Address"
            placeholder="Enter Your Complete Delivery Address"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Delivery_Instruction">Delivery Instruction</label>
          <input
            type="text"
            name="Delivery_Instruction"
            id="Delivery_Instruction"
            placeholder="Enter Any Instruction or Note to Rider"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
      </div>

      {/* Landark and email*/}
      <div className="mt-[24px] flex justify-start gap-5 items-center w-full">
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Nearest_Landmark">Nearest Landmark</label>
          <input
            type="text"
            name="Nearest_Landmark"
            id="Nearest_Landmark"
            placeholder="Enter Nearest Landmark"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Enter email address"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
        </div>
      </div>

      {/* Buttons*/}
      <div className="mt-[24px] flex justify-start gap-5 items-center w-full">
        <div className="flex flex-col justify-start w-full">
          <button className="bg-[#03911f] text-white px-3 py-4 rounded-md drop-shadow-md">
            Proceed
          </button>
        </div>
        <div className="flex flex-col justify-start w-full">
          <button className="bg-[#03911f] text-white px-3 py-4 rounded-md drop-shadow-md">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
