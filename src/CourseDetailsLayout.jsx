import React from 'react';
import Head from './components/Head/Head';
import Sidebar from './components/Sidebar/Sidebar';

const CourseDetailsLayout = ({ children }) => {
  return (
    <div className="course-details-layout">
      <Head />
      <Sidebar />
      {children}
    </div>
  );
};

export default CourseDetailsLayout;
