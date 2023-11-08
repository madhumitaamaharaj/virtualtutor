import React from 'react';
import Head from '../Head/Head';
import Sidebar from '../Sidebar/Sidebar';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

const DashboardLayout = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <StudentDashboard />
    </div>
  );
};

export default DashboardLayout;
