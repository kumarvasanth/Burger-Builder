import React, { Component } from "react";
import Aux from "../hoc/Auxiliary";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/BuildControls/BuildControls";

const PRICE_LIST = {
  Cheese: 0.4,
  Meat: 0.5,
  Bacon: 0.3,
  Salad: 0.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Cheese: 0,
      Meat: 0,
      Bacon: 0,
      Salad: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingr => {
        return ingredients[ingr];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  }

  addIngredientHandler = Type => {
    const oldIngredientCount = this.state.ingredients[Type];
    const newIngredientCount = oldIngredientCount + 1;
    const newIngredients = {
      ...this.state.ingredients
    };
    newIngredients[Type] = newIngredientCount;
    const Totalprice = this.state.totalPrice;
    const newIngredientCost = PRICE_LIST[Type];
    const newTotalPrice = newIngredientCost + Totalprice;
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });
    this.updatePurchasable(newIngredients);
  };

  removeIngredientHandler = Type => {
    const oldIngredientCount = this.state.ingredients[Type];
    if (oldIngredientCount <= 0) {
      return;
    }
    const newIngredientCount = oldIngredientCount - 1;
    const newIngredients = {
      ...this.state.ingredients
    };
    newIngredients[Type] = newIngredientCount;

    const oldIngredientCost = PRICE_LIST[Type];
    const oldTotalPrice = this.state.totalPrice;
    const newTotalPrice = oldTotalPrice - oldIngredientCost;
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });
    this.updatePurchasable(newIngredients);
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngrediet={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disableInfo}
          totalCost={this.state.totalPrice}
          purchase={this.state.purchasable}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
