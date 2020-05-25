import React, { Component } from "react";
class ProductItem extends Component {
  render() {
    const { productName, unitPrice, thumbnail } = this.props;
    return (
      <div className="col-md-3 col-sm-6 title">
        <img className="img-fluid img-thumbnail" src={thumbnail}/>
        <div className="mt-2 ">
          <p>{productName}</p>
          <p className="text-right">{unitPrice} THB</p>
          <button className="btn btn-block btn-success">ซื้อ</button>
            <hr/>
        </div>
      </div>
    );
  }
}
export default ProductItem;
