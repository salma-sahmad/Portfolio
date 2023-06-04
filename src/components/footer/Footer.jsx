import React from 'react'
import './footer.css'
import {RxTwitterLogo} from 'react-icons/rx'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='foot_logo'> Put a logo if you have one</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="foot_social">
        <a href="insta"><BsInstagram /></a>
        <a href="twitter"><RxTwitterLogo /></a>
      </div>

      <div className="fot_copyright">
        <small> &copy; Salma portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer