import React from 'react';
import BannerImg from '../../../Images/banner-product.png';
import './Banner.css'

const Banner = () => {
  return (
    <section className='banner py-4'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <span>New Arrival</span>
            <h2>Nike Airmax Shoes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sint sed odit quisquam commodi unde beatae distinctio architecto perspiciatis! Ipsum aspernatur ea dolorem natus, maiores sit numquam, quos inventore vitae a soluta laborum maxime cum illo fuga quo alias? Eaque est nostrum culpa. Repudiandae voluptatem modi repellat exercitationem eaque laboriosam!</p>
          </div>
          <div className="col-12 col-md-5">
            <img className='img-fluid' src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;