import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function GenreView (props) {

      const { genre } = props;
      console.log(genre, 'genre')
  
      return (
        <>
            <Row>
                <Col>
                    <Card>
                      <Card.Body>
                      <div className="genre-view">
                         <span className="label">Name: </span>
                         <span className="value">{genre.Name}</span>
                      </div>
                      <div className="genre-description">
                          <span className="label">Description: </span>
                          <span className="value">{genre.Description}</span>
                      </div>
                      <Link to={`/`}>
                        <Button style={{marginTop: '1rem'}} variant="primary">Go back to movie list</Button>
                      </Link>
                      </Card.Body>
                    </Card>
              </Col>
           </Row>
        </>
      );
    }
  

