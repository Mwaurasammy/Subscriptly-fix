import React from 'react'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function HomePage({user}) {
  return (
    <div>
      <h1>Welcome {user}!</h1>
      <p>Go to <SubscriptionsIcon /> and view or manage your subscriptions</p>
    </div>
  )
}

export default HomePage