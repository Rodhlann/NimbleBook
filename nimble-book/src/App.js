import React, { Component } from 'react';
import { Checkbox, Panel, PanelGroup, ControlLabel, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var MockData = [{
  "value": 1,
  "label": "Legaan, ground"
}, {
    "value": 42,
    "label": "Mouflon"
  }, {
    "value": 80,
    "label": "Common waterbuck"
  }, {
    "value": 34,
    "label": "Blue crane"
  }, {
    "value": 91,
    "label": "Sheep, stone"
  }, {
    "value": 99,
    "label": "Roadrunner, greater"
  }, {
    "value": 64,
    "label": "Collared lemming"
  }, {
    "value": 18,
    "label": "Wapiti, elk,"
  }, {
    "value": 74,
    "label": "Squirrel, smith's bush"
  }, {
    "value": 91,
    "label": "Buttermilk snake"
  }, {
    "value": 40,
    "label": "Yellow-crowned night heron"
  }, {
    "value": 52,
    "label": "Alpaca"
  }, {
    "value": 68,
    "label": "Heron, boat-billed"
  }, {
    "value": 46,
    "label": "Blackbird, red-winged"
  }, {
    "value": 9,
    "label": "Little heron"
  }, {
    "value": 36,
    "label": "Gulls (unidentified)"
  }, {
    "value": 64,
    "label": "Blue-tongued lizard"
  }, {
    "value": 79,
    "label": "Peregrine falcon"
  }, {
    "value": 52,
    "label": "Glossy starling (unidentified)"
  }, {
    "value": 69,
    "label": "Otter, brazilian"
  }, {
    "value": 12,
    "label": "Legaan, ground"
  }, {
    "value": 73,
    "label": "Magistrate black colobus"
  }, {
    "value": 55,
    "label": "Grizzly bear"
  }, {
    "value": 77,
    "label": "Devil, tasmanian"
  }, {
    "value": 28,
    "label": "Painted stork"
  }, {
    "value": 79,
    "label": "House sparrow"
  }, {
    "value": 81,
    "label": "Deer, savannah"
  }, {
    "value": 60,
    "label": "Beaver, north american"
  }, {
    "value": 75,
    "label": "Bengal vulture"
  }, {
    "value": 3,
    "label": "Bobcat"
  }, {
    "value": 81,
    "label": "Screamer, crested"
  }, {
    "value": 96,
    "label": "Royal tern"
  }, {
    "value": 90,
    "label": "Comb duck"
  }, {
    "value": 52,
    "label": "Gull, silver"
  }, {
    "value": 11,
    "label": "Ground legaan"
  }, {
    "value": 67,
    "label": "Peccary, collared"
  }, {
    "value": 14,
    "label": "Burmese black mountain tortoise"
  }, {
    "value": 33,
    "label": "Emerald green tree boa"
  }, {
    "value": 78,
    "label": "Asiatic wild ass"
  }, {
    "value": 32,
    "label": "Pelican, brown"
  }, {
    "value": 71,
    "label": "Southern hairy-nosed wombat"
  }, {
    "value": 51,
    "label": "Four-striped grass mouse"
  }, {
    "value": 71,
    "label": "Bengal vulture"
  }, {
    "value": 16,
    "label": "Osprey"
  }, {
    "value": 17,
    "label": "Squirrel, pine"
  }, {
    "value": 46,
    "label": "Red-tailed cockatoo"
  }, {
    "value": 14,
    "label": "Western spotted skunk"
  }, {
    "value": 98,
    "label": "Ground monitor (unidentified)"
  }, {
    "value": 37,
    "label": "Woodchuck"
  }, {
    "value": 53,
    "label": "Blue-tongued lizard"
  }];

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

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    }
    this.change = this.logChange.bind(this); 
  }

  logChange(val) {
    this.setState({
      value: val
    });
    console.log("Selected: " + JSON.stringify(val));
  }

  render() {
    return (
      <Select
        name="search"
        placeholder="Search..."
        value={this.state.value}
        options={MockData}
        onChange={this.change}
        />
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
      <div className="content">
        <SearchResult/>
      </div>
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
