import React from "react";

import Aux from "../../../hoc/Ausiliary";

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
      <p>Continue to chekcout?</p>
    </Aux>
  );
};

export default orderSummary;
