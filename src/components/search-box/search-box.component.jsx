import { Component } from "react";
import './search-box.style.css'
class SearchBox extends Component {
    
  render() {
    return (
      <input
        className={`search-box ${this.props.classNameHandler}`}
        type="search"
        placeholder={this.props.placeholderHandler}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox