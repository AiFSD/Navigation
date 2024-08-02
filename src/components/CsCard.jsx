import React from 'react'

const CsCard = ({cs}) => {
   return (
    <div className='fsdcards'>
      <img src={cs.image} alt={cs.title} />
      <div className="card-body">
        <h3>{cs.title}</h3>
        <div>
          <p>{cs.courses}</p>
              </div>
              <div className="dm">
                  <p>{cs.datePosted}</p>
                  <p> { cs.minRead} min read</p>
              </div>
      </div>
    </div>
  )
}

export default CsCard