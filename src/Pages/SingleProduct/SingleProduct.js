import React from 'react';
import './SingleProduct.css';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  const { _id, name, price, img, description, quantity, supplier_name } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/product/${id}`);
  }
  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <div className='single-product shadow p-4 text-center'>
        <div className="imgBox">
          <img className='img-fluid mb-3' src={img} alt="" />
          <h2>{name}</h2>
        </div>
        <div className="info">
          <span className='d-block text-justify'>{description.slice(0, 160)}</span>
          <p className='fw-bold'>Price: {price}</p>
          {
            quantity === 0 ?
              <p className='fw-bold'>Out of Stock</p>
              :
              <p className='fw-bold'>Quantity: {quantity}</p>
          }
          <p className='fw-bold'>Supplier: {supplier_name}</p>
          <button onClick={() => navigateToProductDetail(_id)} className='btn btn-dark w-100'>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;