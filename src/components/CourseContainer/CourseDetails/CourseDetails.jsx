import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../../data/coursedata';
import styles from './CourseDetails.module.css';


const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }
 

  return (
    <div className={styles.courseDetails}>
  <div className={styles.courseHeader}>
    <div className={styles.titleHeader}>
     
    </div>
    <div className={styles.imageHeader}>
      <img src={course.imageUrl} alt={`${course.title} Image`} className={styles.courseImage} />
    </div>
  </div>
  <div className={styles.contentCenter}>
  <p>Course: {course.title}</p>
    <p>Instructor: {course.instructor}</p>
    <p>Description: {course.description}</p>
    <p>Enrollment Status: {course.enrollmentStatus}</p>
    <p>Course Duration: {course.duration}</p>
    <p>Schedule: {course.schedule}</p>
    <p>Location: {course.location}</p>
    <p>Prerequisites: {course.prerequisites.join(', ')}</p>
    <details className={styles.syllabusDetails}>
      <summary>
        Syllabus
      </summary>
      <ul>
        {course.syllabus.map((item) => (
          <li key={item.week}>
            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
          </li>
        ))}
      </ul>
    </details>
  </div>
</div>
  );
};

export default CourseDetails;
