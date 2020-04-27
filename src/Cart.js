import React, { Component } from 'react'
import CartItems from './CartItems'
import CartTotal from "./CartTotal";
class Cart extends Component {

  render() {

    return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
        return (
          <CartItems
            key={featureHash}
            selected={selectedOption}
            currency={this.props.currency}
            feature={feature}
          />
        )})}
      <CartTotal
          selected={this.props.selected}
          currency={this.props.currency}
      />
    </section>
    );
  }
}

export default Cart;