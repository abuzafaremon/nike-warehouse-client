import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
  const { name, price, img, description, quantity, supplire_name } = product;
  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <div className='single-product shadow p-4 text-center'>
        <div className="imgBox">
          <img className='img-fluid' src={img} alt="" />
          <h2>{name}</h2>
        </div>
        <div className="info">
          <span className='d-block text-justify'>{description.slice(0, 160)}</span>
          <p className='fw-bold'>Supplier: {supplire_name}</p>
          <p className='fw-bold'>Price: {price}</p>
          <p className='fw-bold'>Quantity: {quantity}</p>
          <button className='btn btn-dark w-100'>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;