import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
      <input onChange={event =>
      {
        //event.persist();
        //console.log(event);
        //console.log(event.target.value);
        this.setState({ term: event.target.value});
      }} />
       Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
