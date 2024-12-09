import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Client/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
