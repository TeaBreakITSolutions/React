import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
      <label>Enter your hobby:
      <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm;
