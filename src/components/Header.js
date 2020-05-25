import React, { Component } from "react";


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date};
        setInterval(()=>this.tick(),100)
    }
    tick(){
        this.setState({date : new Date})
    }
    render(){
        return(
        <div>
            <h1>Hello React | {this.state.date.toLocaleTimeString()}</h1>
        </div>
        );
    }
}
export default Header;