import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"; 
import ReactDOM from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Sky</button>
      <button
        type="button"
        onClick={() => setColor("purple")}
      >Grapes</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Lipstick</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Tree</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

export default FavoriteColor;
