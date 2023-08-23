import React from 'react'
import CTA from './CTA'
import avatar from '../../assets/avatar.jpg'
import "./Header.css"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Dang Chau Bao Van</h1>
          <h5 className="text-light">
            Fresher Web Developer
          </h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={avatar} alt="avatar" />
          </div>
          <a href="#footer" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header