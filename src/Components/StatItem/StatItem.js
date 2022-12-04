import React from 'react'
import './StatItem.scss'

const StatItem = ({ stat }) => {
  return (
    <div className='stat-item'>
      <p className='stat-name'>{stat.name}</p>
      <span className='stat-figure'>{stat.figure}</span>
    </div>
  )
}

export default StatItem