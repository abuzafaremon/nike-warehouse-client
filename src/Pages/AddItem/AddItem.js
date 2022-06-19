import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(product => {
        if (product.insertedId) {
          toast('Product Added Successfully')
        }
      })
    reset();
  };
  return (
    <section className="py-5">
      <div className="container">
        <h2 className='section-title'>Add Item</h2>
        <div className='w-100 mx-auto add-item'>
          <form className='d-flex flex-column gap-2 shadow p-5' onSubmit={handleSubmit(onSubmit)}>
            <input className='ps-2 d-none' value={user?.email} readOnly {...register("email")} />
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