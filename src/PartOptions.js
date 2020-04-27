import React, { Component } from 'react'
import Part from "./Part";

class PartOptions extends Component {
  
  render(props) {
    
    return (
    <fieldset key={this.props.featureHash} className="feature">
      <legend className="feature__name">
        <h3>{this.props.featureName}</h3>
      </legend>
     {this.props.features.map((name, index) => 
         <Part
             name = {name}
             index = {index}
             selected = {this.props.selected}
             select = {this.props.select}
             featureName = {this.props.featureName}
             currency = {this.props.currency}
         />
     )
    }
    </fieldset>
    )
  }
}
export default PartOptions;