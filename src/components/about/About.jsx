import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+years</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+years</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Projects</h5>
              <small>3+years</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolor qui totam, 
            provident recusandae praesentium ea eveniet voluptatibus ducimus, repudiandae et  
            corrupti doloremque similique dolorem? Laudantium fugit nesciunt quos facere deserunt,
            ex eius veritatis tempora illum. Vel suscipit consequuntur unde consequatur nobis loremque!
          </p>
          <div className='but'>
           <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default About