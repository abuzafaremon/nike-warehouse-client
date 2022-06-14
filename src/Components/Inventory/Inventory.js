import React from 'react';
import useProduct from '../../Pages/hooks/useProduct';
import SingleProduct from '../../Pages/SingleProduct/SingleProduct';
import './Inventory.css';

const Inventory = () => {
  const [products] = useProduct();
  const firstSixProducts = products.slice(0, 6);
  return (
    <section className='inventory py-5 bg-dark'>
      <div className="in-b1"></div>
      <div className="container">
        <h2 className="text-center section-title mb-5">Inventory</h2>
        <div className="row g-5">
          {
            firstSixProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
          }
        </div>
      </div>
    </section>
  );
};

export default Inventory;