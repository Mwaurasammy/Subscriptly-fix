import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const NavbarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Subscriptions",
        icon: <SubscriptionsIcon />,
        link: "/subscriptions"
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        link: "/notifications"
    }
]
