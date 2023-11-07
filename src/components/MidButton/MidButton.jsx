import React from 'react';
import { useRecoilState } from 'recoil';
import { categoryState } from '../../recoil/atom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MidButton.module.css';



const MidButton = () => {
  const categoryButtons = ['All', 'Technical', 'Design', 'Dance'];
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.buttonContainer}>
    {categoryButtons.map((category, index) => (
      <button
        key={index}
        className={`${styles.button} m-2 ${selectedCategory === category ? styles.active : ''}`}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    ))}
  </div>
  );
};

export default MidButton;
