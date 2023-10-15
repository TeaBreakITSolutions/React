import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a fruit </h2>;
  }
}
function fruit() {
  return <h2>Hi, I am orange fruit</h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<fruit />);
export default fruit;
