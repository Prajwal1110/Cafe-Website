import React from 'react'
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import Productbox from './Productbox';

function Product() {
  return (
 <div id='products'>
   <h1> CHOOSE & ENJOY</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Fugiat, autem?</p> 
     <div className='a-container'>
      <Productbox image={pimage1} title="Luger Burger"/>
      <Productbox image={pimage2} title="Le cheese Burger "/>
      <Productbox image={pimage1} title="Double cheese"/>
     </div>
 </div>
  )
}

export default Product