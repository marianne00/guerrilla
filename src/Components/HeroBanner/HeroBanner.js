import React from 'react'
import HeroHouse from '../../assets/images/hero-house.png';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <div className='section-hero-banner'>
      <div className='container'>
        <div className='hero-content'>
          <h1>A home is built with love and dreams</h1>
          <p className='hero-subheading'>Real estate farm that makes your dreams true</p>
          <div className='section-links'>
            <a href='/' className='btn-primary'>Our Projects</a>
            <a href='/' className='btn-secondary'>Contact Us</a>
          </div>
        </div>
      </div>

      <img src={HeroHouse} alt="Lugar" className='hero-image' />
    </div>
  )
}

export default HeroBanner