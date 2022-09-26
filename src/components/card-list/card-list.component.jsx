import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      searchingOnce: true,
    };
  }
  render() {
    const { hostsInfo } = this.props;

    if (hostsInfo.length == 0) {
      if (this.state.searchingOnce) {
        this.state.searchingOnce = false;
        return (
          <Card
            title='loading'
            id={0}
            name={"Loading..."}
            ip={"Please Wait..."}
            machineType={"Please Wait..."}
            wantedWidth="70"
            showImage="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Vector_Loading.svg/1200px-Vector_Loading.svg.png"
          />
        );
      } else {
        return (
          <Card
            id={0}
            title='errorNotFound'
            name={"Item Not Found !"}
            ip={"Please make sure to insert some corrent data. "}
            machineType={"Please make sure to insert some corrent data. "}
            wantedWidth="70"
            showImage="https://cdn-icons-png.flaticon.com/512/1304/1304089.png"
          />
        );
      }
    }
    return (
      <div className="card-list">
        {hostsInfo.map((eachHost) => {
          const { name, ip, machineType, id } = eachHost;
          
          
          return (
            <Card
              title='showing-items'
              id={id}
              name={name}
              ip={ip}
              machineType={ machineType}
              wantedWidth="70"
              showImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fedora_icon_%282021%29.svg/2089px-Fedora_icon_%282021%29.svg.png"
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
