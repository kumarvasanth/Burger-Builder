import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const ingred = [
  { label: "Salad", Type: "Salad" },
  { label: "Meat", Type: "Meat" },
  { label: "Bacon", Type: "Bacon" },
  { label: "Cheese", Type: "Cheese" }
];
let type;

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current price:<strong>{props.totalCost.toFixed(2)}</strong>
    </p>
    {ingred.map(ingr => (
      <BuildControl
        key={ingr.label}
        label={ingr.label}
        added={() => props.addIngrediet(ingr.Type)}
        remove={() => props.removeIngredient(ingr.Type)}
        disabled={props.disabled[ingr.Type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchase}>
      ORDER NOW!
    </button>
  </div>
);
export default buildControls;
