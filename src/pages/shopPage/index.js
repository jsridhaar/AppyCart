import React, { Component } from "react";

import PreviewCollection from "../../components/preview-collection";

import SHOP_DATA from "./data";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Shopdata: SHOP_DATA
    };
  }
  render() {
    const { Shopdata } = this.state;
    return Shopdata.map(({ id, ...otherProps }) => {
      return <PreviewCollection key={id} {...otherProps} />;
    });
  }
}

export default ShopPage;
