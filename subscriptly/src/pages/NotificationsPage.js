import React, {useState, useEffect} from 'react'
import {differenceInDays, addMonths, addWeeks} from 'date-fns'
import Footer from '../components/Footer.js';
import '../components/Footer.css';
import './NotificationPage.css';

const NotificationsPage = ({user}) => {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        const fetchNotifications = () => {
            if (user) {
                fetch(`http://localhost:5000/users?name=${user}`)
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
        <div className="notifications-page">
            <div className="notifications-content">
                <h2 className='notifs'>Notifications</h2>
                {notifications.length > 0 ? (
                    <ul>
                        {notifications.map((subscription) => {
                            const daysLeft = calculateDaysLeft(subscription.date_of_payment, subscription.billing_cycle)
                            return (
                            <li key={subscription.id}>
                                Your subscription to {subscription.name} is expiring soon.
                                 ({daysLeft}) {daysLeft === 1 ? 'day' : 'days'} left!
                            </li>
                            )
                        })}
                    </ul>
                ) : (
                    <p>No subscriptions are expiring soon.</p>
                )}
            </div>
            <Footer className="footer" />
        </div>
    )
}

export default NotificationsPage;
