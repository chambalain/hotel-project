import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <img className='iimage' src='Room/1.jpeg'  />
        <img  height = '320'  
              alt='Travel Image'
              src= 'images-png/hotel.png'
            /> 
        <p>What are you waiting for? </p>
<div className='hero-btns'> 
<Button className='btns' 
buttonStyle= 'btn--outline'
buttonSize='btn--large'
>
    Get ready
</Button>
<Button className='btns' 
buttonStyle= 'btn--primary'
buttonSize='btn--large'
>
    watch sunin <i className='far fa-play-circle'/>
    
</Button>

</div>


    </div>
  )
}

export default HeroSection