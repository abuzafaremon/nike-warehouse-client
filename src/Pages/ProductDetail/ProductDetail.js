import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css';
import { Form, Button } from 'react-bootstrap';
import RedirectToMI from '../../Components/RedirectToMI/RedirectToMI';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const ProductDetail = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const [product, setProduct] = useProductDetail(productId);
  const { _id, name, price, img, description, quantity, supplier_name } = product;

  const handleDelivered = id => {
    const quantity = product.quantity;
    if (quantity > 0) {
      product.quantity = quantity - 1;
    }
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(product)
      })

  }
  const handleSubmitRestock = e => {
    e.preventDefault();
    const id = product._id;
    const previousQuantity = product.quantity;
    const quantity = e.target.quantity.value;
    product.quantity = parseInt(previousQuantity) + parseInt(quantity);
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(product)
        e.target.reset();
      })
  }

  return (
    <section className='product-detail py-5'>
      <div className="container">
        <h2 className='text-center mb-5 section-title'>Detail Information</h2>
        <div className="row align-items-center border shadow g-0">
          <div className="col-12 col-md-6">
            <div className='p-4'>
              <img className='img-fluid' src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 border-left">
            <div className="info p-4">
              <h2>{name}</h2>
              <p className='fw-bold m-0'>Product Id: {productId}</p>
              {
                product?.email !== user?.email && <p className='text-danger'>This is not your product</p>
              }
              <span className='d-block text-justify mb-3'>{description}</span>
              <div className="d-lg-flex align-items-center justify-content-between">
                <div>
                  <p className='fw-bold'>Supplier: {supplier_name}</p>
                  <p className='fw-bold'>Price: {price}</p>
                  {
                    quantity === 0 ?
                      <p className='fw-bold'>Out of Stock</p>
                      :
                      <p className='fw-bold'>Quantity: {quantity}</p>
                  }
                  <button onClick={() => handleDelivered(_id)} className="btn btn-outline-dark" disabled={product.email !== user?.email && true}>Delivered</button>
                </div>
                <hr />
                <div className='form-div'>
                  <Form onSubmit={handleSubmitRestock}>
                    <h3 className='fw-bold'>Restock The Item</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control name="quantity" min="1" type="number" placeholder="Add Quantity" required />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit" disabled={product.email !== user?.email && true}>
                      Restock
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RedirectToMI />
      </div>
    </section>
  );
};

export default ProductDetail;