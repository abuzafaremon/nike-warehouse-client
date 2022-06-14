import React from 'react';
import Inventory from '../../Components/Inventory/Inventory';
import Banner from './Banner/Banner';
import NewArrival from './NewArrival/NewArrival';
import NewsLetter from './NewsLetter/NewsLetter';


const Home = () => {
  return (
    <main>
      <Banner />
      <Inventory />
      <NewArrival />
      <NewsLetter />
    </main>
  );
};

export default Home;