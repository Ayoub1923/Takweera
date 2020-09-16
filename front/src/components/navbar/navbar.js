import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo"><NavLink className="dec" to="/home"><img src='/images/Logo.png' alt='logo' height='100%' width='100%'></img></NavLink></div>
        <ul>
          <li><NavLink className="dec" to="/home">Accueil</NavLink></li>&nbsp; &nbsp; &nbsp;
          <li><NavLink className="dec" to="/fields">Terrains</NavLink></li>&nbsp; &nbsp; &nbsp;
          <li><NavLink className="dec" to="/about">A propos</NavLink></li>&nbsp; &nbsp; &nbsp;
          <li><NavLink className="dec" to="/contact">Nous contacter</NavLink></li>&nbsp; &nbsp; &nbsp;
          <li><NavLink className="dec signin" to="/signin">Se connecter</NavLink></li>
        </ul>
      </div>
    )
  }
} 