import React from 'react';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import './HomePage.css';

//Home page with user details after successful login.
function HomePage({ user }) {
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      {/* Uncomment the image line below if you want to include the curve image */}
      {/* <img src={curve} alt='Curve' className='curve' /> */}
      <p>Go to <SubscriptionsIcon /> and view or manage your subscriptions</p>
    </div>
  );
}

export default HomePage;
