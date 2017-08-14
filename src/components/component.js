import React, { Component } from 'react';
import { Checkbox, Panel, PanelGroup, ControlLabel, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {MockData} from '../data/mock_data';
import config from '../config'

export class NavBar extends Component {
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

export class Filter extends Component {
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

export class FilterOption extends Component {
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

export class SearchContent extends Component {
  constructor() {
    super();
    this.state = {
      SearchResult: ""
    }
    this.resultRecieved = this.setSearchResult.bind(this);
  }

  setSearchResult(result) {
    this.setState({ SearchResult: result });
  }

  render() {
    return (
      <div className="content">
        <Search onRecieveSearchResult={this.resultRecieved}/>
        <SearchResults searchResult={this.state.SearchResult}/>
      </div>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: [],
    }
    this.inputChange = this.getSearchResults.bind(this);
  }

  getSearchResults(input) {
    input = input.label ? input.label : input;
    this.setState({
      value: input,
    });
    //TODO: Create query builder to add more search functionality (title/author/genre/etc.)
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + input + '&projection=lite&maxResults=10&key=' + config.KEY)
      .then((result) => result.json())
      .then((resultJson) => {
        var resultOptions = [];
        for (var i = 0; resultJson.items.length > i; i++) {
          resultOptions.push({
            "value": resultJson.items[i].id,
            "label": resultJson.items[i].volumeInfo.title
          });
        }
        this.setState({
          options: resultOptions
        });
        this.props.onRecieveSearchResult(resultJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      //TODO: Selection value isn't being updated properly. Maybe remove? Might replace select library with simple search input 
      <Select
        name="search"
        placeholder="Search..."
        value={this.state.value}
        options={this.state.options}
        onChange={this.inputChange}
        onInputChange={this.inputChange}
        />
    );
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.showResults = this.displayResults.bind(this);
  }
  displayResults() {
    if (this.props.searchResult) {
      return this.props.searchResult.items.map(this.displayResult);
    }
  }
  displayResult(result) {
    return <Result key={result.id} data={result} />
  }
  render() {
    return (
      <div>
        {this.showResults() }
      </div>
    );
  }
}

class Result extends Component {
  render() {
    return (
      //TODO: Truncate long descriptions. Give option to expand? 
      <Panel>
        <Col xs={12}>
          <Col xs={12} md={4}>
            <label>Title</label>
            <p>{this.props.data.volumeInfo.title}</p>
          </Col>
          <Col xs={12} md={4}>
            <label>Author</label>
            <p>{this.props.data.volumeInfo.authors ? this.props.data.volumeInfo.authors[0] : ""}</p>
          </Col>
          <Col xs={12} md={4}>
            <label>Published Date</label>
            <p>{this.props.data.volumeInfo.publishedDate}</p>
          </Col>
          <Col xs={12}>
            <label>Description</label>
            <p>{this.props.data.volumeInfo.description}</p>
          </Col>
        </Col>
      </Panel>
    );
  }
}

export class AdView extends Component {
  render() {
    return (
      <div></div>
    );
  }
}