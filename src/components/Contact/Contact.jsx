import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <article className="contact_option">
          <AiOutlineMail  className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>sahmad.salma@gmail.com</h5>
          <a href="mailto:sahmad.salma@gmail.com" target='_blank'> Send a Message</a>
        </article>

        <article className="contact_option">
          <BsInstagram className='contact_option-icon'/>
          <h4>Instagram</h4>
          <h5>_salma_sah</h5>
          <a href="https://www.instagram.com/_salma_sah" target='_blank'> Send a Message</a>
        </article>

        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>salma sahmad</h5>
          <a href="https://api.whatsapp.com/send?phone=+2120653195097" target='_blank'> Send a Message</a>
        </article>
        {/*end of contact option */ }
      </div>

    </section>
  )
}

export default Contact
