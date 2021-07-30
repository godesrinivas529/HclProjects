import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Homebar from './Home';
import Programprops1 from './Programprops1';
import Programprops2 from './Programprops2';
import Keyfeature from './Keyfeatures';
import Teamprops from './Teamprops';
import Contactus from './Contactus';
 
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>  
     <Route path="/Home" component={Homebar}></Route>
     <Route path="/Programprops1" component={Programprops1}></Route>
     <Route path="/Programprops2" component={Programprops2}></Route>
     <Route path="/Keyfeatures" component={Keyfeature}></Route>
     <Route path="/Teamprops" component={Teamprops}></Route>
     <Route path="/Contactus" component={Contactus}></Route>
  </BrowserRouter>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();