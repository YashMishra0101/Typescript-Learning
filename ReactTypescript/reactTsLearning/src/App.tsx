import React from "react";
import "./App.css";
import Button from "./components/Button";
import Increment from "./components/Increment";
import Books from "./Books";
import Form from "./Form";

function App() {
  return <>
  <Button onClick={()=>alert("Hey I am alert ⚠️")} text={"Click Me"}/>
  <div>
  <Button text="Hello ji Kya Haal Chaal"/> 
  </div>
  <Increment/>
  <div>
    <Books/>
  </div>
  <Form/>
  </>;
}

export default App;
