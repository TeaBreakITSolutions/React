import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client';

function IsOrange() {
  return <h1>i am orange!</h1>;
}

function IsApple() {
  return <h1>i am  apple!</h1>;
}
function Fruit(props) {
  const isFruit = props.isFruit;
  if (isFruit) {
    return <IsOrange/>;
  }
  return <IsApple/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fruit isFruit={true} />);



export default Fruit;
