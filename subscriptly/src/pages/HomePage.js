import React from 'react';
import curve from '../assets/curve.jpg'; 
import './HomePage.css';

function HomePage({ user }) {
  return (
    <div>
      <h1>Welcome, {user}!</h1>,
      {/* <img src={curve} alt='Curve' className='curve' /> */}
     </div>
  );
}

export default HomePage;
