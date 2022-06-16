import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);

  };
  return (
    <section className="py-5">
      <div className="container">
        <h2 className='section-title'>Add Item</h2>
        <div className='w-100 mx-auto add-item'>
          <form className='d-flex flex-column gap-2 shadow p-5' onSubmit={handleSubmit(onSubmit)}>
            <input className='ps-2' placeholder='Product Name' {...register("name", { required: true })} />
            <textarea className='ps-2' placeholder='Description' {...register("description", { required: true })} />
            <input className='ps-2' placeholder='Product Image URL' type="text" min='1' {...register("img", { required: true })} />
            <div className="d-flex flex-column flex-sm-row gap-2 align-items-center justify-content-between">
              <input className='ps-2' placeholder='Supplier Name' type="text" {...register("supplier_name", { required: true })} />
              <input className='ps-2' placeholder='Price' type="number" {...register("price", { required: true })} />
              <input className='ps-2' placeholder='Quantity' type="number" min='1' {...register("quantity", { required: true })} />
            </div>
            <input className='btn btn-dark' type="submit" value="Add Product" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItem;