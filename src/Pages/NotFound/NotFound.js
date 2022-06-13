import React from 'react';
import _404 from '../../Images/404.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img className='img-fluid' src={_404} alt="" />
    </div>
  );
};

export default NotFound;