import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './CourseList.module.css'; 

const CourseList = () => {

  const courses = [
    {
      title: 'Course 1',
      description: 'Description for Course 1',
      imageUrl: 'https://tradeor.com/wp-content/uploads/2021/08/Stock-Market-Analysis.png',
      
    },
    {
      title: 'Course 2',
      description: 'Description for Course 2',
      imageUrl: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg',
  
    },
    {
      title: 'Course 3',
      description: 'Description for Course 3',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*ycIMlwgwicqlO6PcFRA-Iw.png',
      
    },
    {
      title: 'Course 1',
      description: 'Description for Course 1',
      imageUrl: 'https://fossa.com/blog/content/images/2022/03/CC--.png',
      
    },
    {
      title: 'Course 2',
      description: 'Description for Course 2',
      imageUrl: 'https://www.zigya.com/blog/wp-content/uploads/Odissi-Dance.jpg',
      
    },
    {
      title: 'Course 3',
      description: 'Description for Course 3',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Kathak_Performance.jpg',
      
    },
    {
      title: 'Course 1',
      description: 'Description for Course 1',
      imageUrl: 'https://www.drishtiias.com/images/uploads/1583477683_image1.jpg',
    
    },
    {
      title: 'Course 2',
      description: 'Description for Course 2',
      imageUrl: 'https://graffersid.com/wp-content/uploads/2020/02/ux-ui-1024x529.png',
      
    },
    {
      title: 'Course 3',
      description: 'Description for Course 3',
      imageUrl: 'https://www.textileblog.com/wp-content/uploads/2022/04/textile-designing.jpeg',
      
    },
    {
      title: 'Course 1',
      description: 'Description for Course 1',
      imageUrl: 'https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png',
      
    },
    {
      title: 'Course 2',
      description: 'Description for Course 2',
      imageUrl: 'https://www.blognone.com/sites/default/files/externals/2a4508db1297d53528aafe2d8a6226ce.jpeg',
    },
    {
      title: 'Course 3',
      description: 'Description for Course 3',
      imageUrl: 'https://www.springboard.com/blog/wp-content/uploads/2022/06/what-is-digital-marketing.png',
     
    },
    {
      title: 'Course 1',
      description: 'Description for Course 1',
      imageUrl: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    
    },
    
  ];

  return (
    <Container style={{ marginTop: '80px' }}>
      <h1 className={`mt-3 ${styles['recommended-text']}`}>Recommended Courses</h1>
      <Row className={`justify-content-end ${styles['course-row']}`}>
        {Array.from({ length: 6 }, (_, row) => (
          <React.Fragment key={row}>
            {Array.from({ length: 3 }, (_, col) => (
              <Col key={col} md={4}>
                {courses[row * 3 + col] && (
                  <Card className={`mb-4 ${styles.card}`}>
                    <Card.Img
                      variant="top"
                      src={courses[row * 3 + col].imageUrl}
                      alt={`${courses[row * 3 + col].title} Image`}
                      className={styles['card-img']}
                    />
                    <Card.Body>
                      <Card.Title className={styles['card-title']}>
                        {courses[row * 3 + col].title}
                      </Card.Title>
                      <Card.Text className={styles['card-text']}>
                        {courses[row * 3 + col].description}
                      </Card.Text>
                      <button
                        className={`btn ${styles['enroll-button']}`}
                      >
                        Enroll Now
                      </button>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default CourseList;
