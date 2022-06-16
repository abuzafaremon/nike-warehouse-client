import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RedirectToMI.css';

const RedirectToMI = () => {
  const navigate = useNavigate();

  const redirectToMI = () => {
    navigate('/manageInventory')
  }
  return (
    <div className="mt-4 text-center RedirectToMI">
      <button onClick={redirectToMI} className="btn btn-link">Manage Inventory</button>
    </div>
  );
};

export default RedirectToMI;