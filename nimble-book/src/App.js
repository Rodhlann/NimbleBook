import React, { Component } from 'react';
import { Checkbox, Panel, PanelGroup, ControlLabel, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';

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
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Donate</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={4} title="Account" id="account-dropdown">
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

class Filter extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
        <ControlLabel>Filter Results: </ControlLabel>
        <FilterOption/>
      </div>
    );
  }
}

class FilterOption extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <Panel collapsible expanded={this.state.open} header="Genre" eventKey="1"
        onClick={ (e) => {
          // Filter panel hack, so the user can expand the panel view, but also select the given options - Pepper (8/4/2017)
          if (e.target.classList.contains("panel-title") || e.target.classList.contains("panel-heading") || e.target.nodeName === "A") {
            this.setState({ open: !this.state.open })
          }
        }
        }>
        <form>
          <FormGroup>
            <Checkbox>
              Horror
            </Checkbox>
            <Checkbox>
              Fantasy
            </Checkbox>
            <Checkbox>
              Scifi
            </Checkbox>
          </FormGroup>
        </form>
      </Panel>
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
