import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      hostsInfo: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  componentDidMount() {
    fetch("https://api.npoint.io/6b7d0f39f7064e787b49")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { hostsInfo: users };
        })
      );
  }

  render() {
    
    const { hostsInfo, searchField } = this.state;
    const { onSearchChange } = this;

    const filterItems = hostsInfo.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Center Onboard Network</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholderHandler="Insert Hostname"
          classNameHandler='Search-Box-Home'
        />
        <CardList 
        hostsInfo={filterItems} 
        />
      </div>
    );
  }
}

export default App;
