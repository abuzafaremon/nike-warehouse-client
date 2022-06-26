import React from 'react';
import NewArrivalImg from '../../../Images/New-Arrival.png';
import './NewArrival.css'

const NewArrival = () => {
  return (
    <section className='NewArrival py-5'>
      <div className="container">
        <h2 className='section-title'>New Arrival</h2>
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1>Nike Airmax Shoes</h1>
            <p className='text-justify'>Lace up and add your touch to the sneaker revolution. Produced at the cross-section between art, music and culture, the Air Max 90 is now yours to customise. Choose between classic leather or add a little summertime flair with canvas. Give it a makeover with your fave colours. Then add a personalised message and let the shoe that helped define the '90s speak for you.</p>
          </div>
          <div className="imgBox col-10 mx-auto col-md-5 order-1 order-md-2">
            <img className='img-fluid' src={NewArrivalImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;