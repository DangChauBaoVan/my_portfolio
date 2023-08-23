import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'
import "./Nav.css"
import { useState } from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#' ?'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ?'active' : ''}><AiOutlineUser/></a>
      <a href="#skill" onClick={() =>setActiveNav('#skill')} className={activeNav === '#skill' ?'active' : ''}><BiBook/></a>
      <a href="#project" onClick={() =>setActiveNav('#project')} className={activeNav === '#project' ?'active' : ''}><VscFolderLibrary/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ?'active' : ''}><BiMessageSquareDetail/></a> */}
      <Link  spy to="home">
        <AiOutlineHome />
      </Link>
      <Link  spy to="about">
        <AiOutlineUser />
      </Link>
      <Link  spy to="skill">
        <BiBook />
      </Link>
      <Link  spy to="project">
        <VscFolderLibrary />
      </Link>
      <Link  spy to="contact">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}

export default Nav