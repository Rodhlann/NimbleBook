import React, { Component } from 'react';
import { FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid className="parent">
        <Row className="show-grid">
          <Logo/>
          <Search/>
        </Row>
        <Row className="show-grid">
          <Menu/>
          <SearchContent/>
        </Row>
        <Row className="show-grid">
          <AdView/>
        </Row>
      </Grid>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <Col xs={2}>
        <img id="Logo" src="http://www.bruce-campbell.com/images/order-bam.png" alt="logo" />
      </Col>
    );
  }
}

class Search extends Component {
  getInitialState() {
    return {
      value: ''
    };
  }

  render() {
    return (
      <Col xs={8}>
        <form>
          <FormGroup controlId="search" >
            <FormControl type="text" placeholder="Search..."/>
          </FormGroup>
        </form>
      </Col>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <Col xs={2}>
        <img id="Logo" src="http://www.bruce-campbell.com/images/order-bam.png" alt="logo" />
      </Col>
    );
  }
}

class SearchContent extends Component {
  render() {
    <Col xs={8}>
      <SearchResult/>
    </Col>
  }
}

class SearchResult extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class BookView extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class AdView extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default App;
