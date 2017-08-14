import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Component Imports 
import { NavBar, Filter, SearchContent, AdView } from './components/component'; 

class App extends Component {
  render() {
    return (
      <Grid className="parent">
        <Row className="show-grid">
          <NavBar/>
        </Row>
        <Row className="show-grid">
          <Col xs={2}>
            <Filter/>
          </Col>
          <Col xs={10}>
            <SearchContent/>
          </Col>
        </Row>
        <Row className="show-grid">
          <AdView/>
        </Row>
      </Grid>
    );
  }
}

export default App;
