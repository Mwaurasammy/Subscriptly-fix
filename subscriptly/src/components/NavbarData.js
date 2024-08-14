import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

export const NavbarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "landing"
    },
    {
        title: "Subscriptions",
        icon: <SubscriptionsIcon />,
        link: "/home"
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        link: "/notifications"
    }
]
