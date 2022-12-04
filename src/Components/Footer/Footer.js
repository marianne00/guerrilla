import React from 'react'
import LogoWhite from '../../assets/images/logo-white.png';
import Pin from '../../assets/images/pin-gray.png';
import Mail from '../../assets/images/mail.png';
import Phone from '../../assets/images/phone.png';


import './Footer.scss';
import FooterLink from '../FooterLink/FooterLink';

const Footer = () => {

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        {
          link: '/',
          title: 'Home'
        },
        {
          link: '/',
          title: 'About'
        },
        {
          link: '/',
          title: 'Project'
        },
        {
          link: '/',
          title: 'Contact'
        }
      ]
    },
    {
      title: 'Legal Links',
      links: [
        {
          link: '/',
          title: 'Terms'
        },
        {
          link: '/',
          title: 'Condition'
        },
        {
          link: '/',
          title: 'Policy'
        }
      ]
    },
    {
      title: 'Social Media',
      links: [
        {
          link: '/',
          title: 'Facebook'
        },
        {
          link: '/',
          title: 'Twitter'
        },
        {
          link: '/',
          title: 'Youtube'
        },
        {
          link: '/',
          title: 'LinkedIn'
        }
      ]
    },
  ]

  return (
    <div className='section-footer'>
      <div className='footer-container container'>
        <div className='footer-brand'>
          <img 
            src={LogoWhite} 
            className='footer-brand-logo'
            alt="lugar-footer-logo"  />
            <ul className="list">
              <li className='list-item'>
                <img src={Pin} alt="lugar-location" />
                <span>2118 Thornridge Cir. Dubai, UAE 35624</span>
              </li>
              <li className='list-item'>
                <img src={Phone} alt="lugar-phone" />
                <a 
                  href='tel:+33-415-65356-9' 
                  className='footer-brand-link'>
                    +33 415 65356 - 9
                </a>
              </li>
              <li className='list-item'>
                <img src={Mail} alt="lugar-location" />
                <a 
                  href="mailto:contact@lugar.com"
                  className='footer-brand-link'>
                    contact@lugar.com
                </a>
              </li>
            </ul>
        </div>
        <div className='footer-link-list'>
          {
            footerLinks.map((footerLink, i) => {
              return <FooterLink footerLink={footerLink} key={i} />
            })
          }
        </div>
        <p className='copyright-text'>Copyright @ 2022 Lugar Inc.</p>
      </div>
    </div>
  )
}

export default Footer