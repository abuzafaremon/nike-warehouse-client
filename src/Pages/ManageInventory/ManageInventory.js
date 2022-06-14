import React from 'react';
import useProduct from '../hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ManageInventory.css'

const ManageInventory = () => {
  const [products, setProducts] = useProduct();
  console.log(products);
  return (
    <section className="py-5">
      <div className='container'>
        <h2 className='text-center mb-5 section-title'>Manage Inventory</h2>
        <div className="row g-5">
          {
            products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
          }
        </div>
      </div>
    </section>
  );
};

export default ManageInventory;