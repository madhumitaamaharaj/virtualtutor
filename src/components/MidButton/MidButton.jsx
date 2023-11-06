import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MidButton.module.css';

const MidButton = () => {
    const buttonTitles = [
        'All',
        'Technical',
        'Design',
        'Business',
        'Language',
        'Astrology',
        'Science',
        'Fine Arts',
        'Performing Arts'
      ];
    
      return (
        <div>
          {buttonTitles.map((title, index) => (
            <button
              key={index}
              className={`${styles.button} m-2`} 
            >
              {title}
            </button>
          ))}
        </div>
      );
    };

export default MidButton
