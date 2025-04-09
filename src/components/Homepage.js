import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './homepge.css';



function Homepage() {
  return (
    <div>
      <div className='headcontainner'>
        <div className='headcontainner1'>

        </div>
        <div className='headcontainner2'>
          <input className='input' type="text" placeholder="Search" />
        </div>
        <div className='headcontainner3'>
          <button className='login'>login</button>
          <button className='signup'>signup</button>
          <button className='cart'>cart</button>
          <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons/cart.svg" alt="Cart" style={{ width: '20px', height: '20px' }} />
        </div>
      </div>
      <div className='maincontainner'>

      </div>
    </div>
  );
}

export default Homepage