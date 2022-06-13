import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <section id='banner'>
      <div className="overlay w-100">
        <div className="container">
          <div className="content p-5 d-flex align-items-center justify-content-center">
            <h1 className='text-white'>Welcome to Nike Warehouse</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;