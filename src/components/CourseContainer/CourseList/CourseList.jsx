import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRecoilValue } from 'recoil'; 
import {  categoryState,searchFilterState } from '../../../recoil/searchFilter';
import styles from './CourseList.module.css'; 

const CourseList = () => {
  const searchFilter = useRecoilValue(searchFilterState); 
  const selectedCategory = useRecoilValue(categoryState);

  const courses = [
    {
      title: 'Stock Market Analysis',
      instructor: 'Dr. Vivek Dutta',
      imageUrl: 'https://tradeor.com/wp-content/uploads/2021/08/Stock-Market-Analysis.png',
      category: 'Business',
    },
    {
      title: 'Java',
      instructor: 'Reshmi Dutta',
      imageUrl: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg',
      category: 'Technical',
    },
    {
      title: 'Python',
      instructor: 'Disha Mitra',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*ycIMlwgwicqlO6PcFRA-Iw.png',
      category: 'Technical',
    },
    {
      title: 'C++',
      instructor: 'Diksha Kumari',
      imageUrl: 'https://fossa.com/blog/content/images/2022/03/CC--.png',
      category: 'Technical',
    },
    {
      title: 'Odissi Dance',
      instructor: 'Madhumita Chaudhuri',
      imageUrl: 'https://www.zigya.com/blog/wp-content/uploads/Odissi-Dance.jpg',
      category: 'Dance',
    },
    {
      title: 'Kathak Dance',
      instructor: 'Madhumita Chaudhuri',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Kathak_Performance.jpg',
      category: 'Dance', 
    },
    {
      title: 'Bharatnatyam Dance',
      instructor: 'Madhumita Chaudhuri',
      imageUrl: 'https://www.drishtiias.com/images/uploads/1583477683_image1.jpg',
      category: 'Dance',
    },
    {
      title: 'UI-UX Design',
      instructor: 'Madhumita Chaudhuri',
      imageUrl: 'https://graffersid.com/wp-content/uploads/2020/02/ux-ui-1024x529.png',
      category: 'Design',
    },
    {
      title: 'Textile Design',
      instructor: 'Madhumita Chaudhuri',
      imageUrl: 'https://www.textileblog.com/wp-content/uploads/2022/04/textile-designing.jpeg',
      category: 'Design',
    },
    {
      title: 'MERN Stack',
      instructor: 'Madhushraba Das',
      imageUrl: 'https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png',
      category: 'Technical',
    },
    {
      title: 'Kotlin',
      instructor: 'Madhvi Malviya',
      imageUrl: 'https://www.blognone.com/sites/default/files/externals/2a4508db1297d53528aafe2d8a6226ce.jpeg',
      category: 'Technical',
    },
    {
      title: 'Digital Marketing',
      instructor: 'Isha Gupta',
      imageUrl: 'https://www.springboard.com/blog/wp-content/uploads/2022/06/what-is-digital-marketing.png',
      category: 'Business',
    },
    {
      title: 'Data Science',
      instructor: 'Juhi Kumari',
      imageUrl: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
      category: 'Technical',
    },
    
  ];

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
                <button className={`btn ${styles['enroll-button']}`}>Enroll Now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseList;