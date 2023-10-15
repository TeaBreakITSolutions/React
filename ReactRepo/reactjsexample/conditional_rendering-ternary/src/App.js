import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client';
function GoodNight() {
  return <h1>BYE GOOdNIGHT!</h1>;
}

function GoodMorning() {
  return <h1>GOODMORNING</h1>;
}
function DayOrNight(props) {
  const isSun = props.isSun;
  return (
    <>
      { isSun ? <GoodMorning/> : <GoodNight/> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DayOrNight isSun={false} />);

export default DayOrNight;
