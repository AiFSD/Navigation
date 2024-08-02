const DsCourse = [
  {
    id: 1,
    title: 'Python',
    image: 'https://i.pinimg.com/564x/6b/b9/17/6bb9177f1f2075cab554dbb6276f3732.jpg',
    courses: 'Programming fundamentals',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 2,
    title: 'Statistics',
    image: 'https://i.pinimg.com/236x/d4/fa/5e/d4fa5e7819cf803731b3c86af30b062e.jpg',
    courses: 'Data analysis and interpretation',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 3,
    title: 'Machine Learning',
    image: 'https://i.ytimg.com/vi/0D-PCtUJInE/maxresdefault.jpg',
    courses: 'Predictive modeling and pattern recognition',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 4,
    title: 'Data Visualization',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXlv776SwOJUsSHnZCSx6HTi0gTa2WynJ_Q&s',
    courses: 'Data communication and storytelling',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  }
]


import React from 'react'
import DsCard from './DsCard'

function getRandomDate() {
  const startDate = new Date('2020-01-01');
  const endDate = new Date('2025-01-01');
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toLocaleDateString();
}


function getRandomMinRead() {
  return Math.floor(Math.random() * 10) + 1; 
}

const DataScience = () => {
  return (
      <div className='fsdcard'>
          {DsCourse.map(data =>
              <DsCard
              key={data.id} data={data}
              />
          )}
    </div>
  )
}

export default DataScience