import React from 'react';
import ReactDOM from 'react-dom/client';
 import logo from './logo.svg';
import './App.css';

function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car color="red"/>);

  export default Car;