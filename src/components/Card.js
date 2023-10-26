import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import item_pic_teams from"../Images/IMG_0209.JPG"
import item_pic_ethic from"../Images/IMG_0210.JPG"
import item_pic_succes from"../Images/IMG_0211.JPG"
function Card() {
  return (
    <div className='cards'>
      <h1>YOU ARE OUR PRIORITY!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
            src= {item_pic_ethic}
            text='Ethics are the cornerstone of our business. 
            We conduct every transaction with integrity, honesty, and transparency.'
            label= ''
            path = '/buy'
            alt =""
            />
            <CardItem
            src= {item_pic_teams}
            text='Our dedicated teams of professionals work tirelessly 
            to ensure that your goals are not only met but exceeded.'
            label= ''
            path = '/buy'
            alt =""
            />
                 <CardItem
            src= {item_pic_succes}
            text='We take immense pride in having helped countless individuals
             successfully navigate the market.'
            label= ''
            path = '/buy'
            alt =""
            />
          </ul>
       </div>
      </div>
    </div>
  );
}

export default Card;
