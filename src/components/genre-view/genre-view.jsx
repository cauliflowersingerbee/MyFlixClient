import React from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function GenreView (props) {

      const { genre } = props;
  
      return (
        <Container>
            <Row>
                <Col>
                    <Card>
                      <Card.Body>
                      <div className="genre-view">
                         <span className="label">Name: </span>
                      </div>
                      <div className="genre-description">
                          <span className="label">Description: </span>
                        </div>
                        <Button style={{marginTop: '1rem'}} variant="primary" type="submit"  onClick={() => { onBackClick(null); }}>Back</Button>

                      </Card.Body>
                    </Card>
              </Col>
           </Row>
        </Container>
      );
    }
  }

  MovieView.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };

