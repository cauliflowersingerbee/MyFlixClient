
<Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>



if (movies.length === 0) return <div className="main-view" />;
return movies.map(m => (
  <Col md={3} key={m._id}>
    <MovieCard movie={m} />
  </Col>