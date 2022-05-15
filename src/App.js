import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './scss/app.scss';

// Pages
import StartPage from "./pages/StartPage";
import About from "./pages/About";


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<StartPage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
