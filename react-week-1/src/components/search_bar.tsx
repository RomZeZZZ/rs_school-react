import React from "react"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleInput = this.handleInput.bind(this);
    }
    componentDidMount() {
        this.setState({value: localStorage.getItem("searchBarValue")});
    }
    componentWillUnmount() {
        localStorage.setItem("searchBarValue", this.state.value);
    }
    handleInput(event) {
        this.setState({value: event.target.value});
        this.value = event.target.value;
    }
    render() {  
        return (
            <input onChange={this.handleInput} value={this.state.value} className="main_search" type="text" placeholder="Search bar" />
        )
    }
}
export default Search;