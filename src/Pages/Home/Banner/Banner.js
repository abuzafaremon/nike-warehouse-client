import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <section id='banner'>
      <div className="overlay w-100">
        <div className="container">
          <div className="content d-flex flex-column align-items-center justify-content-center">
            <h1 className='text-light'>Welcome to Nike Warehouse</h1>
            <h2 className='text-light'>
              Shoes are foot jewelry</h2>
            <a href='#inventory' className='btn btn-outline-light'>Inventory &darr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;