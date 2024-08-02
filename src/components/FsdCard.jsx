const FsdCard = ({ Fsd }) => {
  return (
    <div className='fsdcards'>
      <img src={Fsd.image} alt={Fsd.title} />
      <div className="card-body">
        <h3>{Fsd.title}</h3>
        <div>
          <p>{Fsd.courses}</p>
              </div>
              <div className="dm">
                  <p>{Fsd.datePosted}</p>
                  <p> { Fsd.minRead} min read</p>
              </div>
      </div>
    </div>
  )
}

export default FsdCard