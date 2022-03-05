
import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
  return <Form.Control
    style={{width: '10rem', marginLeft:'10rem', marginTop: '2rem', marginBottom: '1rem'}}
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="search movies"
  />;
}


export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput);
