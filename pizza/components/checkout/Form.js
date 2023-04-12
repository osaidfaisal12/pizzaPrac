import { useFormik } from "formik";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { signUpSchema } from "../../schemas";
import axios from "axios";
import { StoreProvider } from "../../data-utils/Store";

const Form = () => {
  const [activePayment, setActivePayment] = useState("cash");

  const ctx = useContext(StoreProvider);

  function btnHandlers(method) {
    setActivePayment(method);
    handleChange({
      target: {
        name: "Payment_Method",
        value: method,
      },
    });
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        Title: "Mr.",
        Full_Name: "",
        Mobile_Number: "",
        Alternate_Number: "",
        Delivery_Address: "",
        Delivery_Instruction: "",
        Nearest_Landmark: "",
        Email: "",
        Payment_Method: "cash",
      },
      validationSchema: signUpSchema,
      onSubmit: async(values) => {
        // const date = new Date();
        // const orderId = `date:${date.getMonth()}/${date.getDate()}/${date.getFullYear()}_time:${date.getHours()}:${date.getMinutes()}`;

        await axios.post(`https://pizza-b2e64-default-rtdb.firebaseio.com//orders.json`, {
            ...values,
          })
          .then((response) => {
            ctx.setOrdered(true);
            console.log("form submitted");
          })
          .catch((error) => {
            console.error(error);
          });

      },
    });

  return (
    <form id="my-form" onSubmit={handleSubmit}>
      <div>
        <h2>
          This is a <span className="font-bold">Deliver Order</span>
        </h2>
        <p>Just a last step, please enter your details:</p>
      </div>
      {/* Title and FullName */}
      <div className="mt-[24px] flex justify-start gap-5 items-center w-full">
        <div className="flex flex-col justify-start">
          <label htmlFor="Title">Title</label>
          <select
            name="Title"
            id="Title"
            value={values.Title}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-3 py-4 drop-shadow-md mt-1 rounded-md"
          >
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Full_Name">Full Name</label>
          <input
            type="text"
            name="Full_Name"
            id="Full_Name"
            value={values.Full_Name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Full Name"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Full_Name && touched.Full_Name ? (
            <p className="text-red-500">{errors.Full_Name}</p>
          ) : null}
        </div>
      </div>

      {/* Number*/}
      <div className="mt-[24px] flex justify-start gap-5 items-center w-full">
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Mobile_Number">Mobile Number</label>
          <input
            type="text"
            name="Mobile_Number"
            id="Mobile_Number"
            value={values.Mobile_Number}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="03xx-xxxxxxx"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Mobile_Number && touched.Mobile_Number ? (
            <p className="text-red-500">{errors.Mobile_Number}</p>
          ) : null}
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Alternate_Number">Alternate Number</label>
          <input
            type="text"
            name="Alternate_Number"
            id="Alternate_Number"
            value={values.Alternate_Number}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="03xx-xxxxxxx"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Alternate_Number && touched.Alternate_Number ? (
            <p className="text-red-500">{errors.Alternate_Number}</p>
          ) : null}
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
            value={values.Delivery_Address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Complete Delivery Address"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Delivery_Address && touched.Delivery_Address ? (
            <p className="text-red-500">{errors.Delivery_Address}</p>
          ) : null}
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Delivery_Instruction">Delivery Instruction</label>
          <input
            type="text"
            name="Delivery_Instruction"
            id="Delivery_Instruction"
            value={values.Delivery_Instruction}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Any Instruction or Note to Rider"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Delivery_Instruction && touched.Delivery_Instruction ? (
            <p className="text-red-500">{errors.Delivery_Instruction}</p>
          ) : null}
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
            value={values.Nearest_Landmark}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Nearest Landmark"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Nearest_Landmark && touched.Nearest_Landmark ? (
            <p className="text-red-500">{errors.Nearest_Landmark}</p>
          ) : null}
        </div>
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter email address"
            className="mt-1 px-3 py-4 rounded-md drop-shadow-md"
          />
          {errors.Email && touched.Email ? (
            <p className="text-red-500">{errors.Email}</p>
          ) : null}
        </div>
      </div>

      {/* Buttons*/}
      <div className="mt-[40px] flex justify-start gap-5 items-center w-full">
        <button
          className={`flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg w-[150px] h-[80px] ${
            activePayment === "cash" ? "border-[#03911f] bg-gray-200" : null
          }`}
          name="Payment_Method"
          type="button"
          value="cash"
          onClick={() => btnHandlers("cash")}
        >
          <Image src="/money.png" width={40} height={40} alt="cashIcon" />
          <p>Cash</p>
        </button>

        <button
          className={`flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg w-[150px] h-[80px] ${
            activePayment === "creditCard"
              ? "border-[#03911f] bg-gray-200"
              : null
          }`}
          name="Payment_Method"
          value="creditCard"
          type="button"
          onClick={() => btnHandlers("creditCard")}
        >
          <Image
            src="/credit-cards.png"
            width={40}
            height={40}
            alt="cardIcon"
          />
          <p>Online Payment</p>
        </button>
      </div>
    </form>
  );
};

export default Form;
