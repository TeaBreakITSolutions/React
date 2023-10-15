import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
function Tapashya() {
  return <h2>I am your friend tapashya!</h2>;
}

function City() {
  return (
    <>
      <h1>Who lives in my city?</h1>
      <Tapashya />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<City />);

export default City;
