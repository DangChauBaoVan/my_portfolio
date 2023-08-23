import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer__logo'>Dang Chau Bao Van</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer