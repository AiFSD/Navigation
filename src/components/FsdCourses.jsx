const FsdCourse = [
  {
    id: 1,
    title: 'HTML',
    image: 'https://i.ytimg.com/vi/90kC1YLNF3U/maxresdefault.jpg',
        courses: 'Web page structure',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 2,
    title: 'CSS',
    image: 'https://i0.wp.com/www.institutedata.com/wp-content/uploads/2024/05/Styling-the-Web-Mastering-CSS-for-Design-and-Layout.png?fit=940%2C470&ssl=1',
    courses: 'Styling and layout',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 3,
    title: 'JavaScript',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVhlA-FZ4DPerGpIT_5asFg4MNtFFYVMtpY7ill5NSqQ9pYgj3SJk2Io5J1Z6eamwjaw&usqp=CAU',
    courses: 'Client-side scripting',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 4,
    title: 'Node.js',
    image: 'https://nodejs.org/static/images/logo.svg',
    courses: 'Server-side development',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 5,
    title: 'React',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    courses: 'Front-end framework',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  }
]
import React from 'react'
import FsdCard from './FsdCard'

function getRandomDate() {
  const startDate = new Date('2020-01-01');
  const endDate = new Date('2025-01-01');
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toLocaleDateString();
}


function getRandomMinRead() {
  return Math.floor(Math.random() * 10) + 1; 
}

const FsdCourses = () => {
  return (
      <div className='fsdcard'>
          {FsdCourse.map(Fsd => 
              <FsdCard key={Fsd.id} Fsd={ Fsd} />
          )
              
          }
    </div>
  )
}

export default FsdCourses