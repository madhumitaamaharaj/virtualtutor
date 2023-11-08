import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { enrolledStudentsState, coursesState, courseCompletionState } from '../../recoil/studentState';
import coursedata from '../../data/coursedata';
import styles from './StudentDashboard.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StudentDashboard = () => {
  const enrolledStudents = useRecoilValue(enrolledStudentsState);
  const [courses, setCourses] = useRecoilState(coursesState);
  const [courseCompletion, setCourseCompletion] = useRecoilState(courseCompletionState);

  const markCourseCompleted = (courseId) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseId ? { ...course, completed: true } : course
    );

    setCourses(updatedCourses);

    setCourseCompletion({
      ...courseCompletion,
      [courseId]: true,
    });
  };

  return (
    <div className={styles.container}>
      <h2>My Dashboard</h2>
      {enrolledStudents.map((enrollment) => {
        const course = coursedata.find((c) => c.id === enrollment.courseId);
        const isCourseCompleted = courseCompletion[course.id];

        const progressBarStyle = {
          width: isCourseCompleted ? '100%' : '0',
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
            <p>
              Progress: {isCourseCompleted ? 'Completed' : 'In Progress'}
            </p>
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom:'15px',
             
            }}
          >
            <ProgressBar
              now={isCourseCompleted ? 100 : 0}
              label={`${isCourseCompleted ? '100%' : '0%'}`}
              variant={isCourseCompleted ? 'success' : 'info'}
              style={{
                width: '30%', 
              }}
            />
            </div>

            <button
              onClick={() => markCourseCompleted(course.id)}
              style={{
                padding: '10px 20px',
                backgroundColor: isCourseCompleted ? 'green' : '#8b1f8b',
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
