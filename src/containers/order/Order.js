import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {connect} from "react-redux";
import {orderFetch,orderDelete} from "../../actions/";

class Order extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
      this.props.orderFetch();
  }
  delOrder(order) {
    this.props.orderDelete(order.id);
  }
  showOrders() {
    return (
      this.props.orders &&
      this.props.orders.map((order) => {
        const date = new Date(order.orderDate);
        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right">
              <button
                className="bnt btn-danger btn-sm ml-0 title"
                onClick={() => this.delOrder(order)}
              >
                X
              </button>
            </p>
            <h5>
              วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders &&
                order.orders.map((record) => {
                  return (
                    <li key={record.product.id} className="title">
                      {record.product.productName} x {record.quantity} ={" "}
                      {record.product.unitPrice * record.quantity}
                    </li>
                  );
                })}
            </ul>
            <p className="title">ยอดรวม {order.totalPrice}</p>
          </div>
        );
      })
    );
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>รายการสั่งซื้อ</h1>
          <div className="row">{this.showOrders()}</div>
        </div>
        <Footer company="PSU" email="5910110270@psu.ac.th" />
      </div>
    );
  }
}
function mapStateToProps (state){
    return (
      {orders:state.orders}
    )
}
export default connect(mapStateToProps,{orderFetch,orderDelete})(Order);
