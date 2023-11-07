import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRecoilValue } from 'recoil'; 
import { categoryState, searchFilterState } from '../../../recoil/searchFilter';
import { Link } from 'react-router-dom';
import styles from './CourseList.module.css';
import courses from '../../../data/coursedata'; 

const CourseList = () => {
  const searchFilter = useRecoilValue(searchFilterState); 
  const selectedCategory = useRecoilValue(categoryState);

  const filteredCourses = courses.filter((course) => {
    const title = course.title || '';
    const instructor = course.instructor || '';
    return (
      (selectedCategory === 'All' || course.category === selectedCategory) && 
      (title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        instructor.toLowerCase().includes(searchFilter.toLowerCase()))
    );
  });

  return (
    <Container style={{ marginTop: '80px' }}>
      <h1 className={`mt-3 ${styles['recommended-text']}`}>Recommended Courses</h1>
      <Row className={`justify-content-start ${styles['course-row']}`}>
        {filteredCourses.map((course, index) => (
          <Col key={index} md={4}>
            <Card className={`mb-4 ${styles.card}`}>
              <Card.Img
                variant="top"
                src={course.imageUrl}
                alt={`${course.title} Image`}
                className={styles['card-img']}
              />
              <Card.Body>
                <Card.Title className={styles['card-title']}>{course.title}</Card.Title>
                <Card.Text className={styles['card-text']}>{course.instructor}</Card.Text>
                <Link to={`/course/${index}`} className={`btn ${styles['view-button']}`}>
                  View
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseList;
