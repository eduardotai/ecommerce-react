import React from "react";
import { Header } from "./Components/Header/Header";
import { Home } from './Components/Home/Home'
import './Global.module.css'



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
