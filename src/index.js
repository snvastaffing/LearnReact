import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/HomePage';



// ReactDom is a package that provides the DOM specific methppdas that would be a TOP levekl of any react js web app 
// it dynamicall manages DOM elements of a web page 
const root = ReactDOM.createRoot(document.getElementById('root'));

// virtual dom 
// 1 user makes a request to the page 
// the browser then constructs a HTML document that is the DOM in general 

// then we are actually dealing with render 
// this render is verymuch dynamic as son as you see any changes to the state of a react app 
// then reder is called automatically


root.render(
  <React.StrictMode>
       <Home></Home>
  </React.StrictMode>
);


