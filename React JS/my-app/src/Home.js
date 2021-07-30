import './Home.css';
import Popupfin from "./Popupfin";
import { FiSunrise,FiMail,FiPhone} from "react-icons/fi";
function Homebar() {
    return (
    <main>
      <div className="bar-one">
        <div className="bar-two">
          <h2 className ='sub-bar-two-ani'><FiSunrise color = 'tomato'/> CodePortal</h2>
          <h4 className ='sub-bar-two'><FiMail color = 'tomato'/>  hello@codeportal.in</h4>
          <h4 className ='sub-bar-two'><FiPhone color = 'tomato'/>  9701174378</h4>
        </div>
      </div>
 
      <div className="register">
          <h1>New batch starting from 10<sup>th</sup> Aug 2021 <button>REGISTER</button></h1>  
      </div>
      <div className="bar-four">
         <div className="paragraph" >
            <h3>We love design We preach what we love</h3>
            <h5> join our hands on workshop to learn how to innovate faster and built better products
                 with a perfect blend of art and technology.</h5>
            <h5> Get familiar with the design process, includimg aspects of branding, design usability and function.
                Try variety of ideation techniques that combine your consicious and unconsicious to match the design ideas.</h5>
            <h5>Learn to organize, structure and label content effectively to help users find information and complete tasks. 
                Understand the behaviour of user through data available to draw inferences and need for the product.</h5>
            <section><Popupfin/></section>
         </div>
        
          <div className="phone">
            <img src="./image/intro-mobile.png" alt="mobileimage"></img>
          </div>
        </div>
      </main>
    );
  }
  export default Homebar;