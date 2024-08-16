import React, {useState} from "react";
import "./SubscriptionsForm.css"

//Form to add new subscriptions and persist to server
function SubscriptionsForm({user, onAddSubscription}) {
const [formData, setFormData] = useState({
    name: '',
    category: '',
    cost: '',
    billing_cycle: 'monthly',
    date_of_payment: '',
})
//onChange event listener call back function.
const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value,
    })
}
//After submiting, persist to server.
const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://subscriptly-server.onrender.com/users?name=${user}`)
        .then(res => res.json())
        .then(users => {
            if (users.length > 0) {
                const userData = users[0];
                const updatedSubscriptions = [...userData.subscriptions, formData];

                const updatedUser = {
                    ...userData,
                    subscriptions: updatedSubscriptions,
                };

                return fetch(`https://subscriptly-server.onrender.com/users/${userData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedUser),
                });
            } else {
                throw new Error('User not found');
            }
        })
        .then(res => res.json())
        .then(updatedUser => {
            onAddSubscription(formData); // Call the callback with the new subscription
            setFormData({
                name: '',
                category: '',
                cost: '',
                billing_cycle: 'monthly',
                date_of_payment: ''
            });
        })
        .catch(error => console.error('Error adding subscription:', error));
};

  return (
    <form className="myForm" onSubmit={handleSubmit}>
        <h3>Add Subscription</h3>
        <input
            type="text"
            name="name"
            placeholder="subscription name"
            value={formData.name}
            onChange={handleChange} 
            required
        />
        <select
            name="category"
            value={formData.category}
            onChange={handleChange} 
            required
        >
            <option value="">Select Category</option>
            <option value="streaming">Streaming</option>
            <option value="music">Music</option>
            <option value="software">Software</option>
            <option value="shopping">Shopping</option>
            <option value="gaming">Gaming</option>
            <option value="education">Education</option>
            <option value="cloud storage">Cloud Storage</option>
            <option value="other">Other</option>
        </select>
        <input
            type="number"
            name="cost"
            placeholder="subscription cost"
            value={formData.cost}
            onChange={handleChange} 
            required
        />
        <select
            name="billing_cycle"
            value={formData.billing_cycle}
            onChange={handleChange} 
            required
        >
            <option value="">Select billing_cycle</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
        </select>
        <input
            type="date"
            name="date_of_payment"
            placeholder="Date Paid"
            value={formData.date_of_payment}
            onChange={handleChange} 
            required
        />
        <button type="submit">Add Subscription</button>
    </form>
  )
}

export default SubscriptionsForm