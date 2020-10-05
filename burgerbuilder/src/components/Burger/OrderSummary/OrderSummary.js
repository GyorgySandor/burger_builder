import React, { Component } from "react";

import Aux from "../../../hoc/Ausiliary/Ausiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    //this should be a functional component, doesn't have to be a class component
    console.log("[OrderSummary] will");
  }
  render() {
    const ingreientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}></span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingreientSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to chekcout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
