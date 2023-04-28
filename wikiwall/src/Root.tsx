import React from 'react';
import './Root.css';
import './core/css/fonts.css'
import "./core/css/variables.css";
import Navigation from './core/components/navigation/Navigation';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      <Navigation />
        <Outlet />

    </div>
  );
}

export default Root;
