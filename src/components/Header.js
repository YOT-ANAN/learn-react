import React, { Component } from "react";
import {Link} from "react-router-dom"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.tick(), 100);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div className="container-fluid">
        <hr />
        <div className="row">
          <div className="col-md-8 text-left">
            <h1>
              <img src="/images/logo/logo.png"></img>
              <span className="ml-4 text-success">สวัสดีวันทร์จันทร์</span>
            </h1>
          </div>
          <div className="col-md-4 text-right mg">
            <h1 className="mt-4"> {this.state.date.toLocaleTimeString()}</h1>
            <ul className="list-inline">
              <li className="list-inline-item title"><Link className="text-success h2" to="/" >หน้าหลัก</Link></li>
              <li className="list-inline-item title h2">|</li>
              <li className="list-inline-item title"><Link className="text-success h2" to="/orders">รายการสินค้า</Link></li>
              <li className="list-inline-item title h2">|</li>
              <li className="list-inline-item title"><Link className="text-success h2" to="/products">สินค้า</Link></li>
              <li className="list-inline-item title h2">|</li>
              <li className="list-inline-item title"><Link className="text-success h2" to="/about">เกี่ยวกับเรา</Link></li>
             
         
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Header;
