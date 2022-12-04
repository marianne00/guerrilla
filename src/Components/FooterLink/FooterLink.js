import React from 'react'
import './FooterLink.scss'

const FooterLink = ({ footerLink }) => {
  return (
    <div className='footer-link-item'>
      <p className='footer-link-title'>{footerLink.title}</p>
      <ul className='link-list list'>
        {
          footerLink.links.map((link, i) => {
            return <li className='link-item' key={i}>
              <a href="/">{link.title}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default FooterLink