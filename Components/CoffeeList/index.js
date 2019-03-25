import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

import { connect } from "react-redux";

class CoffeeList extends Component {
  render() {
    let shops;
    let coffeeshops = this.props.list;
    // let coffeeshops = coffeeshops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.rootCoffee.coffeeShops
  };
};
export default connect(mapStateToProps)(CoffeeList);
