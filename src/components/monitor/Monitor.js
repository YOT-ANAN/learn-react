import React, { Component } from "react";
import ProductList from "../product/ProductList";
import Calculator from "./Calculator";
class Monitor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <ProductList products={this.props.products} />
          </div>
          <div className="col-md-3">
            <Calculator />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
