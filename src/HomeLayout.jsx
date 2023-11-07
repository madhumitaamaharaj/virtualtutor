import React from 'react';
import Head from './components/Head/Head';
import Sidebar from './components/Sidebar/Sidebar';


const HomeLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <Head />
      <Sidebar />
      {children}
    </div>
  );
};

export default HomeLayout ;
