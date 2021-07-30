import React, { Component } from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import './Keyfeatures.css';
      class Keyfeature extends Component{
        render()
        {
      return (
      
        <div className="cards">
        <h2 className ='keyfeatures'>Key Features</h2>
        <div className="card1">
      <Card class="a">
      <CardContent>
      <h5 className="body1">Instructor-
      Led Live Classroom</h5>
        <Typography className = 'data'>
        Interact with instructors in real-time. They are industry experts and deliver hands-on learning.
        </Typography>
      </CardContent>
      </Card>
               <Card class="b">
                <CardContent>
               <h5 className="body2">Learn Through Doing</h5>
               <Typography className = 'data'>
               Learn theory backed by practical case studies, exercises, and coding practice.
                 </Typography>
                  </CardContent>
                  </Card>
   <Card class="c">
    <CardContent>
      <h5 className="body3">Advance From The Basics</h5>
        <Typography className = 'data'>
        Learn concepts from scratch, and advance your learning through step-by-step guidance.</Typography>
        
      </CardContent>
       </Card>
    </div>   
               <img className='phnmobile' src="/image/mobile.png" alt="mobile"/>
    <div className="card2">
           <Card class="d">
    <CardContent>
      <h5 className="body4">Curriculum Designed By Experts</h5>
        <Typography className = 'data'>
        Our courseware is always current with the latest tech advancements. Stay globally relevant!
        </Typography>
      </CardContent>
       </Card>
       <Card class="e">
       <CardContent>
         <h5 className="body5">Mentored By Industry Leader</h5>
           <p className = 'data'>
           <Typography >
           Learn from the best in the field. Our mentors are all experienced working professionals.
           </Typography></p>
         </CardContent>
          </Card>
          <Card class="f">
    <CardContent>
      <h5 className="body6">Job and Interview Assistance</h5>
        <Typography className = 'data'>
        Our interview assistance can help you overcome your fears and crack your dream job.
        </Typography>
      </CardContent>
       </Card>
           </div>
    </div> 
  )     
}
      };
export default Keyfeature;