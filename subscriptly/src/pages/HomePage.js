import React, {useState, useEffect} from 'react';
import Table from "../components/Table";
import "./HomePage.css"
import SubscriptionsForm from "../components/SubscriptionsForm"
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
const HomePage = ({user}) => {
  const [subscriptions, setSubscriptions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchSubscriptions = () => {
      if (user) {
        fetch(`http://localhost:5000/users?name=${user}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network Response Was Not Ok')
          }
          return res.json();
        })
        .then(users => {
        if (users.length > 0) {
          setSubscriptions(users[0].subscriptions)
        }
    })
    .catch(error => console.error('Error fetching subscriptions:', error))
      }
    }
    fetchSubscriptions();
  }, [user]);
  const handleDelete=(id)=>{
    alert("You are about to cancel your subscription!")
    setSubscriptions(prev=>prev.filter((subscription)=>subscription.id!==id))
  }
  const filteredSubscriptions= subscriptions.filter(subscription=>subscription.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  
  const handleAddSubscription = (newSubscription) => {
    setSubscriptions([...subscriptions, newSubscription])
  };
  if (!user) {
    return null;
  }

  return (
    <div>
      <h2 id="message">Welcome to the Homepage, {user}!</h2>
      <SubscriptionsForm user={user} onAddSubscription={handleAddSubscription}/>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Table subscriptions={filteredSubscriptions} handleDelete={handleDelete}/>
    <Footer />
    </div>
  );
};

export default HomePage;
