import React from "react";

import Aux from "../../../hoc/Ausiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingreientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}></span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingreientSummary}</ul>
      <p>
        <strong>Total Price:{props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to chekcout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
