import React from 'react'
import me from '../../assets/me.jpg'
import { AiOutlineCalendar } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { FiMapPin } from "react-icons/fi"
import "./About.css"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <AiOutlineCalendar className="about__icon" />
              <h5>Date of Birth</h5>
              <small>20/03/1998</small>
            </article>

            <article className="about__card">
              <FiMapPin className="about__icon" />
              <h5>Address</h5>
              <small>Dist.9 ,HCMC</small>
            </article>
            <article className="about__card">
              <AiOutlineHeart className="about__icon" />
              <h5>Interests</h5>
              <small>Food, Travel, Film</small>
            </article>
          </div>
          <p>
            I love technologies, coding and the challenge of learning
            new things every day. I also value every career opportunity and
            will do everything in my power to add value to the company
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About