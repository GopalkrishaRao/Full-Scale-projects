import React from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Slider from './Home/Slider/Slider';

export default function ComponetHome() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Slider/>
    <Footer/>
    </>
  )
}
