import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client';


class App extends React.Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.google.com'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    console.log(this.props);  
  }  
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default App;  


