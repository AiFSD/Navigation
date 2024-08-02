import React from 'react';

function CourseCard({ course }) {
    return (
      
      <div className="course-card">
        <div className='head'>
          <h2>{course.title}</h2>
          </div>
      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
            </div>
            
  );
}

export default CourseCard;
