import React from 'react';
import useProduct from '../../hooks/useProduct';
import SingleProduct from '../../Pages/SingleProduct/SingleProduct';
import RedirectToMI from '../RedirectToMI/RedirectToMI';
import './Inventory.css';

const Inventory = () => {
  const [products] = useProduct();
  const lastSixProducts = products.slice(-7, -1);

  return (
    <section id='inventory' className='inventory py-5 bg-dark'>
      <div className="in-b1"></div>
      <div className="container">
        <h2 className="text-center section-title mb-5">Inventory</h2>
        <div className="row g-5">
          {
            lastSixProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
          }
        </div>
        <RedirectToMI />
      </div>
    </section>
  );
};

export default Inventory;