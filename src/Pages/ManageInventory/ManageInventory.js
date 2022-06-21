import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useProduct from '../../hooks/useProduct';
import { CgDanger } from 'react-icons/cg';
import './ManageInventory.css';
import { MdDeleteForever } from 'react-icons/md';
import { GoDiffAdded } from 'react-icons/go';

const ManageInventory = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();
  const deleteProduct = id => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
        })
    }
  }
  const goToAddNewItem = () => {
    navigate('/addItem');
  }
  return (
    <section className="py-5 manage-inventory">
      <div className='container'>
        <h2 className='text-center mb-5 section-title'>Manage Inventory</h2>
        <div className="row g-5">
          {
            products.map(product => <div key={product._id} className='col-12 col-sm-6 col-md-4'>
              <div className='single-product shadow p-4 text-center'>
                <div className="imgBox">
                  <img className='img-fluid mb-3' src={product.img} alt="" />
                  <h2>{product.name}</h2>
                </div>
                <div className="info">
                  <span className='d-block text-justify'>{product.description.slice(0, 160)}</span>
                  <p className='fw-bold'>Price: ${product.price}</p>
                  {
                    product.quantity === 0 ?
                      <p className='fw-bold'>Out of Stock</p>
                      :
                      <p className='fw-bold'>Quantity: {product.quantity}</p>
                  }
                  <p className='fw-bold'>Supplier: {product.supplier_name}</p>
                  {
                    product?.email === user?.email ? <button onClick={() => deleteProduct(product._id)} className='btn btn-dark w-100 d-flex align-items-center justify-content-center gap-1 fw-bold'>Delete <MdDeleteForever className='text-danger' style={{ 'width': '20px', 'height': '20px' }} /></button> :
                      <button className='btn btn-dark w-100 d-flex align-items-center justify-content-center gap-1' disabled>Other's Product <CgDanger className='text-danger mt-0' style={{ 'width': '20px', 'height': '20px' }} /></button>
                  }
                </div>
              </div>
            </div>)
          }
        </div>
        <button onClick={goToAddNewItem} className="btn btn-dark add-new-item d-flex align-items-center gap-1">Add New Item <GoDiffAdded /></button>
      </div>
    </section>
  );
};

export default ManageInventory;