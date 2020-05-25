import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { company, email } = this.props;
    return (
      <div className="container-fluid">
        <hr />
        <div className="text-center title text-uppercase">
          <span className="text-danger">Powered by {company} </span>| <span className="text-muted">Contact By Email : {email}</span>
        </div>
      </div>
    );
  }
}
export default Footer;
