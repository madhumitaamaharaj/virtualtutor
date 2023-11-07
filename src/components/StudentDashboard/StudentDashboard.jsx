import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { enrolledStudentsState, coursesState } from '../../recoil/studentState';
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
    <div className={styles.dashboard}>
      <h2>My Dashboard</h2>
      {enrolledStudents.map((enrollment) => {
        const course = courses.find((c) => c.id === enrollment.courseId);

        return (
          <div key={enrollment.courseId} className={styles.course}>
            <img src={course.imageUrl} alt={`${course.title} Thumbnail`} />
            <div className={styles.courseInfo}>
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <div>
                <progress
                  max="100"
                  value={course.completed ? 100 : 0}
                ></progress>
                <button
                  onClick={() => markCourseCompleted(course.id)}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentDashboard;
