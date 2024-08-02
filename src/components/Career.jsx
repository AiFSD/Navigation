import React from 'react';
import CareerCard from './CareerCard';

const CareerList = () => {
  const careers = [
    {
      id: 1,
      title: 'Resume Writing',
      image: 'https://i.pinimg.com/564x/4f/b1/08/4fb10860350a58b86704ea965b50e16c.jpg',
      courses: 'Crafting a compelling resume',
      datePosted: getRandomDate(),
      minRead: getRandomMinRead()
    },
    {
      id: 2,
      title: 'Interview Skills',
      image: 'https://i.pinimg.com/236x/a6/d6/d6/a6d6d6071ae435c9ea0199b546f92e37.jpg',
      courses: 'Mastering interview techniques',
      datePosted: getRandomDate(),
      minRead: getRandomMinRead()
    },
    {
      id: 3,
      title: 'Job Search',
      image: 'https://i.pinimg.com/564x/d2/29/26/d22926f8e9213c6bf985c59dd1c0391c.jpg',
      courses: 'Effective job search strategies',
      datePosted: getRandomDate(),
      minRead: getRandomMinRead()
    }
    ];
    function getRandomDate() {
  const startDate = new Date('2020-01-01');
  const endDate = new Date('2025-01-01');
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toLocaleDateString();
}


function getRandomMinRead() {
  return Math.floor(Math.random() * 10) + 1; 
}

  return (
    <div className="fsdcard">
      {careers.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
};

export default CareerList;