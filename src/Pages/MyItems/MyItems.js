import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import useProduct from '../../hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products] = useProduct();
  const myItems = products.filter(product => product.email === user.email);

  return (
    <section className='py-5'>
      <div className="container">
        <h2 className='text-center mb-5 section-title'>My Items</h2>
        <div className="row g-5">
          {
            myItems.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
          }
        </div>
      </div>
    </section>
  );
};

export default MyItems;