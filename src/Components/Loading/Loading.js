import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className='w-100 d-flex align-items-center justify-content-center' style={{ 'height': '80vh' }}> <h1 className='mr-3'>Loading</h1>
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Loading;