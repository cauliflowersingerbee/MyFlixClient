{Faves.length < 0 && 
    <h2>You have no favorite movies</h2>}
    
    {
      Faves.length > 0 &&
      <h5>Your favorite movies are: {Faves} </h5>}



      <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
      <Row>
        <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
      </Row>