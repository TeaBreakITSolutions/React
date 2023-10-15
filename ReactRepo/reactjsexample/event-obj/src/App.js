import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = () => {
    alert("bad Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);



export default Football;
