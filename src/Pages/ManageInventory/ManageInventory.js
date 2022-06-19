import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import './ManageInventory.css';

const ManageInventory = () => {
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
                  <p className='fw-bold'>Quantity: {product.quantity}</p>
                  <p className='fw-bold'>Supplier: {product.supplier_name}</p>
                  <button onClick={() => deleteProduct(product._id)} className='btn btn-dark w-100'>Delete</button>
                </div>
              </div>
            </div>)
          }
        </div>
        <button onClick={goToAddNewItem} className="btn btn-dark add-new-item">Add New Item</button>
      </div>
    </section>
  );
};

export default ManageInventory;