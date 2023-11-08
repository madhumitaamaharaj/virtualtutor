import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { enrolledStudentsState, coursesState } from '../../recoil/studentState';
import coursedata from '../../data/coursedata';
import styles from './StudentDashboard.module.css';

const StudentDashboard = () => {
  const enrolledStudents = useRecoilValue(enrolledStudentsState);
  const [courses, setCourses] = useRecoilState(coursesState);

  const markCourseCompleted = (courseId) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseId ? { ...course, completed: true } : course
    );

    setCourses(updatedCourses);
  };

  return (
    <div className={styles.container}>
      <h2>My Dashboard</h2>
      {enrolledStudents.map((enrollment) => {
        const course = coursedata.find((c) => c.id === enrollment.courseId);

        const progressBarFillStyle = {
          width: course.completed ? '100%' : '0',
          backgroundColor: course.completed ? styles.completed : styles.defaultColor,
        };

        const courseImageStyle = {
          width: '150px', 
          height: '100px', 
        };

        return (
          <div key={enrollment.courseId} className={styles.card}>
            <h3>{course.title}</h3>
            <img
            src={course.imageUrl}
            alt={course.title}
            style={courseImageStyle} 
          />
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.schedule}</p>
            <p>Progress: {course.completed ? 'Completed' : 'In Progress'}</p>

            <div className={styles.progressBar}>
              <div className={styles.progressBarFill} style={progressBarFillStyle}></div>
            </div>
            <button
            onClick={() => markCourseCompleted(course.id)}
            style={{
              padding: '10px 20px',
              backgroundColor: course.completed ? 'green' : '#8b1f8b',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
               fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Mark as Completed
          </button>
          </div>
        );
      })}
    </div>
  );
};

export default StudentDashboard;