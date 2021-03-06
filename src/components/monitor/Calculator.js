import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  showOrders(orders) {
    if (!orders || orders.lenght == 0) {
      return <li clasName="text-right text-muted title">ไม่มีสินค้าค่ะ</li>;
    } else {
      return orders.map((order) => {
        return (
          <li key={order.product.id}className="text-right text-success title">
            {order.product.productName} x {order.quantity} ={" "}
            {order.product.unitPrice * order.quantity}
            <button
              className="btn btn-light btn-sm ml-2"
              onClick={() => this.props.onDelOrder(order.product)}
            >
              X
            </button>
          </li>
        );
      });
    }
  }
  render() {
    const { totalPrice, orders } = this.props;
    return (
      <div>
        <h1 className="text-right">{totalPrice}</h1>
        <hr />
        <ul className="list-unstyled">{this.showOrders(this.props.orders)}</ul>
        <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>ยืนยัน</button>
        <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
      </div>
    );
  }
}
export default Calculator;

//   onDelOrder={this.delOrder}
