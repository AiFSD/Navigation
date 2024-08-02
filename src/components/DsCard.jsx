import React from 'react'


const DsCard = ({data}) => {
 return (
    <div className='fsdcards'>
      <img src={data.image} alt={data.title} />
      <div className="card-body">
        <h3>{data.title}</h3>
        <div>
          <p>{data.courses}</p>
              </div>
              <div className="dm">
                  <p>{data.datePosted}</p>
                  <p> { data.minRead} min read</p>
              </div>
      </div>
    </div>
  )
}

export default DsCard