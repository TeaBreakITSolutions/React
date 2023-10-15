import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

import { useState, useEffect } from "react";
import useFetch from "./useFetch";
const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Home />);

export default Home;
