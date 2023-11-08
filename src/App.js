import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import Head from './components/Head/Head';
import Sidebar from './components/Sidebar/Sidebar';
import MidButton from './components/MidButton/MidButton';
import CourseList from './components/CourseContainer/CourseList/CourseList';
import CourseDetails from './components/CourseContainer/CourseDetails/CourseDetails';
import HomeLayout from './HomeLayout';
import CourseDetailsLayout from './CourseDetailsLayout';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <MidButton />
                <CourseList />
              </HomeLayout>
            }
          />
          <Route
            path="/course/:id"
            element={
              <CourseDetailsLayout>
                <CourseDetails />
              </CourseDetailsLayout>
            }
          />
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Routes>
      </Router>
      <ToastContainer />
    </RecoilRoot>
  );
}

export default App;
