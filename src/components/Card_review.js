import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import item_pic_buyer from"../Images/IMG_0212.JPG"
import item_pic_seller from"../Images/IMG_0213.JPG"
function Card_review() {
  return (
    <div className='cards'>
      <h1>FROM OUR USER </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
            src= {item_pic_buyer}
            text= "I couldn't be happier with my home purchase, and it's all thanks to Broke Brokers!  their website made finding my dream home a breese "
            label= 'Buyer'
            path = '/buy'
            alt =""
            />
            <CardItem
            src= {item_pic_seller}
            text='Selling my property seemed like a dounting task until i discoverd Broke Brokers'
            label= 'Seller'
            path = '/buy'
            alt =""
            />
          
          </ul>
       </div>
      </div>
    </div>
  );
}

export default Card_review;
