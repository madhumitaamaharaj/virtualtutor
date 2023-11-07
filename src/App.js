import React from 'react';
import { RecoilRoot } from 'recoil'; 
import Head from './components/Head/Head';
import Sidebar from './components/Sidebar/Sidebar';
import MidButton from './components/MidButton/MidButton';
import CourseList from './components/CourseContainer/CourseList/CourseList';
import './App.css';

function App() {
  return (
    <RecoilRoot> 
      <div className="App">
        <Head />
        <MidButton />
        <Sidebar />
        <CourseList />
      </div>
    </RecoilRoot>
  );
}

export default App;
