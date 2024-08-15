import React from 'react'
import logo from "../assets/1200x600wa.png"
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div>
        <img src={logo} alt='Logo'/>
        <h1 id="appName">SUBSCRIPTLY!</h1>
        <p>Make Managing Your Subscriptions Effortless</p>
    </div>
  )
}

export default LandingPage;