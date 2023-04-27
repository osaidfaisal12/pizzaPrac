import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { menuSchema } from "../schemas";

const MenuItemDescription = (props) => {

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      title: props.title,
      small_amount: props.small.amount,
      medium_amount: props.medium.amount,
      large_amount: props.large.amount,
      description: props.description,
    },
    onSubmit: async (values) => {
      console.log(props.id);
      console.log("displaying");
      await axios
        .put(`https://pizza-b2e64-default-rtdb.firebaseio.com/pizza/${props.id}.json`, {
          img: props.img,
          type: "small",
          amount: values.small_amount,
          description: values.description,
          title: values.title,
          small: { amount: values.small_amount, size: "small" },
          medium: { amount: values.medium_amount, size: "medium" },
          large: { amount: values.large_amount, size: "large" },
        })
        .then((response) => {
          console.log("form submitted");
        })
        .catch((error) => {
          console.error("not submit");
        });
    },
  });

  const deleteHandler = async (onClose) => {
    try {
      const response = await axios.delete(`https://pizza-b2e64-default-rtdb.firebaseio.com/pizza/${props.id}.json`);
      onClose()
      console.log(response);
    } catch (error) {
      console.error("error");
    }
  }

  return (
    <form
      id="form"
      className="fixed inset-0 w-screen h-screen bg-black/50 overflow-hidden flex justify-center items-center z-30"
      onSubmit={handleSubmit}
    >
      <div className="lg:w-[800px] md:w-[700px] w-[350px] flex flex-col md:flex-row lg:h-[500px] md:h-[400px] h-[650px] bg-white overflow-auto rounded-2xl">
        <div className="md:w-[50%] h-[100%] flex justify-center items-center">
          <div className="overflow-hidden relative object-contain lg:w-[350px] w-[350px] lg:h-[350px] h-[350px]">
            <Image fill src={props.img} alt={props.title} />
          </div>
        </div>
        <div className="flex flex-col md:w-[50%] h-full md:px-4 px-4 py-8">
          <div className="flex justify-between md:items-center mb-2">
            <div className="flex flex-col md:flex-row md:items-center justify-center">
              <label htmlFor={values.title} className="md:mr-2">
                Title
              </label>
              <input
                className={`bg-slate-200 p-1 border-2 ${
                  errors.title && touched.title ? "border-red-500" : null
                }`}
                id="title"
                value={values.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <button onClick={props.onClose} className="flex font-bold">
              X
            </button>
          </div>

          <div className="flex md:items-center md:flex-row flex-col">
            <label htmlFor="amount" className="md:mr-2">
              Amount
            </label>
            <input
            type="number"
              id="amount"
              name="small_amount"
              className={`bg-slate-200 p-1 border-2 ${
                errors.title && touched.title ? "border-red-500" : null
              }`}
              value={values.small_amount}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="description" className="mr-2">
              Description
            </label>
            <textarea
              rows="3"
              id="description"
              name="description"
              className="my-2 bg-slate-200 p-1"
              value={values.description}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <div className="flex justify-between">
              <label htmlFor="small">Small</label>
              <input
                className="bg-slate-200 p-1 border-2"
                value={values.small_amount}
                onChange={handleChange}
                name="small_amount"
                id="small"
              />
            </div>
            <hr />
            <div className="flex justify-between">
              <label htmlFor="medium">Medium</label>
              <input
                className="bg-slate-200 p-1 border-2"
                value={values.medium_amount}
                onChange={handleChange}
                name="medium_amount"
                id="medium"
              />
            </div>
            <hr />
            <div className="flex justify-between">
              <label htmlFor="large">Large</label>
              <input
                className="bg-slate-200 p-1 border-2"
                value={values.large_amount}
                name="large_amount"
                onChange={handleChange}
                id="large"
              />
            </div>
            <hr />
          </div>

          <div className="flex gap-4 mt-auto">
            <button
              className="text-center bg-red-500 text-white rounded-lg py-3 w-full"
              type="button"
              onClick={()=>deleteHandler(props.onClose)}
            >
              Delete
            </button>
            <button
              className="text-center bg-[#03911f] text-white rounded-lg py-3 w-full"
              type="submit"
              id="form"
            >
              Save
            </button>
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default MenuItemDescription;
