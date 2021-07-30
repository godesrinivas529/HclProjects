import React, { useState } from 'react';
import Popup from './Popup';
function Popupfin() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
      <div className='butt'>
          <button  onClick={togglePopup}>Request A Call</button>
    
    </div>
    {isOpen && <Popup
      content={<>
        <b>hello@codeportal.in</b><br/>
        <p>Get familiar with the design process, includimg aspects of branding, design usability and function.</p>
        <button className = 'call'>Call Us</button><br/>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Popupfin;