import React from 'react'
import TestimonialImg from '../../assets/images/testimonial.png';
import StatItem from '../StatItem/StatItem';
import './Testimonial.scss'

const Testimonial = () => {

  const DUMMY_STAT = [
    {
      name: 'Previous projects',
      figure: '34+'
    },
    {
      name: 'Years experience',
      figure: '20y'
    },
    {
      name: 'Ongoing Projects',
      figure: '12'
    }
  ];

  return (
    <div className='section-testimonial'>
      <div className='container testimonial-container'>
        <div className='featured-image'>
          <img src={TestimonialImg} alt="lugar-testimonial" />
        </div>
        <div className='featured-text'>
          <p className='section-heading'>Award winning real estate company in Dubai</p>
          <p className='section-subheading'>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
          <div className='stat-container'>
            {
              DUMMY_STAT.map((stat, i) => {
                return <StatItem stat={stat} key={i} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial