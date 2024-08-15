import React, {useState, useEffect} from 'react';
import Table from "../components/Table";
import "./HomePage.css"
import SubscriptionsForm from "../components/SubscriptionsForm"
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Filter from "../components/Filter"

const HomePage = ({user}) => {
  const [subscriptions, setSubscriptions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

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
  // const handleDelete=(id)=>{
  //   alert("You are about to cancel your subscription!")
  //   setSubscriptions(prev=>prev.filter((subscription)=>subscription.id!==id))
  // }
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this subscription?")) {
      fetch(`http://localhost:5000/users?name=${user}`)
      .then(res => res.json())
      .then(users => {
        if (users.length > 0) {
          const userData = users[0]
          const updatedSubscriptions = userData.subscriptions.filter(subscription => subscription.id !== id)

          const updatedUserData = {
            ...userData,
            subscriptions: updatedSubscriptions
          }
          fetch(`http://localhost:5000/users/${userData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserData)
          })
          .then(res => {
            if (!res.ok) {
              throw new Error('Failed to delete subscription')
            }
            setSubscriptions(updatedSubscriptions)
           })
           .catch(error => console.error('Error updating subscriptions:', error))
        }
      })
      .catch(error => console.error('Error fetching user data:', error))
  }
}
  const filteredSubscriptions= subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (selectedCategory === '' || subscription.category.toLowerCase() === selectedCategory.toLowerCase())
  );
  
  
  const handleAddSubscription = (newSubscription) => {
    setSubscriptions([...subscriptions, newSubscription])
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }
  if (!user) {
    return null;
  }

  return (
    <div  class="myHomePage">
      {/* <h2 id="message">Welcome to the Homepage, {user}!</h2> */}
      <SubscriptionsForm user={user} onAddSubscription={handleAddSubscription}/>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
      <Table subscriptions={filteredSubscriptions} handleDelete={handleDelete}/>
    <Footer />
    </div>
  );
};

export default HomePage;
