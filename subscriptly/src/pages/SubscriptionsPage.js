import React, { useState, useEffect } from 'react';
import Table from "../components/Table";
import "./HomePage.css";
import SubscriptionsForm from "../components/SubscriptionsForm";
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Filter from "../components/Filter";
import PaymentDateFilter from "../components/PaymentDateFilter";

const HomePage = ({ user }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchSubscriptions = () => {
      if (user) {
        fetch(`http://localhost:5000/users?name=${user}`)
          .then(res => {
            if (!res.ok) {
              throw new Error('Network Response Was Not Ok');
            }
            return res.json();
          })
          .then(users => {
            if (users.length > 0) {
              setSubscriptions(users[0].subscriptions);
            }
          })
          .catch(error => console.error('Error fetching subscriptions:', error));
      }
    };
    fetchSubscriptions();
  }, [user]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this subscription?")) {
      fetch(`http://localhost:5000/users?name=${user}`)
        .then(res => res.json())
        .then(users => {
          if (users.length > 0) {
            const userData = users[0];
            const updatedSubscriptions = userData.subscriptions.filter(subscription => subscription.id !== id);

            const updatedUserData = {
              ...userData,
              subscriptions: updatedSubscriptions
            };
            fetch(`http://localhost:5000/users/${userData.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedUserData)
            })
              .then(res => {
                if (!res.ok) {
                  throw new Error('Failed to delete subscription');
                }
                setSubscriptions(updatedSubscriptions);
              })
              .catch(error => console.error('Error updating subscriptions:', error));
          }
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  };

  const filteredSubscriptions = subscriptions.filter(subscription => {
    const matchSearch = subscription.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === '' || subscription.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchDateRange = (!startDate || new Date(subscription.date_of_payment) >= new Date(startDate)) &&
      (!endDate || new Date(subscription.date_of_payment) <= new Date(endDate));
    return matchSearch && matchCategory && matchDateRange;
  });

  const handleAddSubscription = (newSubscription) => {
    const generateId = (subscriptions) => {
      let maxId = subscriptions.reduce((max, sub) => Math.max(max, parseInt(sub.id)), 0);
      return (maxId + 1).toString();
    };

    const id = generateId(subscriptions);
    const newSubWithId = { ...newSubscription, id };
    const updatedSubscriptions = [...subscriptions, newSubWithId];

    fetch(`http://localhost:5000/users?name=${user}`)
      .then(res => res.json())
      .then(users => {
        if (users.length > 0) {
          const userData = users[0];
          const updatedUserData = {
            ...userData,
            subscriptions: updatedSubscriptions
          };
          return fetch(`http://localhost:5000/users/${userData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserData)
          });
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to add subscription');
        }
        setSubscriptions(updatedSubscriptions);
      })
      .catch(error => console.error('Error updating subscriptions:', error));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleUpdateSubscription = (id, updatedSubscription) => {
    setSubscriptions((prevSubscriptions) =>
      prevSubscriptions.map((subscription) =>
        subscription.id === id ? updatedSubscription : subscription
      )
    );
  };

  if (!user) {
    return (
      <div className="sign-in-prompt" style={{ textAlign: 'center', marginTop: '20px', color: 'black !important' }}>
        <h1>Please Sign In or Register to use Subscriptly</h1>
      </div>
    );
  }

  return (
    <div className="myHomePage">
      <SubscriptionsForm user={user} onAddSubscription={handleAddSubscription} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <PaymentDateFilter startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
      <Table subscriptions={filteredSubscriptions} handleDelete={handleDelete} onUpdate={handleUpdateSubscription} />
      <Footer />
    </div>
  );
};

export default HomePage;
