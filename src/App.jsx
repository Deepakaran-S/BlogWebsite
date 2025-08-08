import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Layout from './layout';
import { div } from 'framer-motion/client';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <div>
<Header/>
<Layout/>
<Footer/>

    </div>
    
  );
};

export default App;
