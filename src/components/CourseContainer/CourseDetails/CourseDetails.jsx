import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../../data/coursedata';
import styles from './CourseDetails.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { enrolledStudentsState } from '../../../recoil/studentState';

const CourseDetails = () => {
  const { id } = useParams();
  const courseId = parseInt(id);

  console.log('id:', id);
  console.log('courseId:', courseId);

  const course = courses.find((c) => c.id === courseId);

  console.log('course:', course);

  const [enrolledStudents, setEnrolledStudents] = useRecoilState(enrolledStudentsState);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = () => {
    const studentId = 103; 
    const alreadyEnrolled = enrolledStudents.some(
      (enrollment) => enrollment.courseId === course.id && enrollment.studentId === studentId
    );

    if (alreadyEnrolled) {
      toast.error('You are already enrolled in this course.', { position: 'top-right' });
    } else {
      setEnrolledStudents((prevEnrolledStudents) => [
        ...prevEnrolledStudents,
        { courseId: course.id, studentId },
      ]);
      toast.success('Successfully enrolled in the course!', { position: 'top-right' });
    }
  };

  return (
    <div className={styles.courseDetails}>
      <div className={styles.courseHeader}>
        <div className={styles.titleHeader}></div>
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
          <summary>Syllabus</summary>
          <ul>
            {course.syllabus.map((item) => (
              <li key={item.week}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        </details>
        <button
          style={{
            backgroundColor: '#8b1f8b',
            color: 'white',
            width: '18%',
            fontWeight: 'bold',
            border: 'none',
            transition: 'background-color 0.3s',
            borderRadius: '5px',
          }}
          onClick={handleEnroll}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
