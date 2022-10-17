import React from 'react';
import { Navbar, Hero, Projects, About, Contact } from './components';
import FloatBtn from './components/widgets/FloatBtn'
import './App.css';



const App = () => {


  return (
    <div className='laptop:mt-8 mobile:mt-2 '>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <FloatBtn />
    </div>
  );
};

export default App;
