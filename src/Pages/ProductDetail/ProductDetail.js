import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css';
import { Form, Button } from 'react-bootstrap';
import RedirectToMI from '../../Components/RedirectToMI/RedirectToMI';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  const { name, price, img, description, quantity, supplier_name } = product;

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
              <p className='fw-bold'>Product Id: {productId}</p>
              <span className='d-block text-justify mb-3'>{description}</span>
              <div className="d-lg-flex align-items-center justify-content-between">
                <div>
                  <p className='fw-bold'>Supplier: {supplier_name}</p>
                  <p className='fw-bold'>Price: {price}</p>
                  <p className='fw-bold'>Quantity: {quantity}</p>
                  <button className="btn btn-outline-dark">Delivered</button>
                </div>
                <hr />
                <div className='form-div'>
                  <Form>
                    <h3 className='fw-bold'>Restock The Item</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control min="1" type="number" placeholder="Add Quantity" />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
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