import React from 'react'
import cv from '../../assets/cv_SahmadSalma.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA