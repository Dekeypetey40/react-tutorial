
import './App.css'

export function App() {
  return (
    <>
      <h1 className="center" style={{ color: 'red' }}></h1>
      <h1>Hello World</h1>
    </>
  )
}
createRoot(root).render(React.createElement("p", {}, "Hello World"));


import React from "react";
import {createRoot} from "react-dom/client";

const element = React.createElement("h1", {className:"title"}, "Online Supermarket");
const root = document.querySelector("#react-root");
createRoot(root).render(element);