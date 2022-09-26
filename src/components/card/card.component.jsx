import { Component } from "react";
import "./card.styles.css";

class Card extends Component {

  
  render() {
    // document.body.style.overflow = "hidden"
    const { title,id, name, ip, machineType,wantedWidth,showImage } = this.props;
    
    return (
      <div className="card-container" key={id}>
        <img 
          className="imgInDiv"
          alt={`host ${name}`}
          src={showImage}
          width={wantedWidth}
        />
        <div className="host-info">
          
          <h2 className="header-h2">{name}</h2>
          <div>

          <p>IP - {ip}</p>
          <p>Machine Type - { machineType}</p>
          </div>


        </div>
      </div>
    );
  }
}

export default Card;
