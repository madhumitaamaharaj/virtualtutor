import React from 'react';
import { MdCastForEducation, MdSpaceDashboard } from 'react-icons/md';
import { FaPowerOff } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  const iconStyle = {
    color: '#8b1f8b', 
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.button}>
        <p>
          <span className={styles.icon} style={iconStyle}><MdCastForEducation /></span>
          <strong style={iconStyle}>Courses</strong> 
        </p>
      </div>
      <div className={styles.button}>
        <p>
          <span className={styles.icon} style={iconStyle}><MdSpaceDashboard /></span>
          <strong style={iconStyle}>Dashboard</strong> 
        </p>
      </div>
      <div className={styles.logoutButton}>
        <p>
          <span className={styles.icon} style={iconStyle}><FaPowerOff /></span>
          <strong style={iconStyle}>Logout</strong> 
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
