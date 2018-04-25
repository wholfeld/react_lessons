import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event =>
        {
          //event.persist();
          //console.log(event);
          //console.log(event.target.value);
          this.onInputChange(event.target.value)
          //this.setState({ term: event.target.value});
        }
      } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
