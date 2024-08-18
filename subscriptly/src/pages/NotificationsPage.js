import React, {useState, useEffect} from 'react'
import "./Notifications.css";
import {differenceInDays, addMonths, addWeeks} from 'date-fns'
import '../components/Footer.css';
import './NotificationPage.css';

const NotificationsPage = ({user}) => {
    const [notifications, setNotifications] = useState([])

    //Fetch user data and individual's user subscriptions
    useEffect(() => {
        const fetchNotifications = () => {
            if (user) {
                fetch(`https://subscriptly-server.onrender.com/users?name=${user}`)
                .then(res => res.json())
                .then(users => {
                    if(users.length > 0) {
                        const userData = users[0]
                        const expiringSubscriptions = userData.subscriptions.filter(subscription => {
                            const daysLeft = calculateDaysLeft(subscription.date_of_payment, subscription.billing_cycle)
                            return daysLeft <= 7
                        })
                        setNotifications(expiringSubscriptions)
                    }
                })
                .catch(error => console.error('Error fetching subscriptions:', error))
            }
        }
        fetchNotifications()
    }, [user])
    //Calculate days left for a subscription to expire (less than 7 days) and display them in the notifications page.
    function calculateDaysLeft(dateOfPayment, billingCycle) {
        const paymentDate = new Date(dateOfPayment)
        let nextBillingDate;
    
        switch (billingCycle) {
            case 'monthly':
                nextBillingDate = addMonths(paymentDate, 1);
                break;
            case 'yearly':
                nextBillingDate = addMonths(paymentDate, 12);
                break;
            case 'weekly':
                nextBillingDate = addWeeks(paymentDate, 1);
                break;
            default:
                return 'Invalid billing cycle'
        }
        const today = new Date();
        return differenceInDays(nextBillingDate, today)
    }

    return (
        <div className="notifications-container">
        <h2>Notifications</h2>
        {notifications.length > 0 ? (
            <ul>
                {notifications.map((subscription) => {
                    const daysLeft = calculateDaysLeft(subscription.date_of_payment, subscription.billing_cycle)
                    return (
                    <li key={subscription.id}>
                        Your subscription to {subscription.name} {daysLeft > 0 ? 'is expiring soon' : 'is expired'}.
                         ({daysLeft}) {daysLeft === 1 ? 'day' : 'days'} left!
                    </li>
                    )
                })}
            </ul>
        ) : (
            <p>No subscriptions are expiring soon.</p>
        )}
    </div>
);
};

export default NotificationsPage;
