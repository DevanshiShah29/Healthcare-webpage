import React from "react";
import './sass/app.scss';
import Header from './components/Header';
import Cards from './components/Cards';
import Logos from './components/Logos';
import Form from './components/Form';
import Footer from './components/Footer';
import Description from './components/Description';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Description/>
      <Cards/>
      <Logos/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
