import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();



  return (
    <div className="course-details">
    
      <h2>Course Details for Course {id}</h2>
     
    </div>
  );
};

export default CourseDetails;
