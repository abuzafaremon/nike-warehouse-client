import React from 'react';
import Banner from './Banner/Banner';
import NewArrival from './NewArrival/NewArrival';
import NewsLetter from './NewsLetter/NewsLetter';


const Home = () => {
  return (
    <main>
      <Banner />
      <NewArrival />
      <NewsLetter />
    </main>
  );
};

export default Home;