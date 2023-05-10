import React from 'react';
import './Root.css';
import './core/css/fonts.css'
import "./core/css/variables.css";
import Navigation from './core/components/navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './core/components/footer/Footer';

function Root() {
  return (
    <div className='root'>
      <Navigation />
        <Outlet />
      <Footer/>
    </div>
  );
}

export default Root;
