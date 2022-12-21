import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  render(){
    return (
        <div className="App">
            <h3>Kalvium Gallery using Class Component</h3>
            <div className="gallery">
                {this.props.imageData.map((elt) => {
                    return <img src={elt.img} alt="elephant" key={elt.id} />;
                })}
            </div>
        </div>
    );
  }
  
}
