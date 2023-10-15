import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import ReactDOM from "react-dom/client";

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['BMW', 'TATA', 'Ford'];
  return (
    <>
      <h1>Who lives in my house?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

export default Garage;
