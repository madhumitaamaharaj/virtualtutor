import React from 'react';
import { MdCastForEducation, MdSpaceDashboard } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
      <div className={styles.button}>
        <p>
          <span className={styles.icon}><MdCastForEducation /></span>
          Courses
        </p>
      </div>
      <div className={styles.button}>
        <p>
          <span className={styles.icon}><MdSpaceDashboard /></span>
          Dashboard
        </p>
      </div>
      <div className={styles.logoutButton}>
        <button className="btn btn-primary">Logout</button>
      </div>
    </div>
  );
};

    

export default Sidebar;
