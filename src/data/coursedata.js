const courses = [
    {
        id: 1,
        title: 'Stock Market Analysis',
        instructor: 'Dr. Vivek Dutta',
        imageUrl: 'https://tradeor.com/wp-content/uploads/2021/08/Stock-Market-Analysis.png',
        category: 'Technical',
        description: 'Learn the basics of stock market analysis and make informed investment decisions.',
        enrollmentStatus: 'Open',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of financial markets'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Stock Markets',
                content: 'Overview of stock markets, different exchanges, and types of securities.',
            },
            {
                week: 2,
                topic: 'Fundamental Analysis',
                content: 'Analyzing stocks based on financial statements and economic indicators.',
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ],
    },
    {
        id: 2,
        title: 'Java',
        instructor: 'Reshmi Dutta',
        description: 'Learn the fundamentals of Java programming and object-oriented concepts.',
        imageUrl: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Java',
                content: 'Overview of Java, setting up the development environment.',
            },
            {
                week: 2,
                topic: 'Object-Oriented Programming',
                content: 'Understanding classes, objects, and inheritance in Java.',
            },
        ],
        students: [
            {
                id: 103,
                name: 'Charlie Brown',
                email: 'charlie@example.com',
            },
            {
                id: 104,
                name: 'David Smith',
                email: 'david@example.com',
            },
        ],
    },
    {
        id: 3,
        title: 'Python',
        instructor: 'Disha Mitra',
        description: 'Learn Python programming and its applications in various domains.',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*ycIMlwgwicqlO6PcFRA-Iw.png',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['No prior programming knowledge required'],
        syllabus: [
            {
                week: 1,
                topic: 'Python Basics',
                content: 'Introduction to Python, variables, and data types.',
            },
            {
                week: 2,
                topic: 'Control Structures',
                content: 'Conditional statements and loops in Python.',
            },
        ],
        students: [
            {
                id: 105,
                name: 'Ella Davis',
                email: 'ella@example.com',
            },
            {
                id: 106,
                name: 'Frank Wilson',
                email: 'frank@example.com',
            },
        ],
    },
    {
        id: 4,
        title: 'C++',
        instructor: 'Diksha Kumari',
        description: 'Master the C++ programming language and its application in software development.',
        imageUrl: 'https://fossa.com/blog/content/images/2022/03/CC--.png',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '7 weeks',
        schedule: 'Tuesdays and Fridays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to C++',
                content: 'Overview of C++, setting up the development environment.',
            },
            {
                week: 2,
                topic: 'Data Structures',
                content: 'Arrays, pointers, and data structures in C++.',
            },
        ],
        students: [
            {
                id: 107,
                name: 'Grace Martin',
                email: 'grace@example.com',
            },
            {
                id: 108,
                name: 'Henry Young',
                email: 'henry@example.com',
            },
        ],
    },
    {
        id: 5,
        title: 'Odissi Dance',
        instructor: 'Madhumita Chaudhuri',
        description: 'Experience the classical movements and stories of Odissi dance.',
        imageUrl: 'https://www.zigya.com/blog/wp-content/uploads/Odissi-Dance.jpg',
        category: 'Dance',
        enrollmentStatus: 'Open',
        duration: '15 weeks',
        schedule: 'Fridays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of Indian classical dance'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Odissi Dance',
                content: 'Overview of Odissi dance style and hand gestures.',
            },
            {
                week: 2,
                topic: 'Geeta Govinda',
                content: 'Exploring the romantic themes of Geeta Govinda.',
            },
        ],
        students: [
            {
                id: 131,
                name: 'Zara White',
                email: 'zara@example.com',
            },
            {
                id: 132,
                name: 'Xander Johnson',
                email: 'xander@example.com',
            },
        ],
    },
    {
        id: 6,
        title: 'Kathak Dance',
        instructor: 'Madhumita Chaudhuri',
        description: 'Learn the graceful art of Kathak dance with classical movements.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Kathak_Performance.jpg',
        category: 'Dance',
        enrollmentStatus: 'Open',
        duration: '16 weeks',
        schedule: 'Saturdays, 10:00 AM - 12:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of dance'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Kathak Dance',
                content: 'Overview of Kathak, basic hand and foot movements.',
            },
            {
                week: 2,
                topic: 'Raas Dandiya',
                content: 'Exploring the energetic Raas Dandiya style.',
            },
        ],
        students: [
            {
                id: 129,
                name: 'Xavier Davis',
                email: 'xavier@example.com',
            },
            {
                id: 130,
                name: 'Yara Anderson',
                email: 'yara@example.com',
            },
        ],
    },
    {
        id: 7,
        title: 'Bharatnatyam Dance',
        instructor: 'Madhumita Chaudhuri',
        description: 'Discover the vibrant and rhythmic art of Bharatnatyam dance.',
        imageUrl: 'https://www.drishtiias.com/images/uploads/1583477683_image1.jpg',
        category: 'Dance',
        enrollmentStatus: 'Open',
        duration: '18 weeks',
        schedule: 'Sundays, 2:00 PM - 4:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of Indian classical dance'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Bharatnatyam Dance',
                content: 'Overview of Bharatnatyam style and footwork.',
            },
            {
                week: 2,
                topic: 'Rukmini Devi Arundale',
                content: 'Exploring the contributions of Rukmini Devi Arundale.',
            },
        ],
        students: [
            {
                id: 133,
                name: 'Yasmine Martin',
                email: 'yasmine@example.com',
            },
            {
                id: 134,
                name: 'William Lee',
                email: 'william@example.com',
            },
        ],
    },
    {
        id: 8,
        title: 'UI-UX Design',
        instructor: 'Madhumita Chaudhuri',
        description: 'Learn the principles of user interface and user experience design.',
        imageUrl: 'https://graffersid.com/wp-content/uploads/2020/02/ux-ui-1024x529.png',
        category: 'Design',
        enrollmentStatus: 'Open',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic design skills'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to UI-UX Design',
                content: 'Overview of UI and UX design principles.',
            },
            {
                week: 2,
                topic: 'Wireframing and Prototyping',
                content: 'Creating wireframes and interactive prototypes.',
            },
        ],
        students: [
            {
                id: 121,
                name: 'Penelope Smith',
                email: 'penelope@example.com',
            },
            {
                id: 122,
                name: 'Quincy Martin',
                email: 'quincy@example.com',
            },
        ],
    },
    {
        id: 9,
        title: 'Textile Design',
        instructor: 'Madhumita Chaudhuri',
        description: 'Explore the art of textile design and create stunning patterns.',
        imageUrl: 'https://www.textileblog.com/wp-content/uploads/2022/04/textile-designing.jpeg',
        category: 'Design',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 5:30 PM - 7:30 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of design concepts'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Textile Design',
                content: 'Understanding fabric types and design elements.',
            },
            {
                week: 2,
                topic: 'Pattern Creation',
                content: 'Creating unique textile patterns and prints.',
            },
        ],
        students: [
            {
                id: 123,
                name: 'Rachel Brown',
                email: 'rachel@example.com',
            },
            {
                id: 124,
                name: 'Samuel Wilson',
                email: 'samuel@example.com',
            },
        ],
    },
    {
        id: 10,
        title: 'MERN Stack',
        instructor: 'Madhushraba Das',
        description: 'Build web applications using the MERN (MongoDB, Express, React, Node) stack.',
        imageUrl: 'https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic web development knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to MERN Stack',
                content: 'Overview of MERN stack components and setup.',
            },
            {
                week: 2,
                topic: 'Building React Components',
                content: 'Creating interactive web components with React.',
            },
        ],
        students: [
            {
                id: 127,
                name: 'Victoria Lee',
                email: 'victoria@example.com',
            },
            {
                id: 128,
                name: 'William Smith',
                email: 'william@example.com',
            },
        ],
    },
    {
        id: 11,
        title: 'Kotlin',
        instructor: 'Madhvi Malviya',
        description: 'Explore Kotlin programming and its modern features for Android app development.',
        imageUrl: 'https://www.blognone.com/sites/default/files/externals/2a4508db1297d53528aafe2d8a6226ce.jpeg',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Kotlin Basics',
                content: 'Introduction to Kotlin, variables, and functions.',
            },
            {
                week: 2,
                topic: 'Android App Development',
                content: 'Building Android apps using Kotlin.',
            },
        ],
        students: [
            {
                id: 117,
                name: 'Liam Johnson',
                email: 'liam@example.com',
            },
            {
                id: 118,
                name: 'Mia Smith',
                email: 'mia@example.com',
            },
        ],
    },
    {
        id: 12,
        title: 'Digital Marketing',
        instructor: 'Isha Gupta',
        description: 'Master the art of digital marketing and grow your online presence.',
        imageUrl: 'https://www.springboard.com/blog/wp-content/uploads/2022/06/what-is-digital-marketing.png',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '10 weeks',
        schedule: 'Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of online marketing'],
        syllabus: [
            {
                week: 1,
                topic: 'Digital Marketing Fundamentals',
                content: 'Overview of digital marketing strategies and tools.',
            },
            {
                week: 2,
                topic: 'Social Media Marketing',
                content: 'Leveraging social platforms for marketing campaigns.',
            },
        ],
        students: [
            {
                id: 119,
                name: 'Nora Wilson',
                email: 'nora@example.com',
            },
            {
                id: 120,
                name: 'Oliver Davis',
                email: 'oliver@example.com',
            },
        ],
    },
    {
        id: 13,
        title: 'Data Science',
        instructor: 'Juhi Kumari',
        description: 'Dive into the world of data science and analyze complex datasets.',
        imageUrl: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
        category: 'Technical',
        enrollmentStatus: 'Open',
        duration: '14 weeks',
        schedule: 'Tuesdays and Fridays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of statistics and programming'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: 'Overview of data science, data types, and tools.',
            },
            {
                week: 2,
                topic: 'Data Analysis with Python',
                content: 'Using Python for data analysis and visualization.',
            },
        ],
        students: [
            {
                id: 125,
                name: 'Thomas Clark',
                email: 'thomas@example.com',
            },
            {
                id: 126,
                name: 'Uma Patel',
                email: 'uma@example.com',
            },
        ],
    },
];

export default courses;
