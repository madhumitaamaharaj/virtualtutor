import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MidButton.module.css';

const MidButton = () => {
    const buttonTitles = [
        'All',
        'Technical',
        'Design',
        'Dance',
     
      ];
    
      return (
        <div className="d-flex justify-content-center flex-wrap">
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
