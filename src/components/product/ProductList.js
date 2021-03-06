import React, { Component } from "react";
import ProductItem from "./ProductItem";
class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  showProducts() {
    if (this.props.products) {
      return this.props.products.map((product) => (
        <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct} />
        // <ProductItem key={product.productId} {...product}/> use key for uniqe ID object list
      ));
    }
  }
  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}
export default ProductList;
