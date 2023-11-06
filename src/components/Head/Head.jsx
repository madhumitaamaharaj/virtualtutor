import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { BsBell } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa'; 
import styles from './Head.module.css'; 

const Head = () => {
  const iconStyle = {
    color: '#8b1f8b', 
  };

  return (
    <div className={styles.headContainer}>
      <div className={styles.leftIcons}>
        <GiHamburgerMenu className={styles.icon} style={iconStyle} /> 
      </div>

      <div className={styles.centerIcons}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          onChange={(e) => e.target.value}
        />
        <button className={styles.searchButton}><FaSearch style={iconStyle} /></button>
      </div>
    </div>

      <div className={styles.rightIcons}>
        <BsBell className={styles.icon} style={iconStyle} /> 
        <div className={styles.iconSpacing} /> 
        <FaUserGraduate className={styles.icon} style={iconStyle} /> 
      </div>
    </div>
  );
}

export default Head;
