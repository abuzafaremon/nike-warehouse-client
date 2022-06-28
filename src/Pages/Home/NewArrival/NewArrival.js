import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import './NewArrival.css';

const NewArrival = () => {
  const [products] = useProduct();
  const lastProduct = products?.slice(-1)[0];
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/product/${id}`)
  }
  return (
    <section className='NewArrival py-5'>
      <div className="container">
        <h2 className='section-title mb-5'>New Arrival</h2>
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h1>{lastProduct?.name}</h1>
            <p className='text-justify'>{lastProduct?.description}</p>
            <button onClick={() => navigateToProductDetail(lastProduct?._id)} className='btn btn-outline-dark btn-lg fw-bold'>Details</button>
          </div>
          <div className="imgBox col-12 mx-auto col-md-6 order-1 order-md-2">
            <img className='img-fluid' src={lastProduct?.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;