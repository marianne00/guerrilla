import React from 'react'
import Logo from '../../assets/images/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='section-header'>
      <div className='header-container container'>
        <img 
          src={Logo} 
          alt="lugar-logo"
          className='header-logo' />
        <ul className='link-list'>
          <li className='link-item'>Home</li>
          <li className='link-item'>About</li>
          <li className='link-item'>Projects</li>
          <li className='link-item'>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Header