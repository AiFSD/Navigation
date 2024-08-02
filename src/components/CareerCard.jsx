import React from 'react';

const CareerCard = ({ career }) => {
  return (
    <div className='fsdcards'>
      <img src={career.image} alt={career.title} />
      <div className="card-body">
        <h3>{career.title}</h3>
        <div>
          <p>{career.courses}</p>
              </div>
              <div className="dm">
                  <p>{career.datePosted}</p>
                  <p> { career.minRead} min read</p>
              </div>
      </div>
    </div>
  )
};

export default CareerCard;