import React from 'react'
import pin from '../../assets/images/pin.png';
import './Property.scss';

const Property = ({ property }) => {
  return (
    <div className='property-card'>
      <img
        src={property.image.url}
        className="property-image"
        alt={property.title} />
      <div className='property-description'>
        <p className='property-title'>{property.title}</p>
        <div className='property-address'>
          <img 
            src={pin} 
            className="property-pin"
            alt="property-pin" />
          <p>{property.address}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Property