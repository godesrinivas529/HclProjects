import React from "react";
 import './Popup.css';
const Popup = props => {
  return (
      <main>
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
    </main>
  );
};
 
export default Popup;