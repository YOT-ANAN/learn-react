import React, { Component } from "react";

class Footer extends Component{
    constructor (props){
        super(props);
       
    }
    render(){
        const {company,email} = this.props
        return(
            <div>
                <h1>Powered by {company} | Contact By Email : {email} </h1>
            </div>
        );
    }
}
export default Footer;