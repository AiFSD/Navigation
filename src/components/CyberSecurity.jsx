import React from 'react'

const CsCourse = [
  {
    id: 1,
    title: 'Network Security',
    image: 'https://i.pinimg.com/736x/b9/b4/a6/b9b4a61db4f7fcbee0825e84dff8ae07.jpg',
    courses: 'Protecting network infrastructure',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 2,
    title: 'Cryptography',
    image: 'https://i.pinimg.com/236x/4b/ed/b1/4bedb1a7e0ddf9c5e27435b5fe165307.jpg',
    courses: 'Secure data transmission',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  },

  {
    id: 3,
    title: 'Risk Management',
    image: 'https://i.pinimg.com/736x/e3/87/be/e387beb08782fa481fd8714b5b833842.jpg',
    courses: 'Identifying and mitigating threats',
    datePosted: getRandomDate(),
    minRead: getRandomMinRead()
  }
]

function getRandomDate() {
  const startDate = new Date('2020-01-01');
  const endDate = new Date('2025-01-01');
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toLocaleDateString();
}


function getRandomMinRead() {
  return Math.floor(Math.random() * 10) + 1; 
}

import CsCard from './CsCard';


const cyberSecurity = () => {
return (
    <div className='fsdcard'>
            {CsCourse.map(cs => 
                <CsCard
                    key={cs.id} cs={cs} />
         )}

        </div>
    )
}

export default cyberSecurity