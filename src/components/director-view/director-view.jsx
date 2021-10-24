import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function DirectorView (props) {

      const { director } = props;
      console.log(director)
  
      return (
        <>
            <Row>
                <Col>
                    <Card>
                      <Card.Body>
                      <div className="director-name">
                         <span className="label">Name: </span>
                         <span className="value">{director.Name}</span>
                      </div>
                      <div className="director-bio">
                          <span className="label">Bio: </span>
                          <span className="value">{director.Bio}</span>
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
  

