{Faves.length < 0 && 
    <h2>You have no favorite movies</h2>}
    
    {
      Faves.length > 0 &&
      <h5>Your favorite movies are: {Faves} </h5>}



      <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
      <Row>
        <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
      </Row>


      export class FaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        FavoriteMovie : []
    }
  }

  
   componentDidMount() {
    let user = localStorage.getItem('user');
    let FavoriteMovie = this.state;
    const movies = this.props;
    let url = `https://kino-noir.herokuapp.com/users/${user}/${movies}/${FavoriteMovie}`;
    const token = localStorage.getItem('token');

    axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
         .then(response => {
         this.setState({
         FavoriteMovie: response.data.FavoriteMovie,
         }); 
        })
        .catch (error => {
          console.log(error);
        })
      }


  render () {
  const {movies} = this.props;

  const FavoriteMovie = this.state;

  return (
  <>
    <Row>
     
    <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
         
            <Row>
              <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
            </Row>
            
            <Row>
            <div>
              {FavoriteMovie.length === 0 && 
            <h5>You have no favorite movies</h5>}
            </div>
            <div>
              {FavoriteMovie.length > 0 &&
            <h5>Your favorite movies are: {FavoriteMovie} </h5>}
            </div>
            </Row>
         
           <Row>
            <DeleteFaveMoviesView />
          </Row>
        
          
      </Card>
        
        

    </Row>
  </>

  );
 };
};




<div>
              {FavoriteMovie.length === 0 && 
            <h5>You have no favorite movies</h5>}
            </div>
            <div>
              {FavoriteMovie.length > 0 &&
            <h5>Your favorite movies are: {FavoriteMovie} </h5>}
            </div>
