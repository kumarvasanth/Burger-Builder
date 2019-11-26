import React from "react";

import BurgerIngred from "./BurgerIndredients/BurgerIngred";
import classes from "./Burger.css";

const burger = props => {
  let BurgerIndredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngred Type={igkey} key={igkey + i}></BurgerIngred>;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (BurgerIndredients.length === 0) {
    BurgerIndredients = <p>Please add the ingredents.</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngred Type="BreadTop"></BurgerIngred>
      {BurgerIndredients}
      <BurgerIngred Type="BreadBottom"></BurgerIngred>
    </div>
  );
};
export default burger;
