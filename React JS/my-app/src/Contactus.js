import React, {useState } from 'react';
import './Contactus.css'
import { FiMail,FiPhone} from "react-icons/fi";
const Contactus = ()=>
{
    const[data,setData]=useState({
      username:'',
      phone : '',
      email:'',
      message:'',
    })
    const{username,email,phone,message}=data;
    const changeHandler = e =>
    {
    setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>
    {
      e.preventDefault();
  
      if(username==="")
      {
        alert("fill the username");
      }
      else if(username.length<=5)
        {
          alert("username is less than 5 characters");
        }
      else if(phone==="")
      {
        alert("fill the number");
      }
      else if(phone.length<10)
      {
        alert("number atleast 10 lettes");
      }
      else if(email==="")
      {
        alert("fill the email");
      }
      else if(message==="")
      {
        alert("fill the teaxtarea");
      }
      else if(message.length<=10)
      {
        alert("message atleast 10characters");
      }
      else
        {
          console.log(data);
          alert ('message sent successfully')
        }
    }
    return(
      <main>
      <section >
        <div >
          <h2 className = 'contact'>Contact Us</h2>
        </div>
      </section>
 
        <section className = 'formdata'>
            <div className = 'Lform'>
            <form className="container" id="form" onSubmit={submitHandler}>
                     <input type = 'text'name = 'username' placeholder = 'Name' id = 'username' value = {username} onChange = {changeHandler}></input>
 
                     <input type = 'number' name = 'phone' placeholder = 'Contact Number' id = 'phone' value={phone} onChange = {changeHandler} ></input><br/>
 
                     <input type = 'email' name = 'email' placeholder = 'Email' id = 'email' value={email} onChange = {changeHandler} ></input>
 
                     <textarea id="message" rows="10" name = 'message' cols="30" placeholder = 'I would like to join one of your programs'
                    value={message} onChange = {changeHandler}></textarea><br/>
 
                     <button className = 'button' >SEND MESSAGE</button>
                </form>         
            </div>
 
            <div className = 'Rform'>
                <div className = 'fmail'>
                    <FiMail color = 'tomato'/>
                    <h5>EMAIL US</h5>
                    <p className = 'about'>hello@codeportal.in</p>
                </div>
 
                <div className = 'fphn'>
                     <FiPhone color = 'tomato'/>
                     <h5>CALL US</h5>
                     <p className = 'about'>hello@codeportal.in</p>
                </div>
                
                   
            </div>
       </section>
       </main>
    )
}
 
export default Contactus;