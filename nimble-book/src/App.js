import React, { Component } from 'react';
import { ControlLabel, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid className="parent">
        <Row className="show-grid">
          <NavBar/>
        </Row>
        <Row className="show-grid">
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

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img id="logo" src="http://www.bruce-campbell.com/images/order-bam.png" alt="logo" /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#"></NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavItem eventKey={3} href="#">Link</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={4} title="Account" id="account-dropdown" justified>
            <MenuItem eventKey={4.1}>Account</MenuItem>
            <MenuItem eventKey={4.2}>Settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

// class Logo extends Component {
//   render() {
//     return (
//       <Col xs={2}>

//       </Col>
//     );
//   }
// }

class Search extends Component {
  render() {
    return (
      <Col xs={8} mdPush={2}>
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
        <ControlLabel>Filter Results:</ControlLabel>
        <Nav controlId="menu" bsStyle="pills" stacked>
          <NavItem eventKey={1}>Filter Option</NavItem>
          <NavItem eventKey={2}>Filter Option</NavItem>
          <NavItem eventKey={3}>Filter Option</NavItem>
          <NavItem eventKey={4}>Filter Option</NavItem>
          <NavItem eventKey={5}>Filter Option</NavItem>
          <NavItem eventKey={6}>Filter Option</NavItem>
        </Nav>
      </Col>
    );
  }
}

class SearchContent extends Component {
  render() {
    return (
      <Col xs={8}>
        <SearchResult/>
      </Col>
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
