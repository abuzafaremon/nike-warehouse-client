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
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sint sed odit quisquam commodi unde beatae distinctio architecto perspiciatis! Ipsum aspernatur ea dolorem natus, maiores sit numquam, quos inventore vitae a soluta laborum maxime cum illo fuga quo alias? Eaque est nostrum culpa. Repudiandae voluptatem modi repellat exercitationem eaque laboriosam!</p>
          </div>
          <div className="col-12 col-md-5 order-1 order-md-2">
            <img className='img-fluid' src={NewArrivalImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;