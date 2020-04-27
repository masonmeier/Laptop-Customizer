import React, { Component } from 'react'
import slugify from 'slugify';



class Part extends Component {
  
  render(props) {
    const name = this.props.name;
    return (
      <div key={slugify(JSON.stringify(name))} className="feature__item">
      <input
        type="radio"
        id={slugify(JSON.stringify(name))}
        className="feature__option"
        name={slugify(this.props.featureName)}
        checked={name.name === this.props.selected[this.props.featureName].name}
        onChange={() => this.props.select(this.props.featureName, name)}
      />
      <label  htmlFor={slugify(JSON.stringify(name))} className="feature__label">
        {name.name} ({this.props.currency.format(name.cost)})
      </label>
      </div>
     )
    }
}

export default Part;