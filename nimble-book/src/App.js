import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'; 
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="parent">
        <Row className="show-grid">
          <Logo/>
          <Search/>
        </Row>
        <Menu/>
        <SearchResult/>
        <BookView/>
        <AdView/>
      </Grid>
    );
  }
}

class Logo extends Component {
  render() {
    return (
     <Col xs={12} md={4}>
        <img src="http://www.bruce-campbell.com/images/order-bam.png" alt="logo" />
      </Col>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <Col xs={12} md={8}>
        <input type="text" placeholder="Search..."></input>
      </Col>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div></div>
    );
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
