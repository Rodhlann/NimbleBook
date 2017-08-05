import React, { Component } from 'react';
import { Panel, ControlLabel, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid className="parent">
        <Row className="show-grid">
          <NavBar/>
        </Row>
        <Row className="show-grid">
          <Col xs={2}>
            <Menu/>
          </Col>
          <Col xs={8}>
            <Search/>
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

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Nimble Book
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
      <form>
        <FormGroup controlId="search" >
          <FormControl type="text" placeholder="Search..."/>
        </FormGroup>
      </form>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div>
        <ControlLabel>Filter Results: </ControlLabel>
        <Nav controlId="menu" bsStyle="pills" stacked>
          <NavItem eventKey={1}>Filter Option</NavItem>
          <NavItem eventKey={2}>Filter Option</NavItem>
          <NavItem eventKey={3}>Filter Option</NavItem>
          <NavItem eventKey={4}>Filter Option</NavItem>
          <NavItem eventKey={5}>Filter Option</NavItem>
          <NavItem eventKey={6}>Filter Option</NavItem>
        </Nav>
      </div>
    );
  }
}

class SearchContent extends Component {
  render() {
    return (
        <SearchResult/>
    );
  }
}

class SearchResult extends Component {
  render() {
    return (
      <Panel>
        <Col xs={12}>
          <Col xs={12} md={4}>
            <label>Title</label>
            <p>Harry Potter and The Biggest Boomstick</p>
          </Col>
          <Col xs={12} md={4}>
            <label>Author</label>
            <p>J.K.Rowling</p>
          </Col>
          <Col xs={12} md={4}>
            <label>Genre</label>
            <p>Fantasy, Magic, Teen</p>
          </Col>
          <Col xs={12}>
            <label>Description</label>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.</p>
          </Col>
        </Col>
      </Panel>
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
