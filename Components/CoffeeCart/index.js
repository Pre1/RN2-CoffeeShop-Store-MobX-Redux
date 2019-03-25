import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

import { connect } from "react-redux";

class CoffeeCart extends Component {
  // state = {
  //   items: [
  //     {
  //       drink: "Latte",
  //       option: "Small",
  //       quantity: 2
  //     },
  //     {
  //       drink: "Espresso",
  //       option: "Large",
  //       quantity: 1
  //     }
  //   ]
  // };
  render() {
    const { items } = this.props;
    console.log("CoffeeCart: ", items);
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.rootCart.items
  };
};
export default connect(mapStateToProps)(CoffeeCart);
