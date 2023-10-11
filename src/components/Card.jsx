import React from 'react'
import './Card.css'
import home_photo from '../Images/IMG_0197.JPG'
const Card = () => {
  return (
    <div className='card'>
      <div className='gradiant'></div>
      <div className='profile-down'>
        <img src={home_photo} alt=''/>
        <div className="title">ADDRESS</div>
        <div className="description">
            Description
        </div>
        <div className="item-button"> <a href='a voir'>Contact</a></div>
      </div>

    </div>
  )
}

export default Card
