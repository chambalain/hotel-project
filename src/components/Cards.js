import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'  >
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Dine/1.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Resturant'
              path='/services'
            />
            <CardItem
              src='Bar/1.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Bars'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Room/1.jpeg'
              text='Sfet Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Rooms'
              path='/services'
            />
            {/* <CardItem
              src='images/img-4.jpg'
              text='Efxperience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/fAQs'
            /> */}
            <CardItem
              src='Room/ole.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/help-sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;