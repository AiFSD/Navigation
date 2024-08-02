import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Full Stack Development',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
  },
  {
    id: 2,
    title: 'Data Science',
    topics: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization']
  },
  {
    id: 3,
    title: 'Cyber Security',
    topics: ['Network Security', 'Cryptography', 'Risk Management']
  },
  {
    id: 4,
    title: 'Career',
    topics: ['Resume Writing', 'Interview Skills', 'Job Search']
  }
];

function AllCourses() {
  return (
    <div >
          <div className='all'>
              <h1>Available Courses</h1>
      </div>
      <div className="course-cards">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
