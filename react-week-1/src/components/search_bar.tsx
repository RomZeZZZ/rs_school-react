import React from 'react';
import ISearchState from '../interfaces/ISearch';
class Search extends React.Component<object, ISearchState> {
  constructor(props: object) {
    super(props);
    this.state = { value: '' };
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchBarValue') || '' });
  }
  componentWillUnmount() {
    localStorage.setItem('searchBarValue', this.state.value);
  }
  handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <input
        onChange={this.handleInput}
        value={this.state.value}
        className="main_search"
        type="text"
        placeholder="Search bar"
      />
    );
  }
}
export default Search;
