import React from 'react';
import './Root.css';
import './core/css/fonts.css'
import "./core/css/variables.css";
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="root">
      <Outlet />
    </div>
  );
}

export default Root;
