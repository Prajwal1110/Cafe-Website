import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
<div id='about'>
    <div className='about-text'>
        <h1>UPCOMING EVENT</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ab necessitatibus iure a ea officia, quod aliquid iusto omnis expedita,
     aliquam blanditiis adipisci quas quis qui ad ratione facere repudiandae.</p>
    <button> Read More</button>
    </div>
    <div className='about-image'>
     <img src={aboutimage} alt=''/>   
    </div>
</div>  )
}

export default About